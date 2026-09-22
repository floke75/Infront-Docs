// One-off: applies casefold.js's naming rule to a corpus generated before the generators had it.
// A regeneration needs none of this; convert*.js name the files correctly themselves.
//
// It reads every file from the git index, not the working tree: on a case-insensitive filesystem
// the working tree holds only one page of each colliding pair. It renames one side of each pair,
// adds the pair's cross-link note, repoints every relative link, index/symbols.tsv,
// index/symbols.json and manifest.json (re-sorted, byte counts refreshed), repacks the per-module
// symbol tables the way index.js would with the longer names, writes the result back
// to the index, and refreshes the touched files in the working tree. Nothing else is staged.
// A corpus without collisions is left alone.
//
// Run from the repository root:  node tools/migrate-case-collisions.js [--dry-run]
const cp=require("child_process"),fs=require("fs"),path=require("path");
const {uncollide,caseNote}=require("./casefold");
const DRY=process.argv.includes("--dry-run");
const git=(args,input)=>cp.execFileSync("git",args,{input,maxBuffer:1<<30});
const base=p=>p.slice(p.lastIndexOf("/")+1);

// ---- the corpus as the index holds it
const entries=git(["ls-files","-s","-z"]).toString("utf8").split("\0").filter(Boolean).map(l=>{
  const [meta,p]=l.split("\t"); const [mode,sha]=meta.split(" "); return {mode,sha,path:p};
}).filter(e=>!e.path.startsWith("tools/"));
const blobs=git(["cat-file","--batch"],entries.map(e=>e.sha).join("\n")+"\n");
const text=new Map(); let off=0;
for(const e of entries){
  const nl=blobs.indexOf(10,off), size=+blobs.slice(off,nl).toString().split(" ")[2];
  text.set(e.path,blobs.slice(nl+1,nl+1+size).toString("utf8")); off=nl+1+size+1;
}
const fm=t=>{ const m=t.match(/^---\n([\s\S]*?)\n---\n/); return m?m[1]:""; };
const fmGet=(t,k)=>{ const m=fm(t).match(new RegExp("^"+k+": (.*)$","m")); if(!m) return null; try{return JSON.parse(m[1]);}catch(e){return m[1];} };

// ---- which pages move
const pages=[...text.keys()].filter(p=>p.endsWith(".md"));
const {rename,groups}=uncollide(pages.map(p=>({path:p,kind:fmGet(text.get(p),"kind"),title:fmGet(text.get(p),"title")})));
if(!rename.size){ console.log("no paths collide ignoring case; nothing to do"); process.exit(0); }
for(const old of rename.keys()){
  const parts=old.replace(/\.md$/,".parts/");
  if(pages.some(p=>p.startsWith(parts))) throw new Error(`${old} has ${parts} — moving part files is not implemented`);
}

// ---- new contents, keyed by final path
const next=new Map();
for(const [p,t] of text) next.set(rename.get(p)||p,t);

// every relative link to a moved page; a label that was the old file name becomes the new one
function relink(file,t){
  const target=href=>path.posix.normalize(path.posix.join(path.posix.dirname(file),href.split("#")[0]));
  const swap=(href,to,from)=>{
    const [hp,...frag]=href.split("#");
    if(!hp.endsWith(base(from))) throw new Error(`${file}: cannot repoint ${href}`);
    return hp.slice(0,hp.length-base(from).length)+base(to)+(frag.length?"#"+frag.join("#"):"");
  };
  t=t.replace(/\[([^\[\]]*)\]\(([^)\s]+)\)/g,(m,label,href)=>{
    if(/^https?:|^mailto:|^#/.test(href)) return m;
    const from=target(href), to=rename.get(from); if(!to||label!==base(from)) return m;
    return `[${base(to)}](${swap(href,to,from)})`;
  });
  return t.replace(/\]\(([^)\s]+)\)/g,(m,href)=>{
    if(/^https?:|^mailto:|^#/.test(href)) return m;
    const from=target(href), to=rename.get(from);
    return to?`](${swap(href,to,from)})`:m;
  });
}
for(const [p,t] of next) if(p.endsWith(".md")) next.set(p,relink(p,t));

// the note under each collided page's H1, exactly where convert*.js put it
for(const g of groups) for(const m of g){
  const t=next.get(m.path), note=caseNote(m,g.filter(o=>o!==m));
  if(t.includes(note)) continue;
  const head=t.match(/^---\n[\s\S]*?\n---\n\n# [^\n]*\n\n/);
  if(!head) throw new Error(`${m.path}: no H1 under the front matter`);
  next.set(m.path,head[0]+note+"\n\n"+t.slice(head[0].length));
}

// index.js packs each module's table rows into files of about 42 KB, so longer names move rows
// across the boundaries; repack them the same way, so a regeneration would not reshuffle them
const tables=JSON.parse(next.get("manifest.json")).symbol_index.tables, byModule=new Map();
for(const t of tables){ const m=fmGet(next.get(t),"module"); byModule.set(m,[...(byModule.get(m)||[]),t]); }
for(const files of byModule.values()){
  const rows=files.flatMap(t=>next.get(t).split("\n").filter(l=>l.startsWith("| `")));
  const chunks=[]; let cur=[],b=0;
  for(const r of rows){ cur.push(r); b+=r.length+1; if(b>42000){ chunks.push(cur); cur=[]; b=0; } }
  if(cur.length) chunks.push(cur);
  if(chunks.length!==files.length) throw new Error(`${files[0]}: repacking changes the number of table files — rerun index.js instead`);
  files.forEach((t,i)=>{
    const head=next.get(t).match(/^[\s\S]*?\n\|---\|---\|---\|---\|\n/)[0].replace(/^symbol_count: \d+$/m,`symbol_count: ${chunks[i].length}`);
    next.set(t,head+chunks[i].join("\n")+"\n");
  });
}

// indexes
const move=f=>rename.get(f)||f;
if(next.has("index/symbols.tsv"))
  next.set("index/symbols.tsv",next.get("index/symbols.tsv").split("\n").map((l,i)=>{
    if(!i||!l) return l; const c=l.split("\t"); c[3]=move(c[3]); return c.join("\t");
  }).join("\n"));
function rewriteJson(file,indent,edit){
  const src=next.get(file), o=JSON.parse(src), fmt=x=>JSON.stringify(x,null,indent);
  if(fmt(o)!==src) throw new Error(`${file} is not in the form index.js writes; refusing to reformat it`);
  edit(o); next.set(file,fmt(o));
}
if(next.has("index/symbols.json"))
  rewriteJson("index/symbols.json",undefined,o=>{ for(const list of Object.values(o.symbols)) for(const s of list) s.f=move(s.f); });
let resized=[];
if(next.has("manifest.json"))
  rewriteJson("manifest.json",1,o=>{
    for(const e of o.files){
      e.file=move(e.file);
      const b=Buffer.byteLength(next.get(e.file)||"");
      if(next.has(e.file)&&b!==e.bytes){ e.bytes=b; resized.push(e.file); }
    }
    o.files.sort((a,b)=>a.file<b.file?-1:a.file>b.file?1:0);
    o.total_bytes=o.files.reduce((a,e)=>a+e.bytes,0);
  });

// ---- what changed
const removed=[...rename.keys()];
const written=[...next.keys()].filter(p=>!text.has(p)||text.get(p)!==next.get(p));
console.log(`${rename.size} pages renamed:`);
for(const [a,b] of rename) console.log(`  ${a}\n    -> ${base(b)}`);
console.log(`${written.length} files written (${written.filter(p=>!text.has(p)).length} new), ${removed.length} removed; manifest byte counts refreshed for ${resized.length}`);
if(DRY) process.exit(0);

// ---- into the index, then the working tree
const mode=new Map(entries.map(e=>[e.path,e.mode])), oldOf=new Map([...rename].map(([a,b])=>[b,a]));
const info=[...removed.map(p=>`0 ${"0".repeat(40)}\t${p}`),
  ...written.map(p=>`${mode.get(oldOf.get(p)||p)} ${git(["hash-object","-w","--stdin"],next.get(p)).toString().trim()}\t${p}`)];
git(["update-index","--index-info"],info.join("\n")+"\n");
// deleting first matters on a case-insensitive filesystem: the old name and the kept one are one file
for(const p of [...removed,...written]) fs.rmSync(p,{force:true});
git(["checkout-index","-f","-z","--stdin"],written.join("\0")+"\0");
console.log("index updated and working tree refreshed; review with git status / git diff --cached");

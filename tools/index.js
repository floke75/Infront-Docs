const fs=require("fs"),path=require("path");
const OUT=process.env.OUT||"out";
const VERSION="4.3.1";
const KIND={1:"project",2:"module",4:"namespace",8:"enum",16:"enum-member",32:"variable",64:"function",128:"class",256:"interface",512:"constructor",1024:"property",2048:"method",4096:"call-signature",8192:"index-signature",16384:"constructor-signature",32768:"parameter",65536:"type-literal",131072:"type-parameter",262144:"accessor",524288:"get-signature",1048576:"set-signature",2097152:"type-alias",4194304:"reference",8388608:"document"};
const PAGE_KINDS=new Set(["module","namespace","enum","variable","function","class","interface","type-alias"]);

const pages=JSON.parse(fs.readFileSync("pages.json","utf8"));
const search=JSON.parse(fs.readFileSync("search.json","utf8"));
const made=JSON.parse(fs.readFileSync("examples-made.json","utf8"));
const guides=JSON.parse(fs.readFileSync("guides-made.json","utf8"));
const legacy=fs.existsSync("legacy-made.json")?JSON.parse(fs.readFileSync("legacy-made.json","utf8")):[];
const pageByTd=Object.create(null); for(const p of pages) pageByTd[p.tdPath]=p;

function walk(d,acc=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,acc):(e.name.endsWith(".md")&&acc.push(p));}return acc;}
const allFiles=walk(OUT).map(f=>path.relative(OUT,f)).sort();

// heading slug -> file, so anchors still resolve after a page was split into parts
const slugOf=s=>s.toLowerCase().replace(/[`*_\[\]()]/g,"").replace(/[^a-z0-9]+/g,"").trim();
const headingIn=Object.create(null);                       // "base.md" -> { slug -> actual file }
for(const rel of allFiles){
  const owner = rel.includes(".parts/") ? rel.replace(/\.parts\/.*$/,".md") : rel;
  const txt=fs.readFileSync(path.join(OUT,rel),"utf8");
  const map=headingIn[owner]=headingIn[owner]||Object.create(null);
  for(const m of txt.matchAll(/^#{2,6} (.+)$/gm)){
    const s=slugOf(m[1]); if(s&&!map[s]) map[s]=rel;
  }
}
function resolve(file,anchor){
  if(!anchor) return {file,anchor:null};
  const map=Object.prototype.hasOwnProperty.call(headingIn,file)?headingIn[file]:null; if(!map) return {file,anchor};
  const key=slugOf(anchor);
  const hit=Object.prototype.hasOwnProperty.call(map,key)?map[key]:null;
  return hit?{file:hit,anchor}:{file,anchor};
}

// ---------- symbols ----------
const symbols=[];
for(const r of search.rows){
  const [tdPath,anchor]=(r.url||"").split("#");
  const pg=pageByTd[tdPath]; if(!pg) continue;
  const owner=pg.qualified||pg.title;
  const kind=KIND[r.kind]||String(r.kind);
  const {file,anchor:a}=resolve(pg.outPath,anchor);
  if(!fs.existsSync(path.join(OUT,file))) continue;
  symbols.push({name:r.name,qualified:anchor?`${owner}.${r.name}`:owner,kind,file,anchor:a||"",module:(pg.qualified||"").split(".")[0]||"",member:!!anchor});
}
for(const e of [...made.examples,...made.snippets]) for(const s of e.symbols)
  symbols.push({name:s,qualified:s,kind:"example-usage",file:e.out,anchor:"",module:"",member:false});
// legacy 2.x/3.x widgets and their options, so a name search finds the older docs too
for(const l of legacy){
  if(!fs.existsSync(path.join(OUT,l.file))) continue;
  if(l.id) symbols.push({name:l.id,qualified:`WTK${l.ver}.${l.id}`,kind:"legacy-widget",file:l.file,anchor:"",module:"Legacy",member:false});
  for(const o of (l.optionNames||[])) symbols.push({name:o,qualified:`WTK${l.ver}.${l.id||l.page}.${o}`,kind:"legacy-option",file:l.file,anchor:o,module:"Legacy",member:true});
}

// TSV: the grep-friendly primary index
const tsv=["name\tkind\tqualified_name\tfile\tanchor",
  ...symbols.map(s=>[s.name,s.kind,s.qualified,s.file,s.anchor].join("\t"))].join("\n")+"\n";
fs.mkdirSync(path.join(OUT,"index"),{recursive:true});
fs.writeFileSync(path.join(OUT,"index/symbols.tsv"),tsv);

// JSON map for programmatic lookup, compact keys
const byName=Object.create(null);
for(const s of symbols){ const k=s.name; if(!Object.prototype.hasOwnProperty.call(byName,k))byName[k]=[];
  byName[k].push({q:s.qualified,k:s.kind,f:s.file,...(s.anchor?{a:s.anchor}:{})}); }
fs.writeFileSync(path.join(OUT,"index/symbols.json"),JSON.stringify({
  product:"Infront Web Toolkit",version:VERSION,
  schema:{q:"qualified_name",k:"kind",f:"file, relative to the corpus root",a:"heading anchor inside that file"},
  count:symbols.length,unique_names:Object.keys(byName).length,symbols:byName}));

// Markdown tables: page-level (top-level) symbols only
const top=symbols.filter(s=>!s.member&&PAGE_KINDS.has(s.kind));
const mods=Object.create(null); for(const s of top){ const mk=s.module||"Other"; if(!Object.prototype.hasOwnProperty.call(mods,mk))mods[mk]=[]; mods[mk].push(s); }
const modFiles=[];
for(const [m,list] of Object.entries(mods)){
  const seen=new Set(); const rows=[];
  list.sort((a,b)=>a.qualified.localeCompare(b.qualified));
  for(const s of list){ if(seen.has(s.qualified))continue; seen.add(s.qualified);
    rows.push(`| \`${s.name}\` | ${s.kind} | \`${s.qualified}\` | [${path.basename(s.file)}](../${s.file}) |`); }
  const chunks=[];let cur=[],b=0;
  for(const r of rows){cur.push(r);b+=r.length+1;if(b>42000){chunks.push(cur);cur=[];b=0;}}
  if(cur.length)chunks.push(cur);
  chunks.forEach((c,i)=>{
    const nm=`symbols-${m}${chunks.length>1?`-${String(i+1).padStart(2,"0")}`:""}.md`;
    const t=`Symbol index — ${m}${chunks.length>1?` (part ${i+1}/${chunks.length})`:""}`;
    fs.writeFileSync(path.join(OUT,"index",nm),
      `---\ntitle: ${JSON.stringify(t)}\nkind: index\npage_type: symbol-index\nproduct: "Infront Web Toolkit"\nversion: "${VERSION}"\nmodule: ${JSON.stringify(m)}\nsymbol_count: ${c.length}\nnote: "Top-level symbols only. Members (methods, properties, enum members) are in index/symbols.tsv."\n---\n\n# ${t}\n\n| Symbol | Kind | Qualified name | Page |\n|---|---|---|---|\n${c.join("\n")}\n`);
    modFiles.push("index/"+nm);
  });
}

// topic tree from the nav paths
const tree=Object.create(null);
for(const p of pages){ if(!p.trail||!p.trail.length) continue;
  let n=tree; for(const seg of p.trail.slice(0,-1)){ if(!Object.prototype.hasOwnProperty.call(n,seg))n[seg]=Object.assign(Object.create(null),{__items:[]}); n=n[seg]; }
  n.__items=n.__items||[]; n.__items.push(p); }
function render(n,depth,out){
  for(const [k,v] of Object.entries(n)){ if(k==="__items")continue;
    out.push(`${"  ".repeat(depth)}- **${k}**`); render(v,depth+1,out);
    for(const it of (v.__items||[]).sort((a,b)=>a.title.localeCompare(b.title)))
      out.push(`${"  ".repeat(depth+1)}- [${it.title}](../${it.outPath}) — ${it.kind}`); }
}
const tl=[]; render(tree,0,tl);
fs.writeFileSync(path.join(OUT,"index/topics.md"),
  `---\ntitle: "Topic tree"\nkind: index\npage_type: topic-index\nproduct: "Infront Web Toolkit"\nversion: "${VERSION}"\n---\n\n# Topic tree\n\nThe documentation's own navigation, with every reference page in place.\n\n`+tl.join("\n")+"\n");

// ---------- manifest ----------
function fmOf(rel){
  const t=fs.readFileSync(path.join(OUT,rel),"utf8");
  const m=t.match(/^---\n([\s\S]*?)\n---/); if(!m) return {bytes:Buffer.byteLength(t)};
  const o={};
  for(const line of m[1].split("\n")){
    const mm=line.match(/^([a-z_]+): (.*)$/); if(!mm) continue;
    let v=mm[2].replace(/\s+#.*$/,"");
    if(/^\[/.test(v)||/^".*"$/.test(v)){try{v=JSON.parse(v)}catch(e){}}
    o[mm[1]]=v;
  }
  return {...o,bytes:Buffer.byteLength(t)};
}
const files2=walk(OUT).map(f=>path.relative(OUT,f)).sort();
const entries=files2.map(rel=>{const f=fmOf(rel);const e={file:rel,title:f.title,kind:f.kind,page_type:f.page_type,bytes:f.bytes};
  for(const k of ["module","namespace","group","nav_path","source_url","library","part_of","member_count","value_count","part_count"]) if(f[k]!==undefined) e[k]=f[k];
  if(f.is_index==="true") e.is_index=true;
  if(f.defines) e.defines=f.defines;
  return e;});
const stats={},kinds={};
for(const e of entries){stats[e.page_type||"other"]=(stats[e.page_type||"other"]||0)+1;kinds[e.kind||"other"]=(kinds[e.kind||"other"]||0)+1;}
fs.writeFileSync(path.join(OUT,"manifest.json"),JSON.stringify({
  product:"Infront Web Toolkit",
  libraries:{WTK:"Infront Web Toolkit widgets, v4.3.1",SDK:"Infront SDK — market data, news and trading, v2.3.1",Utils:"InfrontUtil helpers, bundled with the SDK"},
  docs_version:VERSION,
  extracted:new Date().toISOString().slice(0,10),
  sources:["https://docs.infrontfinance.com/docs/ (TypeDoc reference)","https://docs.infrontfinance.com/examples/ (runnable examples)","https://docs.infrontfinance.com/tests/ (per-widget snippets)"],
  file_count:entries.length,total_bytes:entries.reduce((a,e)=>a+e.bytes,0),
  by_page_type:stats,by_kind:kinds,
  entry_points:{start_here:"README.md",symbol_lookup:"index/symbols.tsv",symbol_lookup_json:"index/symbols.json",topic_tree:"index/topics.md",guides:"guides/getting-started.md"},
  symbol_index:{tsv:"index/symbols.tsv",json:"index/symbols.json",tables:modFiles,entries:symbols.length,unique_names:Object.keys(byName).length},
  guides:guides.map(g=>({file:g.file,title:g.title,library:g.library})),
  files:entries},null,1));

console.log("symbols",symbols.length,"unique",Object.keys(byName).length,"top-level",top.length);
console.log("files",entries.length,JSON.stringify(stats));

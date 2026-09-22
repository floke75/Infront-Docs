// The file list in manifest.json: every Markdown file under a root, with the front matter fields
// an agent routes on. index.js writes it during a regeneration. Run directly, it refreshes the
// file list, counts and byte totals of an existing manifest after hand edits (field-notes/,
// README.md) without needing the raw mirrors:
//   node tools/manifest.js [root]      root defaults to "."
// Byte counts are of the LF text, so a Windows checkout (CRLF) gives the same numbers as Linux.
const fs=require("fs"),path=require("path");
const SKIP=new Set(["node_modules","out","tools"]);     // not corpus, when root is a checkout

function fmOf(text){
  const m=text.match(/^---\n([\s\S]*?)\n---/); if(!m) return {};
  const o={};
  for(const line of m[1].split("\n")){
    const mm=line.match(/^([a-z_]+): (.*)$/); if(!mm) continue;
    let v=mm[2].replace(/\s+#.*$/,"");
    if(/^\[/.test(v)||/^".*"$/.test(v)){try{v=JSON.parse(v)}catch(e){}}
    o[mm[1]]=v;
  }
  return o;
}

function scan(root){
  const files=[];
  (function walk(rel){
    for(const e of fs.readdirSync(path.join(root,rel),{withFileTypes:true})){
      if(e.name.startsWith(".")) continue;
      const p=rel?rel+"/"+e.name:e.name;
      if(e.isDirectory()){ if(!SKIP.has(e.name)) walk(p); }
      else if(e.name.endsWith(".md")) files.push(p);
    }
  })("");
  files.sort();
  const entries=files.map(rel=>{
    const t=fs.readFileSync(path.join(root,rel),"utf8").replace(/\r\n/g,"\n");
    const f={...fmOf(t),bytes:Buffer.byteLength(t)};
    const e={file:rel,title:f.title,kind:f.kind,page_type:f.page_type,bytes:f.bytes};
    for(const k of ["module","namespace","group","nav_path","source_url","library","part_of","member_count","value_count","part_count"]) if(f[k]!==undefined) e[k]=f[k];
    if(f.is_index==="true") e.is_index=true;
    if(f.defines) e.defines=f.defines;
    return e;
  });
  const stats={},kinds={};
  for(const e of entries){stats[e.page_type||"other"]=(stats[e.page_type||"other"]||0)+1;kinds[e.kind||"other"]=(kinds[e.kind||"other"]||0)+1;}
  return {entries,stats,kinds};
}

if(require.main===module){
  const root=process.argv[2]||".", file=path.join(root,"manifest.json");
  const M=JSON.parse(fs.readFileSync(file,"utf8"));
  const {entries,stats,kinds}=scan(root);
  const before=new Set(M.files.map(e=>e.file));
  Object.assign(M,{file_count:entries.length,total_bytes:entries.reduce((a,e)=>a+e.bytes,0),by_page_type:stats,by_kind:kinds,files:entries});
  fs.writeFileSync(file,JSON.stringify(M,null,1));
  const added=entries.filter(e=>!before.has(e.file)).map(e=>e.file), now=new Set(entries.map(e=>e.file));
  console.log(`manifest.json: ${entries.length} files, ${M.total_bytes} bytes; added ${added.length}, dropped ${[...before].filter(f=>!now.has(f)).length}`);
  added.forEach(f=>console.log("  + "+f));
}
module.exports={scan};

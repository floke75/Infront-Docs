// Verifies a corpus tree and exits non-zero on any problem:
//   - every relative Markdown link resolves to a file or directory of exactly that name
//     (compared against directory listings, so a case-insensitive filesystem cannot hide
//     a link whose case is wrong);
//   - no two paths are equal ignoring case (they would be one file on Windows and macOS);
//   - every file named by index/symbols.tsv, index/symbols.json and manifest.json exists,
//     and manifest.json lists every Markdown file (tools/ aside).
// Usage: node check.js [root]   root defaults to $OUT, then out/. `node tools/check.js .`
// from the repository root checks the committed corpus.
const fs=require("fs"),path=require("path");
const ROOT=process.argv[2]||process.env.OUT||"out";
const SKIP=new Set(["node_modules","out"]);          // build artefacts under a checked-out root

const files=new Set(),dirs=new Set();
(function walk(rel){
  for(const e of fs.readdirSync(path.join(ROOT,rel),{withFileTypes:true})){
    if(e.name.startsWith(".")) continue;
    const p=rel?rel+"/"+e.name:e.name;
    if(e.isDirectory()){ if(SKIP.has(e.name)) continue; dirs.add(p); walk(p); }
    else files.add(p);
  }
})("");
const exists=p=>files.has(p)||dirs.has(p);
let failed=false;
const report=(label,bad,total)=>{
  console.log(label+(total!==undefined?` ${total}, `:" ")+`broken: ${bad.length}`);
  bad.slice(0,12).forEach(s=>console.log("  "+s));
  if(bad.length) failed=true;
};

// relative links
let total=0;const broken=[];
for(const f of [...files].filter(f=>f.endsWith(".md")).sort()){
  const txt=fs.readFileSync(path.join(ROOT,f),"utf8");
  for(const m of txt.matchAll(/\]\(([^)\s]+)\)/g)){
    const href=m[1];
    if(/^https?:|^mailto:|^#/.test(href)) continue;
    total++;
    const target=path.posix.normalize(path.posix.join(path.posix.dirname(f),href.split("#")[0])).replace(/\/$/,"");
    if(target.startsWith("..")||!exists(target)) broken.push(f+" -> "+href);
  }
}
report("relative links:",broken,total);

// paths equal ignoring case
const folded=new Map();
for(const p of [...files,...dirs]){ const k=p.toLowerCase(); folded.set(k,[...(folded.get(k)||[]),p]); }
report("paths equal ignoring case:",[...folded.values()].filter(g=>g.length>1).map(g=>g.join("  ==  ")));

// files the indexes point at
const named=new Set(),listed=new Set();
const read=rel=>fs.readFileSync(path.join(ROOT,rel),"utf8");
if(files.has("index/symbols.tsv"))
  for(const l of read("index/symbols.tsv").split(/\r?\n/).slice(1)){ const c=l.split("\t"); if(c[3]) named.add(c[3]); }
if(files.has("index/symbols.json"))
  for(const list of Object.values(JSON.parse(read("index/symbols.json")).symbols)) for(const s of list) named.add(s.f);
if(files.has("manifest.json")){
  const M=JSON.parse(read("manifest.json"));
  for(const e of M.files){ named.add(e.file); listed.add(e.file); }
  for(const p of [...Object.values(M.entry_points),...M.symbol_index.tables,...M.guides.map(g=>g.file)]) named.add(p);
}
report("files named by the indexes:",[...named].filter(p=>!files.has(p)).sort(),named.size);
if(files.has("manifest.json"))
  report("Markdown files manifest.json leaves out:",[...files].filter(f=>f.endsWith(".md")&&!f.startsWith("tools/")&&!listed.has(f)).sort());

if(failed){ console.error("check failed"); process.exit(1); }

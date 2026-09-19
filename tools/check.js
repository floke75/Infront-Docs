const fs=require("fs"),path=require("path");
const OUT="out";
function walk(d,a=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,a):(e.name.endsWith(".md")&&a.push(p));}return a;}
let total=0,broken=0;const samples=[];
for(const f of walk(OUT)){
  const txt=fs.readFileSync(f,"utf8");
  for(const m of txt.matchAll(/\]\(([^)\s]+)\)/g)){
    const href=m[1];
    if(/^https?:|^mailto:|^#/.test(href)) continue;
    total++;
    const target=path.resolve(path.dirname(f),href.split("#")[0]);
    if(!fs.existsSync(target)){broken++;if(samples.length<12)samples.push(path.relative(OUT,f)+" -> "+href);}
  }
}
console.log("relative links:",total,"broken:",broken);
samples.forEach(s=>console.log("  "+s));
// TSV file column integrity
const tsv=fs.readFileSync(path.join(OUT,"index/symbols.tsv"),"utf8").split("\n").slice(1).filter(Boolean);
let bad=0;const seen=new Set();
for(const l of tsv){const c=l.split("\t");if(!c[3])continue;if(!seen.has(c[3])){seen.add(c[3]);if(!fs.existsSync(path.join(OUT,c[3])))bad++;}}
console.log("symbols.tsv distinct files:",seen.size,"missing:",bad);

const fs=require("fs"),path=require("path");
const OUT=process.env.OUT||"out";
function walk(d,a=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,a):(e.name.endsWith(".md")&&a.push(p));}return a;}
let tidied=0,unlinked=0;
for(const f of walk(OUT)){
  const txt=fs.readFileSync(f,"utf8");
  let out=txt.replace(/\]\((\.\.\/)\.\//g,"]($1");            // ".././x" -> "../x"
  out=out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,(m,label,href)=>{
    if(/^https?:|^mailto:|^#/.test(href)) return m;
    const t=path.resolve(path.dirname(f),href.split("#")[0]);
    if(fs.existsSync(t)) return m;
    unlinked++;
    return `\`${label}\``;                                     // dead upstream link -> plain code span
  });
  if(out!==txt){fs.writeFileSync(f,out);tidied++;}
}
console.log("files tidied",tidied,"dead links delinked",unlinked);

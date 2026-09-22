const fs=require("fs"),path=require("path");
const {uncollide,caseNote}=require("./casefold");
const OUT=process.env.OUT||"out";
const EX=JSON.parse(fs.readFileSync("examples-flat.json","utf8"));
const TE=JSON.parse(fs.readFileSync("tests-index.json","utf8"));
const LANG={ "script.ts":"typescript", "template.html":"html", "style.css":"css" };
const LABEL={ "script.ts":"Script (script.ts)", "template.html":"Markup (template.html)", "style.css":"Styles (style.css)" };

function slug(s){return s.replace(/[^A-Za-z0-9]+/g,"-").replace(/^-|-$/g,"");}
function esc(s){return JSON.stringify(s);}
function yl(a){return "["+a.map(x=>JSON.stringify(x)).join(", ")+"]";}

// symbols named by a snippet's tags, e.g. "widget:ChartWidget"
function symbolsFromTags(tags){ return [...new Set((tags||[]).filter(t=>t.includes(":")).map(t=>t.split(":").slice(1).join(":")))]; }

function build(kind,rows,rawRoot,outDir,urlRoot){
  const jobs=[];
  const used=new Set(); const donePaths=new Set();
  for(const r of rows){
    if(donePaths.has(r.path)) continue;   // the same example is listed twice in Infront's index
    donePaths.add(r.path);
    const src=path.join(rawRoot,r.path);
    if(!fs.existsSync(src)) continue;
    const files={};
    for(const f of ["script.ts","template.html","style.css","config.json"]){
      const p=path.join(src,f);
      if(fs.existsSync(p)) files[f]=fs.readFileSync(p,"utf8");
    }
    if(!files["script.ts"]&&!files["template.html"]) continue;
    let cfg={}; try{cfg=JSON.parse(files["config.json"]||"{}")}catch(e){}
    let name=slug(r.trail?r.trail.replace(/ > /g,"-"):r.path.replace(/\//g,"-"));
    if(used.has(name)){ let n=2; while(used.has(`${name}-${n}`)) n++; name=`${name}-${n}`; }
    used.add(name);
    jobs.push({r,files,cfg,name});
  }
  // GPRV and Gprv would share one file on Windows; see casefold.js
  const {rename,groups}=uncollide(jobs.map(j=>({path:j.name+".md",kind,title:j.r.title})));
  const caseNotes=new Map();
  for(const g of groups) for(const m of g) caseNotes.set(m.path,caseNote(m,g.filter(o=>o!==m))+"\n\n");
  const made=[];
  for(const {r,files,cfg,name} of jobs){
    const file=rename.get(name+".md")||name+".md";
    const out=path.join(outDir,file);
    const syms=symbolsFromTags(r.tags);
    const L=["---"];
    L.push(`title: ${esc(r.title)}`);
    L.push(`kind: ${kind}`);
    L.push(`page_type: example`);
    L.push(`product: "Infront Web Toolkit"`);
    L.push(`version: "4.3.1"`);
    if(r.trail) L.push(`nav_path: ${esc(r.trail)}`);
    if(r.description) L.push(`description: ${esc(r.description)}`);
    if(r.tags&&r.tags.length) L.push(`tags: ${yl(r.tags)}`);
    if(syms.length) L.push(`demonstrates: ${yl(syms)}`);
    if(cfg&&Object.keys(cfg).length) L.push(`example_config: ${JSON.stringify(cfg)}`);
    L.push(`source_url: ${esc(urlRoot+"/"+r.path)}`);
    L.push(`source_files: ${yl(Object.keys(files))}`);
    L.push("---");
    let md=L.join("\n")+`\n\n# ${r.title}\n\n`+(caseNotes.get(file)||"");
    if(r.description) md+=r.description+"\n\n";
    if(syms.length) md+=`Demonstrates: ${syms.map(s=>"`"+s+"`").join(", ")}\n\n`;
    for(const f of ["script.ts","template.html","style.css"]){
      if(!files[f]) continue;
      md+=`## ${LABEL[f]}\n\n\`\`\`${LANG[f]}\n${files[f].replace(/\s+$/,"")}\n\`\`\`\n\n`;
    }
    fs.mkdirSync(outDir,{recursive:true});
    fs.writeFileSync(out,md);
    made.push({out:path.relative(OUT,out),title:r.title,trail:r.trail||r.path,tags:r.tags||[],symbols:syms,path:r.path});
  }
  return made;
}

const ex=build("example",EX,"raw-examples",path.join(OUT,"examples"),"https://docs.infrontfinance.com/examples");
const te=build("widget-snippet",TE.map(r=>({...r,trail:"Widget snippets > "+r.title})),"raw-tests",path.join(OUT,"snippets"),"https://docs.infrontfinance.com/tests");
fs.writeFileSync("examples-made.json",JSON.stringify({examples:ex,snippets:te},null,1));
console.log("examples",ex.length,"snippets",te.length);

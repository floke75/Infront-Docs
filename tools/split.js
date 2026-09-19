const fs=require("fs"),path=require("path");
const OUT=process.env.OUT||"out";
const MAX=48000;

function walk(d,acc=[]){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);e.isDirectory()?walk(p,acc):(e.name.endsWith(".md")&&acc.push(p));}return acc;}
function parseFM(md){
  const m=md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  return m?{fm:m[1],body:m[2]}:{fm:"",body:md};
}
function fmGet(fm,key){const m=fm.match(new RegExp("^"+key+": (.*)$","m"));return m?m[1]:null;}
function fmSet(fm,key,val){
  if(new RegExp("^"+key+": ","m").test(fm)) return fm.replace(new RegExp("^"+key+": .*$","m"),`${key}: ${val}`);
  return fm+`\n${key}: ${val}`;
}
function rebase(text){
  // part files live one directory deeper than the page they came from
  return text.replace(/\]\(([^)\s]+)\)/g,(m,href)=>{
    if(/^https?:|^mailto:|^#|^\//.test(href)) return m;
    return "](../"+href+")";
  });
}

function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,48)||"section";}

// ---- union splitter -------------------------------------------------------
function unionParts(body){
  const m=body.match(/```ts\n([\s\S]*?)\n```/);
  if(!m) return null;
  const code=m[1];
  const vals=[...code.matchAll(/^\s*\|\s*"([^"]*)"\s*$/gm)].map(x=>x[1]);
  if(vals.length<400) return null;
  const head=code.split("\n")[0].replace(/:$/,"").trim();
  const groups=new Map();
  for(const v of vals){
    const seg=v.split(".");
    const key=seg.length>=2?seg.slice(0,2).join("."):(seg[0]||"(root)");
    if(!groups.has(key)) groups.set(key,[]);
    groups.get(key).push(v);
  }
  // merge tiny groups so we don't produce hundreds of files
  const merged=[];let cur=null;
  for(const [k,v] of groups){
    const chunks=[];
    for(let i=0;i<v.length;){const take=[];let b=0;
      while(i<v.length&&take.length<800&&b<30000){take.push(v[i]);b+=v[i].length+1;i++;}
      chunks.push(take);}
    for(const ch of chunks){
      const bytes=ch.reduce((a,x)=>a+x.length+1,0);
      const curBytes=cur?cur.values.reduce((a,x)=>a+x.length+1,0):0;
      if(cur&&cur.values.length+ch.length<=800&&curBytes+bytes<=30000){if(!cur.keys.includes(k))cur.keys.push(k);cur.values.push(...ch);}
      else{cur={keys:[k],values:[...ch]};merged.push(cur);}
    }
  }
  return {head,total:vals.length,parts:merged};
}

// ---- heading splitter -----------------------------------------------------
function headingParts(body){
  const lines=body.split("\n");
  let lvl=null;
  for(const l of lines){const m=l.match(/^(#{2,4}) \S/);if(m&&(lvl===null||m[1].length<lvl))lvl=m[1].length;}
  if(lvl===null) return null;
  const marker="#".repeat(lvl)+" ";
  const secs=[];let pre=[],cur=null,inFence=false;
  for(const l of lines){
    if(/^```/.test(l)) inFence=!inFence;
    if(!inFence&&l.startsWith(marker)){ cur={title:l.slice(marker.length).trim(),lines:[l]}; secs.push(cur); continue; }
    (cur?cur.lines:pre).push(l);
  }
  if(!secs.length) return null;
  // pack sections into parts under MAX
  const parts=[];let p=null;
  const expanded=[];
  for(const s of secs){
    const txt=s.lines.join("\n");
    if(Buffer.byteLength(txt)<=MAX){expanded.push(s);continue;}
    const sub=headingParts(s.lines.slice(1).join("\n"));
    if(sub&&sub.parts.length>1){
      sub.parts.forEach((sp,i)=>expanded.push({title:`${s.title} (${i+1}/${sub.parts.length})`,lines:[s.lines[0],sp.text]}));
    }else{
      // no further structure: chunk by lines
      const body=s.lines.slice(1);const chunk=[];let b=0,n=0;
      let acc=[];
      for(const l of body){acc.push(l);b+=l.length+1;if(b>MAX*0.8){chunk.push(acc);acc=[];b=0;}}
      if(acc.length)chunk.push(acc);
      chunk.forEach((cl,i)=>expanded.push({title:`${s.title} (${i+1}/${chunk.length})`,lines:[s.lines[0],...cl]}));
    }
  }
  for(const s of expanded){
    const txt=s.lines.join("\n");
    if(p&&Buffer.byteLength(p.text)+Buffer.byteLength(txt)<=MAX){p.text+="\n"+txt;p.titles.push(s.title);}
    else{p={titles:[s.title],text:txt};parts.push(p);}
  }
  return {intro:pre.join("\n").trim(),parts};
}

// ---------------------------------------------------------------------------
const created=[];
let splitCount=0;
for(const f of walk(OUT)){
  const raw=fs.readFileSync(f,"utf8");
  if(Buffer.byteLength(raw)<=MAX) continue;
  const {fm,body}=parseFM(raw);
  const title=(fmGet(fm,"title")||path.basename(f,".md")).replace(/^"|"$/g,"");
  const base=path.basename(f,".md");
  const dir=path.join(path.dirname(f),base+".parts");

  const u=unionParts(body);
  let entries=null,kindNote="";
  if(u){
    fs.mkdirSync(dir,{recursive:true});
    entries=u.parts.map((p,i)=>{
      const name=`${String(i+1).padStart(2,"0")}-${slug(p.keys[0])}.md`;
      const label=p.keys.length===1?p.keys[0]:`${p.keys[0]} … ${p.keys[p.keys.length-1]}`;
      let pfm=fmSet(fmSet(fm,"title",JSON.stringify(`${title} — values ${label}`)),"part_of",JSON.stringify(base));
      pfm=fmSet(pfm,"part_index",String(i+1));
      pfm=fmSet(pfm,"value_prefixes",JSON.stringify(p.keys.join(", ")));
      pfm=fmSet(pfm,"value_count",String(p.values.length));
      pfm=pfm.replace(/^references: .*$/m,"").replace(/\n{2,}/g,"\n");
      const md=`---\n${pfm}\n---\n\n# ${title} — values ${label}\n\nAllowed string values of \`${title}\` with prefix ${p.keys.map(k=>"`"+k+"`").join(", ")}. Part ${i+1} of ${u.parts.length}. Parent: [${title}](../${base}.md).\n\n\`\`\`\n${p.values.join("\n")}\n\`\`\`\n`;
      fs.writeFileSync(path.join(dir,name),md);
      created.push(path.join(dir,name));
      return {name,label,count:p.values.length,keys:p.keys.slice(0,3),more:Math.max(0,p.keys.length-3)};
    });
    kindNote=`This is a string-union type with **${u.total}** allowed values, split by field prefix across ${u.parts.length} part files.`;
    let nfm=fmSet(fm,"value_count",String(u.total));
    nfm=fmSet(nfm,"part_count",String(u.parts.length));
    nfm=fmSet(nfm,"is_index","true");
    const head=`---\n${nfm}\n---\n\n# ${title}\n\n${kindNote}\n\n\`\`\`ts\n${u.head}: <one of the values listed in the parts below>\n\`\`\`\n\n## Value groups\n\n`+
      entries.map(e=>`- [${e.label}](./${base}.parts/${e.name}) — ${e.count} values, prefixes ${e.keys.join(", ")}${e.more?` +${e.more} more`:""}`).join("\n")+"\n";
    fs.writeFileSync(f,head);
    splitCount++;
    continue;
  }

  const h=headingParts(body);
  if(!h||h.parts.length<2) continue;
  fs.mkdirSync(dir,{recursive:true});
  entries=h.parts.map((p,i)=>{
    const name=`${String(i+1).padStart(2,"0")}-${slug(p.titles[0])}.md`;
    let pfm=fmSet(fmSet(fm,"title",JSON.stringify(`${title} — ${p.titles[0]}${p.titles.length>1?" …":""}`)),"part_of",JSON.stringify(base));
    pfm=fmSet(pfm,"part_index",String(i+1));
    pfm=fmSet(pfm,"sections",JSON.stringify(p.titles.join(", ")));
    const md=`---\n${pfm}\n---\n\n> Part ${i+1} of ${h.parts.length} of [${title}](../${base}.md).\n\n${rebase(p.text.trim())}\n`;
    fs.writeFileSync(path.join(dir,name),md);
    created.push(path.join(dir,name));
    return {name,titles:p.titles};
  });
  let nfm=fmSet(fm,"part_count",String(h.parts.length));
  nfm=fmSet(nfm,"is_index","true");
  const head=`---\n${nfm}\n---\n\n# ${title}\n\n${h.intro?h.intro+"\n\n":""}This page is split across ${h.parts.length} part files:\n\n`+
    entries.map(e=>`- [${e.titles[0]}${e.titles.length>1?` … ${e.titles[e.titles.length-1]}`:""}](./${base}.parts/${e.name})`).join("\n")+"\n";
  fs.writeFileSync(f,head);
  splitCount++;
}
console.log("split",splitCount,"pages into",created.length,"part files");

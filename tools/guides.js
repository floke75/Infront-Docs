const fs=require("fs"),path=require("path");
const OUT=process.env.OUT||"out";
const src=path.join(OUT,"guides/getting-started.md");
const raw=fs.readFileSync(src,"utf8");
const m=raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
const fm=m[1], body=m[2];
const lines=body.split("\n");
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,60);

let book="wtk", cur=null, pre=[], secs=[], inFence=false;
for(const l of lines){
  if(/^```/.test(l)) inFence=!inFence;
  if(!inFence&&/^## /.test(l)){
    const t=l.slice(3).trim();
    const bm=t.match(/^(WTK|SDK)\b/i);
    if(bm&&/getting started/i.test(t)) book=bm[1].toLowerCase();
    cur={title:t,book,lines:[l]}; secs.push(cur); continue;
  }
  (cur?cur.lines:pre).push(l);
}
const made=[];
secs.forEach((s,i)=>{
  const name=`${s.book}-${slug(s.title.replace(new RegExp("^"+s.book,"i"),"").trim()||s.title)}.md`;
  const dest=path.join(OUT,"guides",name);
  const title=`${s.book.toUpperCase()} — ${s.title.replace(/^(WTK|SDK)\s+/i,"")}`;
  const nfm=fm.replace(/^title: .*$/m,`title: ${JSON.stringify(title)}`)
              +`\nlibrary: ${JSON.stringify(s.book.toUpperCase())}`
              +`\nguide_section: ${JSON.stringify(s.title)}`
              +`\nguide_order: ${i+1}`
              +`\npart_of: "getting-started"`;
  fs.writeFileSync(dest,`---\n${nfm}\n---\n\n# ${title}\n\n${s.lines.slice(1).join("\n").trim()}\n`);
  made.push({file:"guides/"+name,title,section:s.title,library:s.book.toUpperCase()});
});
const idx=`---\n${fm.replace(/^title: .*$/m,'title: "Getting started (index)"')}\nis_index: true\n---\n\n# Infront Web Toolkit — getting started\n\n${pre.join("\n").trim()}\n\nThis guide is split into one file per topic:\n\n`+
  made.map(x=>`- [${x.title}](./${path.basename(x.file)})`).join("\n")+"\n";
fs.writeFileSync(src,idx);
fs.writeFileSync("guides-made.json",JSON.stringify(made,null,1));
console.log("guides:",made.length);
made.forEach(x=>console.log("  "+x.file));

const fs=require("fs"),path=require("path");
const {parse}=require("node-html-parser");
const OUT=process.env.OUT||"out";
const ORIGIN="https://doc.infrontfinance.com";
const pages=JSON.parse(fs.readFileSync("legacy-pages.json","utf8"));

const ENT={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&nbsp;":" ","&apos;":"'"};
const unent=s=>s.replace(/&(?:amp|lt|gt|quot|nbsp|apos|#39);/g,m=>ENT[m]||m).replace(/&#(\d+);/g,(_,d)=>String.fromCharCode(+d));
function codeText(n){let o="";(function r(x){for(const c of x.childNodes){
  if(c.nodeType===3)o+=unent(c.rawText);else if(c.rawTagName==="br")o+="\n";else if(c.rawTagName!=="svg")r(c);}})(n);return o;}
const INLINE=new Set(["a","span","code","em","i","strong","b","br","sub","sup","small","wbr",undefined,""]);
const BLOCK=new Set(["p","div","section","ul","ol","li","table","pre","blockquote","hr","h1","h2","h3","h4","h5","h6","dl","dt","dd"]);
const hasBlock=n=>n.childNodes.some(c=>c.nodeType===1&&BLOCK.has(c.rawTagName));
const tidy=t=>t.replace(/[ \t]+/g," ").replace(/\s+([,;)\]])/g,"$1").replace(/\s+\n/g,"\n").replace(/\n\s+/g,"\n").trim();

function relFor(href,ctx){
  if(!href) return null;
  if(/^https?:|^mailto:/.test(href)) return href;
  let frag="", clean=href;
  const hi=clean.indexOf("#"); if(hi>=0){frag=clean.slice(hi);clean=clean.slice(0,hi);}
  if(!clean) return ctx.selfAnchor?ctx.selfAnchor+frag:ORIGIN+ctx.pagePath+frag;
  clean=clean.replace(/^\.\//,"").replace(/^\.\.\//,"").replace(/^\//,"");
  const vm=clean.match(/^(v[23])\/(.+)$/i);
  const ver=(vm?vm[1]:ctx.ver||"").toLowerCase();
  const pageName=vm?vm[2]:clean;
  if(ver&&pageName){
    const key=`${ver}/${pageName}${frag}`;
    const target=ctx.blockIndex[key]||ctx.pageIndex[`${ver}/${pageName}`];
    if(target){
      let r=path.relative(path.dirname(ctx.outPath),target).split(path.sep).join("/");
      if(!r.startsWith("."))r="./"+r;
      return r;
    }
  }
  return ORIGIN+"/"+clean+frag;
}
function inline(n,ctx){let o="";
  for(const c of n.childNodes){
    if(c.nodeType===3){o+=unent(c.rawText);continue;}
    const t=c.rawTagName,cls=c.getAttribute("class")||"";
    if(t==="svg"||t==="script"||t==="style"||t==="wbr")continue;
    if(t==="br"){o+="\n";continue;}
    if(t==="code"){const x=codeText(c).replace(/\n+/g," ").trim();o+=x?"`"+x+"`":"";continue;}
    if(t==="a"){const txt=inline(c,ctx).trim();if(!txt)continue;const h=relFor(c.getAttribute("href"),ctx);o+=h?`[${txt}](${h})`:txt;continue;}
    if(t==="strong"||t==="b"){const x=inline(c,ctx).trim();o+=x?`**${x}**`:"";continue;}
    if(t==="em"||t==="i"){const x=inline(c,ctx).trim();o+=x?`*${x}*`:"";continue;}
    if(cls.includes("param-label")){o+="**"+inline(c,ctx).trim()+"** ";continue;}
    o+=inline(c,ctx);
  } return o;}
function mdTable(tbl,ctx){
  const rows=[];
  tbl.querySelectorAll("tr").forEach(tr=>{const cells=tr.querySelectorAll("th,td").map(td=>inline(td,ctx).replace(/\s*\n\s*/g," ").replace(/\|/g,"\\|").trim());
    if(cells.length)rows.push({head:tr.querySelectorAll("th").length>0,cells});});
  if(!rows.length)return "";
  const w=Math.max(...rows.map(r=>r.cells.length));
  const pad=r=>{const c=[...r.cells];while(c.length<w)c.push("");return c;};
  const head=rows[0].head?rows.shift():{cells:Array(w).fill("")};
  return "| "+pad(head).join(" | ")+" |\n|"+Array(w).fill("---").join("|")+"|\n"+rows.map(r=>"| "+pad(r).join(" | ")+" |").join("\n")+"\n";
}
function langOf(pre){const t=codeText(pre);
  if(/^\s*</.test(t))return "html"; if(/^\s*[.#@]?[\w-]+\s*\{/.test(t)&&/:\s*[^;]+;/.test(t))return "css"; return "javascript";}

function blocks(node,ctx,depth){
  const parts=[];let buf="";
  const flush=()=>{const t=tidy(buf);buf="";if(t)parts.push(t);};
  for(const c of node.childNodes){
    if(c.nodeType===3){buf+=unent(c.rawText);continue;}
    const t=c.rawTagName,cls=c.getAttribute("class")||"";
    if(t==="svg"||t==="script"||t==="style")continue;
    if(/nav-wrapper|wtk-menu|dropdown-content|link-external/.test(cls))continue;
    if(cls.includes("parameter")){ flush(); parts.push(param(c,ctx,depth)); continue; }
    if(/^h[1-6]$/.test(t)){flush();
      const cp=c.clone?c.clone():c; // drop "Edit in sandbox" chips
      const txt=tidy(inline(c,ctx)).replace(/\s*Edit in sandbox\s*$/,"");
      if(txt)parts.push("#".repeat(Math.min(Math.max(parseInt(t[1])+1,2),6))+" "+txt);continue;}
    if(t==="pre"){flush();const body=codeText(c).replace(/\n+$/,"");if(body.trim())parts.push("```"+langOf(c)+"\n"+body+"\n```");continue;}
    if(t==="table"){flush();const x=mdTable(c,ctx);if(x)parts.push(x.trim());continue;}
    if(t==="blockquote"){flush();const x=blocks(c,ctx,depth).trim();if(x)parts.push(x.split("\n").map(l=>l?"> "+l:">").join("\n"));continue;}
    if(t==="hr"){flush();parts.push("---");continue;}
    if(t==="ul"||t==="ol"){flush();const items=[];
      c.childNodes.filter(n=>n.rawTagName==="li").forEach((li,i)=>{
        const sub=hasBlock(li)?blocks(li,ctx,depth).trim():tidy(inline(li,ctx));
        if(!sub)return;const mk=t==="ol"?`${i+1}.`:"-";const ls=sub.split("\n");
        items.push(`${mk} ${ls[0]}`+(ls.length>1?"\n"+ls.slice(1).map(l=>l?"  "+l:"").join("\n"):""));});
      if(items.length)parts.push(items.join("\n"));continue;}
    if(t==="p"){flush();const x=tidy(inline(c,ctx));if(x)parts.push(x);continue;}
    if(INLINE.has(t)&&!hasBlock(c)){buf+=inline(c,ctx);continue;}
    flush();const inner=blocks(c,ctx,depth).trim();if(inner)parts.push(inner);
  }
  flush();return parts.filter(Boolean).join("\n\n");
}
// p.parameter -> a structured option entry
function param(p,ctx,depth){
  const name=(p.querySelector(".param-name")?.text||"").trim().replace(/:$/,"");
  const raw=inline(p,ctx);
  const lines=raw.split("\n").map(l=>l.trim()).filter(Boolean);
  const fields={},rest=[];
  for(const l of lines){
    if(l.replace(/\*\*/g,"").trim().replace(/:$/,"")===name) continue;
    const m=l.match(/^\*\*([A-Za-z ]+):\*\*\s*(.*)$/);
    if(m){fields[m[1].trim()]=m[2].trim();continue;}
    rest.push(l);
  }
  const h="#".repeat(Math.min(depth+3,6));
  let out=`${h} \`${name}\`\n`;
  const order=["Type","Required","Default","Values","Since"];
  for(const k of [...order.filter(k=>fields[k]),...Object.keys(fields).filter(k=>!order.includes(k))])
    out+=`\n- **${k}:** ${/^(Type|Values|Default)$/.test(k)?"`"+fields[k]+"`":fields[k]}`;
  if(rest.length) out+="\n\n"+rest.join(" ").trim();
  return out;
}
function optionsOf(node){
  return node.querySelectorAll("p.parameter").map(p=>{
    const n=(p.querySelector(".param-name")?.text||"").trim().replace(/:$/,"");
    const m=p.text.match(/Type:\s*([^\n]*?)\s*(?:Required:|$)/);
    return {name:n,type:m?unent(m[1]).trim():undefined};
  }).filter(o=>o.name);
}

// ---------------- build ----------------
const yl=a=>"["+a.map(x=>JSON.stringify(x)).join(", ")+"]";
const safe=s=>s.replace(/[^A-Za-z0-9._-]+/g,"-").replace(/^-|-$/g,"");
function verOf(p){const m=p.match(/^\/(v[23])\//i);return m?m[1].toLowerCase():null;}
function dirFor(p){const v=verOf(p);return v?`legacy/wtk-${v==="v3"?"3.x":"2.x"}`:"legacy/site";}

// pass 1: plan output paths so cross-links resolve
const plan=[],blockIndex={},pageIndex={};
for(const pg of pages){
  const root=parse(fs.readFileSync(pg.file,"utf8"),{blockTextElements:{script:false,style:false}});
  const api=root.querySelectorAll("div.api-content");
  const v=verOf(pg.path), name=path.basename(pg.path);
  const dirName=v?safe(name):safe(pg.path.replace(/^\//,""))||"index";
  const base=dirFor(pg.path);
  if(api.length){
    pageIndex[`${v}/${name}`]=`${base}/${dirName}/_index.md`;
    for(const b of api){
      const id=b.getAttribute("id")||safe((b.querySelector("h1")?.text||"section").trim());
      const out=`${base}/${dirName}/${safe(id)}.md`;
      blockIndex[`${v}/${name}#${id}`]=out;
      plan.push({pg,block:b,id,out,page:name,ver:v});
    }
  }else{
    const out=`${base}/${safe(pg.path.replace(/^\//,"")||"index")}.md`;
    if(v) pageIndex[`${v}/${name}`]=out;
    plan.push({pg,block:root.querySelector("div.content-wrapper")||root.querySelector("body"),id:null,out,page:name,ver:v});
  }
}

let written=0;
const made=[];
for(const it of plan){
  const b=it.block; if(!b) continue;
  b.querySelectorAll("nav, .nav-wrapper, .wtk-menu-wrapper, .dropdown-content, script, style, .link-external").forEach(n=>n.remove());
  const h1=b.querySelector("h1");
  let title=h1?unent(h1.text).trim():(it.page||"Page");
  if(h1) h1.remove();
  const ext=b.querySelector(".class-extend__text");
  const extendsTxt=ext?unent(ext.text).replace(/^Extends\s*/,"").trim():null;
  const opts=optionsOf(b);
  const ctx={outPath:it.out,pagePath:it.pg.path,ver:it.ver,blockIndex,pageIndex};
  let body=blocks(b,ctx,0);
  body=body.replace(/^This site is no longer being updated[\s\S]*?docs\.infrontfinance\.com\s*/m,"").trim();
  body=body.replace(/^(ABOUT|DOCUMENTATION|SANDBOX|EXAMPLES|RELEASE NOTES|LOGOUT)$/gm,"").replace(/\n{3,}/g,"\n\n").trim();
  if(!body) continue;
  const verLabel=it.ver==="v3"?"3.x":it.ver==="v2"?"2.x":"site";
  const L=["---",
    `title: ${JSON.stringify(title)}`,
    `kind: ${it.id?"legacy-widget":"legacy-page"}`,
    `page_type: legacy-reference`,
    `product: "Infront Web Toolkit"`,
    `library_version: ${JSON.stringify(verLabel)}`,
    `status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"`,
    `legacy_page: ${JSON.stringify(it.page)}`];
  if(it.id) L.push(`widget_id: ${JSON.stringify(it.id)}`);
  if(extendsTxt) L.push(`extends: ${JSON.stringify(extendsTxt)}`);
  if(opts.length){ L.push(`option_count: ${opts.length}`); L.push(`options: ${yl(opts.map(o=>o.name))}`); }
  L.push(`source_url: ${JSON.stringify(ORIGIN+it.pg.path+(it.id?"#"+it.id:""))}`);
  L.push("---");
  const dest=path.join(OUT,it.out);
  fs.mkdirSync(path.dirname(dest),{recursive:true});
  fs.writeFileSync(dest,L.join("\n")+`\n\n# ${title}\n\n${body}\n`);
  made.push({file:it.out,title,page:it.page,ver:verLabel,id:it.id,options:opts.length,optionNames:opts.map(o=>o.name)});
  written++;
}
// per-page index files
const byPage={};
for(const m of made){ const k=m.ver+"|"+m.page; (byPage[k]=byPage[k]||[]).push(m); }
for(const [k,list] of Object.entries(byPage)){
  if(list.length<2) continue;
  const [ver,page]=k.split("|");
  const dir=path.dirname(list[0].file);
  const dest=path.join(OUT,dir,"_index.md");
  if(list.some(l=>l.file.endsWith("/_index.md"))) continue;
  fs.writeFileSync(dest,`---\ntitle: ${JSON.stringify(page+" (WTK "+ver+")")}\nkind: index\npage_type: legacy-reference\nproduct: "Infront Web Toolkit"\nlibrary_version: ${JSON.stringify(ver)}\nis_index: true\nentry_count: ${list.length}\nsource_url: ${JSON.stringify(ORIGIN+"/"+(ver==="3.x"?"v3":"v2")+"/"+page)}\n---\n\n# ${page} (WTK ${ver})\n\n`+
    list.sort((a,b)=>a.title.localeCompare(b.title)).map(l=>`- [${l.title}](./${path.basename(l.file)})${l.options?` — ${l.options} options`:""}`).join("\n")+"\n");
  written++;
}
fs.writeFileSync("legacy-made.json",JSON.stringify(made,null,1));
console.log("legacy files written:",written,"(",made.length,"content +",written-made.length,"indexes )");

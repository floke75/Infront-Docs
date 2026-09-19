const fs=require("fs"),path=require("path");
const {parse}=require("node-html-parser");

const BASE="https://docs.infrontfinance.com/docs/";
const OUT=process.env.OUT||"out";
const VERSION="4.3.1";

const KIND={2:"module",4:"namespace",8:"enum",16:"enum-member",32:"variable",64:"function",128:"class",256:"interface",512:"constructor",1024:"property",2048:"method",2097152:"type-alias",8388608:"document"};

const nav=JSON.parse(fs.readFileSync("nav-flat.json","utf8"));
const navBy={}; for(const r of nav) navBy[r.path]=r;

// ---------- output path mapping ----------
function qualifiedOf(p){ return path.basename(p,".html"); }
function moduleOf(q){ return q.split(".")[0]; }
function outPathFor(p){
  if(p==="index.html") return "guides/getting-started.md";
  if(p==="hierarchy.html") return "reference/type-hierarchy.md";
  const q=qualifiedOf(p);
  const dir=p.split("/")[0];
  if(dir==="modules") return `reference/${moduleOf(q)}/_module.${q}.md`;
  return `reference/${moduleOf(q)}/${q}.md`;
}
const pathMap={}; // typedoc relative path -> out path
for(const r of nav) pathMap[r.path]=outPathFor(r.path);
pathMap["index.html"]=outPathFor("index.html");
pathMap["hierarchy.html"]=outPathFor("hierarchy.html");

// ---------- helpers ----------
const ENT={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&nbsp;":" ","&#x27;":"'","&apos;":"'"};
function unent(s){return s.replace(/&(?:amp|lt|gt|quot|nbsp|apos|#39|#x27);/g,m=>ENT[m]||m).replace(/&#(\d+);/g,(_,d)=>String.fromCharCode(+d));}
function stripWbr(n){ n.querySelectorAll("wbr").forEach(w=>w.remove()); }
function cleanText(n){ return unent(n.structuredText!==undefined?n.text:n.text); }

// text of a node with <br> as newline (for code blocks / signatures)
function codeText(node){
  let out="";
  (function rec(n){
    for(const c of n.childNodes){
      if(c.nodeType===3){ out+=unent(c.rawText); }
      else if(c.rawTagName==="br"){ out+="\n"; }
      else if(c.rawTagName==="svg"||c.rawTagName==="wbr"){ if(c.rawTagName==="wbr")out+=""; }
      else rec(c);
    }
  })(node);
  return out;
}

function langOf(codeEl){
  const c=codeEl.getAttribute("class")||"";
  const m=c.match(/\b(typescript|javascript|json|html|css|bash|sh|ts|js|xml|yaml|python|java|csharp|sql)\b/i);
  if(m) return m[1].toLowerCase();
  if(/\bhl-/.test(codeEl.innerHTML)) return "typescript";
  return "";
}

// ---------- inline conversion ----------
function relLink(href,fromOut){
  if(!href) return null;
  if(/^https?:|^mailto:/.test(href)) return href;
  if(href.startsWith("#")) return href;
  const clean=href.split("#")[0], frag=href.includes("#")?"#"+href.split("#").slice(1).join("#"):"";
  const norm=clean.replace(/^\.\//,"").replace(/^\.\.\//,"");
  const target=pathMap[norm]||pathMap[clean.replace(/^(\.\.\/|\.\/)+/,"")];
  if(!target) return null;
  let rel=path.relative(path.dirname(fromOut),target).split(path.sep).join("/");
  if(!rel.startsWith(".")) rel="./"+rel;
  return rel+frag;
}

function inline(node,ctx){
  let out="";
  for(const c of node.childNodes){
    if(c.nodeType===3){ out+=unent(c.rawText); continue; }
    const tag=c.rawTagName;
    if(tag==="svg"||tag==="script"||tag==="style") continue;
    if(tag==="wbr") continue;
    if(tag==="br"){ out+="\n"; continue; }
    if(tag==="code"){ const t=codeText(c).replace(/\n+/g," ").trim(); out+= t?("`"+t.replace(/`/g,"\\`")+"`"):""; continue; }
    if(tag==="a"){
      const cls=c.getAttribute("class")||"";
      if(cls.includes("tsd-anchor-icon")) continue;
      const txt=inline(c,ctx).trim();
      if(!txt) continue;
      const href=relLink(c.getAttribute("href"),ctx.outPath);
      out+= href?`[${txt}](${href})`:txt;
      continue;
    }
    if(tag==="strong"||tag==="b"){ const t=inline(c,ctx).trim(); out+= t?`**${t}**`:""; continue; }
    if(tag==="em"||tag==="i"){ const t=inline(c,ctx).trim(); out+= t?`*${t}*`:""; continue; }
    if(tag==="span"||tag==="p"||tag==="div"||tag==="li"||tag==="td"||tag==="th"||tag==="h1"||tag==="h2"||tag==="h3"||tag==="h4"||tag==="h5"||tag==="ul"||tag==="ol"||tag==="section"){ out+=inline(c,ctx); continue; }
    out+=inline(c,ctx);
  }
  return out;
}

function mdTable(tbl,ctx){
  const rows=[];
  tbl.querySelectorAll("tr").forEach(tr=>{
    const cells=tr.querySelectorAll("th,td").map(td=>inline(td,ctx).replace(/\s*\n\s*/g," ").replace(/\|/g,"\\|").trim());
    if(cells.length) rows.push({head:tr.querySelectorAll("th").length>0,cells});
  });
  if(!rows.length) return "";
  const width=Math.max(...rows.map(r=>r.cells.length));
  const pad=r=>{const c=[...r.cells];while(c.length<width)c.push("");return c;};
  let head=rows[0].head?rows.shift():{cells:Array(width).fill("")};
  let s="| "+pad(head).join(" | ")+" |\n|"+Array(width).fill("---").join("|")+"|\n";
  for(const r of rows) s+="| "+pad(r).join(" | ")+" |\n";
  return s;
}

// ---------- block conversion ----------
const INLINE_TAGS=new Set(["a","span","code","em","i","strong","b","br","sub","sup","small","abbr","wbr",undefined,""]);
const BLOCK_TAGS=new Set(["p","div","section","ul","ol","li","table","pre","blockquote","hr","details","summary","h1","h2","h3","h4","h5","h6","dl","dt","dd","aside","header","footer","figure"]);
function hasBlockChild(n){
  for(const c of n.childNodes){ if(c.nodeType===1&&BLOCK_TAGS.has(c.rawTagName)) return true; }
  return false;
}
function tidyInline(t){
  return t.replace(/`([^`\n]+)`(?=[A-Za-z_])/g,"`$1` ")
          .replace(/[ \t]+/g," ")
          .replace(/\s+:\s+/g,": ")
          .replace(/\s+([,;)\]])/g,"$1")
          .replace(/([(\[])\s+/g,"$1")
          .replace(/\s+\n/g,"\n").replace(/\n\s+/g,"\n")
          .trim();
}
function blocks(node,ctx,depth){
  const parts=[];
  let buf="";
  const flush=()=>{ const t=tidyInline(buf); buf=""; if(t) parts.push(t); };
  for(const c of node.childNodes){
    if(c.nodeType===3){ buf+=unent(c.rawText); continue; }
    const tag=c.rawTagName, cls=c.getAttribute("class")||"", id=c.getAttribute("id")||"";
    if(tag==="svg"||tag==="script"||tag==="style"||tag==="wbr") continue;
    if(cls.includes("tsd-anchor-icon")) continue;
    if(cls.includes("tsd-page-toolbar")||cls.includes("tsd-navigation")||cls.includes("col-sidebar")||cls.includes("tsd-generator")||cls.includes("tsd-filter")||cls.includes("site-menu")) continue;
    if(id==="tsd-search") continue;

    if(cls.includes("tsd-index-panel")||cls.includes("tsd-index-group")||cls.includes("tsd-index-content")){ ctx.collectIndex(c); continue; }

    if(tag==="details"){
      flush();
      const sum=c.querySelector("summary");
      const sumTxt=sum?tidyInline(inline(sum,ctx)):"";
      if(/^index$/i.test(sumTxt)){ ctx.collectIndex(c); continue; }
      if(sum) sum.remove();
      const inner=blocks(c,ctx,depth+1).trim();
      parts.push((sumTxt?`${"#".repeat(Math.min(depth+3,6))} ${sumTxt}\n\n`:"")+inner);
      continue;
    }
    if(/^h[1-6]$/.test(tag)){
      flush();
      const lvl=Math.min(Math.max(parseInt(tag[1])+(depth>0?1:0),2),6);
      const t=tidyInline(inline(c,ctx));
      if(t) parts.push(`${"#".repeat(lvl)} ${t}`);
      continue;
    }
    if(tag==="pre"){
      flush();
      const code=c.querySelector("code")||c;
      const lang=langOf(code);
      const body=codeText(code).replace(/\n+$/,"");
      if(body.trim()) parts.push("```"+lang+"\n"+body+"\n```");
      continue;
    }
    if(tag==="table"){ flush(); const t=mdTable(c,ctx); if(t) parts.push(t.trim()); continue; }
    if(tag==="blockquote"){ flush(); const t=blocks(c,ctx,depth).trim(); if(t) parts.push(t.split("\n").map(l=>l?"> "+l:">").join("\n")); continue; }
    if(tag==="hr"){ flush(); parts.push("---"); continue; }

    // signature lists: unwrap, no bullets
    if((tag==="ul"||tag==="ol")&&cls.includes("tsd-signatures")){
      flush();
      const inner=c.childNodes.filter(n=>n.rawTagName==="li").map(li=>blocks(li,ctx,depth).trim()).filter(Boolean);
      if(inner.length) parts.push(inner.join("\n\n"));
      continue;
    }
    if(tag==="ul"||tag==="ol"){
      flush();
      const items=[];
      c.childNodes.filter(n=>n.rawTagName==="li").forEach((li,i)=>{
        const sub = hasBlockChild(li) ? blocks(li,ctx,depth).trim() : tidyInline(inline(li,ctx));
        if(!sub) return;
        const marker=tag==="ol"?`${i+1}.`:"-";
        const lines=sub.split("\n");
        items.push(`${marker} ${lines[0]}`+(lines.length>1?"\n"+lines.slice(1).map(l=>l?"  "+l:"").join("\n"):""));
      });
      if(items.length) parts.push(items.join("\n"));
      continue;
    }
    if(cls.includes("tsd-signature")&&!/tsd-signature-(symbol|type)/.test(cls)){
      flush();
      const sig=codeText(c).replace(/[ \t]+\n/g,"\n").replace(/\n{2,}/g,"\n").trim();
      if(sig) parts.push("```ts\n"+sig+"\n```");
      c.querySelectorAll("a").forEach(a=>{const h=a.getAttribute("href");if(h&&/\.html/.test(h)){const n=path.basename(h.split("#")[0],".html");if(n)ctx.refs.add(n);}});
      continue;
    }
    if(tag==="p"){ flush(); const t=tidyInline(inline(c,ctx)); if(t) parts.push(t); continue; }

    // inline-level element: accumulate
    if(INLINE_TAGS.has(tag)&&!hasBlockChild(c)){ buf+=inline(c,ctx); continue; }

    // generic container
    flush();
    const inner=blocks(c,ctx,depth).trim();
    if(inner) parts.push(inner);
  }
  flush();
  return parts.filter(Boolean).join("\n\n");
}

// ---------- page conversion ----------
function convert(tdPath,html){
  const titleM=html.match(/<title>([\s\S]*?)<\/title>/);
  const title=titleM?unent(titleM[1]).trim():"";
  const outPath=pathMap[tdPath];
  // Slice the content column out of the raw HTML: the nested <details> markup
  // confuses the tolerant parser's element nesting if we parse the whole page.
  const iStart=html.indexOf('<div class="col-content">');
  if(iStart<0) return null;
  let iEnd=html.indexOf('<div class="col-sidebar">',iStart);
  if(iEnd<0) iEnd=html.indexOf('<footer',iStart);
  if(iEnd<0) iEnd=html.length;
  const frag=html.slice(iStart+'<div class="col-content">'.length,iEnd);
  const content=parse(frag,{blockTextElements:{script:false,style:false}});
  stripWbr(content);

  content.querySelectorAll("a.tsd-anchor-icon, svg, .tsd-page-toolbar, .tsd-generator, script, style").forEach(n=>n.remove());

  const memberIndex={};
  const ctx={outPath, refs:new Set(), collectIndex(node){
    node.querySelectorAll(".tsd-index-section").forEach(sec=>{
      const h=sec.querySelector(".tsd-index-heading");
      const g=h?unent(h.text).trim():"Members";
      const names=sec.querySelectorAll("a.tsd-index-link").map(a=>unent(a.text).replace(/\s+/g,"").trim()).filter(Boolean);
      if(names.length) memberIndex[g]=[...new Set([...(memberIndex[g]||[]),...names])];
    });
  }};

  // hierarchy (extends / implements)
  const hier=[];
  content.querySelectorAll(".tsd-hierarchy a, .tsd-hierarchy-item a").forEach(a=>{
    const h=a.getAttribute("href"); if(h&&/\.html/.test(h)){const n=path.basename(h.split("#")[0],".html");if(n!=="hierarchy"&&n!=="index")hier.push(n);}
  });

  // breadcrumb
  const crumb=content.querySelectorAll(".tsd-breadcrumb li").map(li=>unent(li.text).trim()).filter(Boolean);
  content.querySelectorAll(".tsd-breadcrumb").forEach(n=>n.remove());
  // h1 in page title block is redundant with front matter title; keep as doc H1
  const h1=content.querySelector(".tsd-page-title h1");
  let h1txt=h1?unent(h1.text).trim():title;
  h1txt=h1txt.replace(/^(Class|Interface|Function|Enumeration|Enum|Type Alias|Variable|Namespace|Module|Const)\s+/,"").trim()||title;
  if(h1) h1.remove();

  const body=blocks(content,ctx,0);

  // gather all cross refs from links
  content.querySelectorAll("a").forEach(a=>{const h=a.getAttribute("href");if(h&&/\.html/.test(h)&&!/^https?:/.test(h)){const n=path.basename(h.split("#")[0],".html");if(n&&n!=="index"&&n!=="hierarchy")ctx.refs.add(n);}});

  const navRow=navBy[tdPath];
  const q=tdPath==="index.html"?null:qualifiedOf(tdPath);
  const kind=navRow?KIND[navRow.kind]||String(navRow.kind):(tdPath==="index.html"?"guide":"reference");
  const trail=navRow?navRow.trail.split(" > "):crumb;

  return {tdPath,outPath,title:h1txt,qualified:q,kind,trail,memberIndex,hier:[...new Set(hier)].filter(x=>x!==q),refs:[...ctx.refs].filter(x=>x!==q&&x!=="hierarchy"&&x!=="index"),body};
}

// ---------- front matter ----------
function yamlList(a){ return "["+a.map(x=>JSON.stringify(x)).join(", ")+"]"; }
function cap(a,n){return a.length>n?a.slice(0,n):a;}
function frontMatter(p){
  const L=[];
  L.push("---");
  L.push(`title: ${JSON.stringify(p.title)}`);
  if(p.qualified) L.push(`qualified_name: ${JSON.stringify(p.qualified)}`);
  L.push(`kind: ${p.kind}`);
  L.push(`page_type: ${p.kind==="guide"?"guide":"api-reference"}`);
  L.push(`product: "Infront Web Toolkit"`);
  L.push(`version: "${VERSION}"`);
  if(p.qualified){
    const seg=p.qualified.split(".");
    L.push(`module: ${JSON.stringify(seg[0])}`);
    if(seg.length>2) L.push(`namespace: ${JSON.stringify(seg.slice(0,-1).join("."))}`);
  }
  if(p.trail&&p.trail.length>1) L.push(`group: ${JSON.stringify(p.trail[p.trail.length-2])}`);
  if(p.trail&&p.trail.length) L.push(`nav_path: ${JSON.stringify(p.trail.join(" > "))}`);
  L.push(`source_url: ${JSON.stringify(BASE+p.tdPath)}`);
  const defines=p.qualified?[p.qualified.split(".").pop()]:[];
  if(defines.length) L.push(`defines: ${yamlList(defines)}`);

  const members=[...new Set([].concat(...Object.values(p.memberIndex)))];
  if(members.length){
    L.push(`member_count: ${members.length}`);
    L.push(`members: ${yamlList(cap(members,200))}`);
    if(members.length>200) L.push(`members_truncated: true  # full list is in the body`);
  }
  const groups=Object.entries(p.memberIndex);
  if(groups.length){
    L.push("member_groups:");
    for(const [g,names] of groups) L.push(`  ${JSON.stringify(g)}: ${yamlList(cap(names,100))}${names.length>100?"  # truncated":""}`);
  }
  const rel=p.hier.filter(x=>x!==p.qualified);
  if(rel.length) L.push(`related_types: ${yamlList(cap(rel,25))}`);
  if(p.refs.length){
    L.push(`reference_count: ${p.refs.length}`);
    L.push(`references: ${yamlList(cap(p.refs,50))}`);
  }
  L.push("---");
  return L.join("\n");
}

// ---------- run ----------
function run(){
  const files=[...Object.keys(pathMap)];
  const pages=[];
  let skipped=0;
  for(const f of files){
    const rp=path.join("raw",f);
    if(!fs.existsSync(rp)){skipped++;continue;}
    const p=convert(f,fs.readFileSync(rp,"utf8"));
    if(!p){skipped++;continue;}
    pages.push(p);
  }
  for(const p of pages){
    const dest=path.join(OUT,p.outPath);
    fs.mkdirSync(path.dirname(dest),{recursive:true});
    const md=frontMatter(p)+"\n\n# "+p.title+"\n\n"+p.body.trim()+"\n";
    fs.writeFileSync(dest,md);
  }
  fs.writeFileSync("pages.json",JSON.stringify(pages.map(p=>({tdPath:p.tdPath,outPath:p.outPath,title:p.title,qualified:p.qualified,kind:p.kind,trail:p.trail,members:p.memberIndex,hier:p.hier,refs:p.refs,bytes:p.body.length})),null,1));
  console.log("converted",pages.length,"skipped",skipped);
}
run();

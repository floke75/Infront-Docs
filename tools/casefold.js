// Output paths that differ only by case — SDK.InfrontSDK.SymbolData (the interface) and
// SDK.InfrontSDK.symbolData (the request function) — are one file on a case-insensitive
// filesystem (Windows, default macOS): a checkout holds one page's content under both names
// and an agent opening either silently reads whichever won. Every generator that picks output
// paths runs them through uncollide() so that cannot happen.
//
// The rule, for each group of distinct paths that are equal ignoring case:
//   - the path that sorts last by code point keeps its name. Lowercase sorts after uppercase,
//     so in the reference that is the function (`symbolData`), the name agents construct most;
//   - every other path gets its page kind before `.md`: SDK.InfrontSDK.SymbolData.interface.md;
//   - where the kind does not tell them apart (two examples), a number: …-2.md, …-3.md.
// Both sides then carry caseNote(), a line linking to the other, because on a case-insensitive
// filesystem opening SDK.InfrontSDK.SymbolData.md still lands on the function's page.
const path=require("path");

// items: [{path, kind, ...}], paths relative to one root. Returns
//   rename: Map(old path -> new path), for the paths that move
//   groups: [[{...item, path: final path}]], every group that collided, keeper first
function uncollide(items){
  const byPath=new Map(); for(const it of items) if(!byPath.has(it.path)) byPath.set(it.path,it);
  const taken=new Set([...byPath.keys()].map(p=>p.toLowerCase()));
  const folded=new Map();
  for(const it of byPath.values()){ const k=it.path.toLowerCase(); if(!folded.has(k)) folded.set(k,[]); folded.get(k).push(it); }
  const rename=new Map(), groups=[];
  for(const g of folded.values()){
    if(g.length<2) continue;
    g.sort((a,b)=>a.path<b.path?1:a.path>b.path?-1:0);
    const [keep,...rest]=g, group=[keep];
    for(const it of rest){
      const stem=it.path.replace(/\.md$/,"");
      let p=it.kind&&it.kind!==keep.kind?`${stem}.${it.kind}.md`:null;
      for(let n=2;!p||taken.has(p.toLowerCase());n++) p=`${stem}-${n}.md`;
      taken.add(p.toLowerCase());
      rename.set(it.path,p);
      group.push({...it,path:p});
    }
    groups.push(group);
  }
  return {rename,groups};
}

// The line under a collided page's H1. self and the others: {path, kind, title}, final paths.
function caseNote(self,others){
  const links=others.map(o=>{
    let rel=path.posix.relative(path.posix.dirname(self.path),o.path);
    if(!rel.startsWith(".")) rel="./"+rel;
    return `[\`${o.title}\`](${rel}), the ${String(o.kind).replace(/-/g," ")}`;
  });
  return `> Not the same page as ${links.join("; or ")} — the names differ only in case.`;
}

module.exports={uncollide,caseNote};

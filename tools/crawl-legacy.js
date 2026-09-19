const {chromium}=require("playwright");
const fs=require("fs"),path=require("path");
const PROXY=process.env.HTTPS_PROXY||process.env.https_proxy;
const ORIGIN="https://doc.infrontfinance.com";
const SKIP=/^\/(Login|Logout|Sandbox)/i;
(async()=>{
  const b=await chromium.launch({executablePath:"/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
    proxy:PROXY?{server:PROXY}:undefined,args:["--ignore-certificate-errors","--disable-http2"]});
  const ctx=await b.newContext({ignoreHTTPSErrors:true,storageState:"state.json"});
  const page=await ctx.newPage();
  async function go(u){for(let i=0;i<6;i++){try{await page.goto(u,{waitUntil:"domcontentloaded",timeout:45000});
    if(!page.url().startsWith("chrome-error")){await page.waitForTimeout(1800);return true;}}catch(e){}
    await page.waitForTimeout(1500*(i+1));}return false;}

  const seen=new Set(), queue=["/v3/GettingStarted","/v2/GettingStarted","/Releases/v3","/Releases/v2","/About","/Examples"];
  fs.mkdirSync("raw-legacy",{recursive:true});
  const pages=[];
  while(queue.length){
    const p=queue.shift();
    if(seen.has(p)||SKIP.test(p)) continue;
    seen.add(p);
    const ok=await go(ORIGIN+p);
    if(!ok){console.log("FAIL",p);continue;}
    if(/404/.test(await page.title())){console.log("404 ",p);continue;}
    const html=await page.content();
    const file=path.join("raw-legacy",(p.replace(/^\//,"").replace(/\//g,"__")||"index")+".html");
    fs.writeFileSync(file,html);
    const info=await page.evaluate(()=>({title:document.title,chars:document.body.innerText.length,
      links:[...new Set([...document.querySelectorAll("a[href]")].map(a=>a.getAttribute("href")))]}));
    pages.push({path:p,file,chars:info.chars});
    console.log(`OK   ${p}  ${info.chars} chars`);
    for(let h of info.links){
      if(!h) continue;
      h=h.split("#")[0];
      if(!h.startsWith("/")||h==="/"||SKIP.test(h)) continue;
      if(!seen.has(h)&&!queue.includes(h)) queue.push(h);
    }
  }
  fs.writeFileSync("legacy-pages.json",JSON.stringify(pages,null,1));
  console.log("\npages:",pages.length,"total chars:",pages.reduce((a,p)=>a+p.chars,0));
  await b.close();
})().catch(e=>{console.error("ERR",e.message);process.exit(1)});

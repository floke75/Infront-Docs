const {chromium}=require("playwright");
const fs=require("fs");
const PROXY=process.env.HTTPS_PROXY||process.env.https_proxy;
async function gotoRetry(page,url,n=6){
  for(let i=0;i<n;i++){
    try{ await page.goto(url,{waitUntil:"domcontentloaded",timeout:45000});
      if(!page.url().startsWith("chrome-error")) return true; }
    catch(e){ console.log("   goto",i+1,e.message.split("\n")[0].slice(0,80)); }
    await page.waitForTimeout(2000+2000*i);
  }
  return false;
}
(async()=>{
  const b=await chromium.launch({
    executablePath:"/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
    proxy:PROXY?{server:PROXY}:undefined,
    args:["--ignore-certificate-errors","--disable-http2"],
  });
  const ctx=await b.newContext({ignoreHTTPSErrors:true});
  const page=await ctx.newPage();
  page.on("framenavigated",f=>{if(f===page.mainFrame())console.log("   nav ->",f.url().slice(0,100));});

  if(!await gotoRetry(page,"https://doc.infrontfinance.com/")) throw new Error("cannot reach site");
  await page.waitForSelector("#username",{timeout:40000});
  await page.fill("#username",process.env.IF_USER);
  await page.fill("#password",process.env.IF_PASS);
  await page.evaluate(()=>document.forms[0].submit());

  // follow the OIDC chain, nudging past transient proxy errors
  for(let i=0;i<20;i++){
    await page.waitForTimeout(2500);
    const u=page.url();
    if(u.startsWith("chrome-error")){ console.log("   transient error, reloading"); await page.reload({waitUntil:"domcontentloaded"}).catch(()=>{}); continue; }
    if(/doc\.infrontfinance\.com/.test(u)&&!/\/login/.test(u)) break;
  }
  await page.waitForLoadState("networkidle",{timeout:45000}).catch(()=>{});
  console.log("FINAL URL:",page.url());
  console.log("TITLE:",await page.title().catch(()=>"?"));
  const txt=await page.evaluate(()=>document.body.innerText).catch(()=>"(none)");
  console.log("--- body ---\n"+txt.slice(0,1500));
  const cookies=await ctx.cookies();
  console.log("cookies:",cookies.map(c=>c.domain+c.name.replace(/^/,"/")).join(" "));
  fs.writeFileSync("after-login.html",await page.content().catch(()=>""));
  await ctx.storageState({path:"state.json"});
  await b.close();
})().catch(e=>{console.error("ERR",e.message);process.exit(1)});

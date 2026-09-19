const fs=require("fs"),path=require("path"),https=require("https"),http=require("http");
const proxy=process.env.HTTPS_PROXY||process.env.https_proxy;
const CA=fs.readFileSync("/root/.ccr/ca-bundle.crt");
function get(url){return new Promise((res,rej)=>{const u=new URL(url);
 const doReq=s=>{const r=https.request({host:u.hostname,path:u.pathname,method:"GET",socket:s,agent:false,servername:u.hostname,ca:CA},resp=>{const c=[];resp.on("data",d=>c.push(d));resp.on("end",()=>res({status:resp.statusCode,ct:resp.headers["content-type"]||"",body:Buffer.concat(c)}))});r.on("error",rej);r.end()};
 if(proxy){const p=new URL(proxy);const q=http.request({host:p.hostname,port:p.port,method:"CONNECT",path:`${u.hostname}:443`});q.on("connect",(_,s)=>doReq(s));q.on("error",rej);q.end()}else doReq(undefined)})}
const FILES={ "script.ts":["javascript","typescript","text/plain"], "template.html":["text/html"], "style.css":["text/css"], "readme.md":["markdown","text/plain"], "config.json":["json"] };
async function grab(base,rel,outdir){
  fs.mkdirSync(outdir,{recursive:true});
  for(const [f,cts] of Object.entries(FILES)){
    try{ const r=await get(`${base}/${rel}/${f}`);
      if(r.status!==200) continue;
      if(!cts.some(c=>r.ct.includes(c))) continue;               // SPA shell fallback
      if(f==="template.html"&&r.body.includes("MonacoEnvironment")) continue;
      if(r.body.length===0) continue;
      fs.writeFileSync(path.join(outdir,f),r.body);
    }catch(e){}
  }
}
async function main(){
  const ex=JSON.parse(fs.readFileSync("examples-flat.json","utf8"));
  const te=JSON.parse(fs.readFileSync("tests-index.json","utf8"));
  const jobs=[...ex.map(r=>({base:"https://docs.infrontfinance.com/examples",rel:r.path,out:"raw-examples/"+r.path})),
              ...te.map(r=>({base:"https://docs.infrontfinance.com/tests",rel:r.path,out:"raw-tests/"+r.path}))];
  let i=0,n=0;
  await Promise.all(Array.from({length:8},async()=>{while(i<jobs.length){const j=jobs[i++];await grab(j.base,j.rel,j.out);if(++n%40===0)console.log(n+"/"+jobs.length)}}));
  console.log("DONE",n);
}
main();

const fs=require("fs"),path=require("path"),https=require("https"),{HttpsProxyAgent}=(()=>{try{return require("https-proxy-agent")}catch(e){return {}}})();
const BASE="https://docs.infrontfinance.com";
const proxy=process.env.HTTPS_PROXY||process.env.https_proxy;
const http=require("http");
function get(url){
  return new Promise((res,rej)=>{
    const u=new URL(url);
    const opts=proxy?{host:new URL(proxy).hostname,port:new URL(proxy).port,method:"CONNECT",path:`${u.hostname}:443`}:null;
    const doReq=(agentSock)=>{
      const r=https.request({host:u.hostname,path:u.pathname+u.search,method:"GET",socket:agentSock,agent:false,servername:u.hostname,ca:fs.readFileSync("/root/.ccr/ca-bundle.crt")},resp=>{
        if(resp.statusCode>=300&&resp.statusCode<400&&resp.headers.location){resp.resume();return res(get(new URL(resp.headers.location,url).href));}
        const chunks=[];resp.on("data",c=>chunks.push(c));resp.on("end",()=>res({status:resp.statusCode,body:Buffer.concat(chunks)}));
      });
      r.on("error",rej);r.end();
    };
    if(proxy){
      const creq=http.request(opts);
      creq.on("connect",(r,socket)=>doReq(socket));
      creq.on("error",rej);creq.end();
    } else doReq(undefined);
  });
}
async function main(){
  const rows=JSON.parse(fs.readFileSync("nav-flat.json","utf8"));
  const urls=["index.html","hierarchy.html",...rows.map(r=>r.path)];
  const uniq=[...new Set(urls)];
  fs.mkdirSync("raw",{recursive:true});
  let done=0,fail=0;
  const CONC=12;
  let i=0;
  async function worker(){
    while(i<uniq.length){
      const p=uniq[i++];
      const out=path.join("raw",p);
      if(fs.existsSync(out)&&fs.statSync(out).size>0){done++;continue;}
      fs.mkdirSync(path.dirname(out),{recursive:true});
      for(let a=0;a<4;a++){
        try{const r=await get(`${BASE}/docs/${p}`);
          if(r.status===200){fs.writeFileSync(out,r.body);done++;break;}
          if(a===3){fail++;console.error("FAIL",r.status,p);}
        }catch(e){ if(a===3){fail++;console.error("ERR",p,e.message);} await new Promise(s=>setTimeout(s,500*(a+1)));}
      }
      if(done%250===0)console.log(done+"/"+uniq.length);
    }
  }
  await Promise.all(Array.from({length:CONC},worker));
  console.log("DONE",done,"FAIL",fail,"TOTAL",uniq.length);
}
main();

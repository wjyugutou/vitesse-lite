import{d as g,i as r,s as v,j as h,k as w,o as k,a as U,b as s,t as y,f,F as R}from"../../assets/index-2ec1ffe0.js";const B=s("h1",null,"recorder 录音",-1),M=["src"],j=g({name:"recorder",__name:"index",setup(L){const c=r(!1),o=v(),u=v(),l=r([]),d=r(),t=r("blob:http://127.0.0.1:3333/1b7628d0-7b9f-4707-a0eb-3182c2a1dff6");function b(){return new Promise((e,a)=>{var n;(n=navigator==null?void 0:navigator.mediaDevices)==null||n.getUserMedia({audio:!0}).then(i=>{e(i)}).catch(i=>a(i))})}async function p(){var e;if(!((e=navigator==null?void 0:navigator.mediaDevices)!=null&&e.getUserMedia)){alert("浏览器不支持音频输入");return}c.value=!0,l.value=[],u.value=await b(),o.value=new MediaRecorder(u.value),o.value.start(),o.value.ondataavailable=a=>{l.value.push(a.data);const n=new Blob(l.value,{type:"audio/wav"});t.value=URL.createObjectURL(n)}}h(t,(e,a)=>{URL.revokeObjectURL(a)});function m(){c.value=!1,o.value.stop()}function _(){console.log(t.value),d.value.play()}return w(()=>{u.value.getTracks().forEach(e=>e.stop())}),(e,a)=>(k(),U(R,null,[B,s("button",{class:"basic-btn",onMousedown:p,onMouseup:m},y(f(c)?"结束":"开始")+"录音 ",33),s("button",{class:"basic-btn",onClick:_}," 播放录音 "),s("audio",{ref_key:"audio",ref:d,src:f(t),preload:"auto"},null,8,M)],64))}});export{j as default};

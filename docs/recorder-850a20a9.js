import{d as g,i as n,s as b,j as h,k as w,o as y,a as k,b as s,t as R,f as v,F as U}from"./index-6781ab18.js";const M=s("h1",null,"recorder 录音",-1),S=["src"],j=g({name:"Recorder",__name:"recorder",setup(B){const c=n(!1),o=b(),l=b(),u=n([]),d=n(),t=n("blob:http://127.0.0.1:3333/1b7628d0-7b9f-4707-a0eb-3182c2a1dff6");function f(){return new Promise((e,a)=>{var r;(r=navigator==null?void 0:navigator.mediaDevices)==null||r.getUserMedia({audio:!0}).then(i=>{e(i)}).catch(i=>a(i))})}async function _(){var e;if(!((e=navigator==null?void 0:navigator.mediaDevices)!=null&&e.getUserMedia)){alert("浏览器不支持音频输入");return}c.value=!0,u.value=[],l.value=await f(),o.value=new MediaRecorder(l.value),o.value.start(),o.value.ondataavailable=a=>{u.value.push(a.data);const r=new Blob(u.value,{type:"audio/wav"});t.value=URL.createObjectURL(r)}}h(t,(e,a)=>{URL.revokeObjectURL(a)});function p(){c.value=!1,o.value.stop()}function m(){console.log(t.value),d.value.play()}return w(()=>{l.value.getTracks().forEach(e=>e.stop())}),(e,a)=>(y(),k(U,null,[M,s("button",{class:"basic-btn",onMousedown:_,onMouseup:p},R(v(c)?"结束":"开始")+"录音 ",33),s("button",{class:"basic-btn",onClick:m}," 播放录音 "),s("audio",{ref_key:"audio",ref:d,src:v(t),preload:"auto"},null,8,S)],64))}}),O=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{O as _};

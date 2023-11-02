import{d as y,J as S,i as p,c as C,o as h,a as m,b as o,f as d,q as z,g as P,n as $,A as E,z as W,M as b,R as g,K as T,I as D,h as x,_ as j,F as B}from"./index-6781ab18.js";const k=Symbol("canvasConfig"),I={absolute:"","top-0":"",flex:"","items-center":"","gap-x-5px":"","w-full":"","h-50px":"","p-5px":"",border:"~ gray-400","border-b":"0","z-1":""},M={class:"toolitem"},N=o("label",{for:"strokeStyle","gap-5px":""}," 线条颜色:  ",-1),O=["value"],V={class:"toolitem"},F=o("label",{for:"lineWidth","gap-5px":""}," 线条宽度:  ",-1),R=["value"],H={class:"toolitem"},K=["^active"],L=["value"],X=y({__name:"CanvasTool",setup(f){const e=S(k),t=p(),a=C(()=>({width:`${e.eraser.size}px`,height:`${e.eraser.size}px`,transformOrigin:"center",transform:`translate3d(calc(${e.eraser.x}px - 50%), calc(${e.eraser.y}px - 50%), 0)`}));function n(i){const c=i.target.value;e.setConfig({[i.target.id]:c})}function v(){e.ctx.clearRect(0,0,e.ctx.canvas.width,e.ctx.canvas.height)}function u(i){e.setEraser(parseInt(i.target.value))}return(i,c)=>{var _;return h(),m("div",I,[o("div",M,[N,o("input",{id:"strokeStyle",value:d(e).config.strokeStyle,type:"color",onChange:n},null,40,O)]),o("div",V,[F,o("input",{id:"lineWidth",value:d(e).config.lineWidth,type:"range",step:"1",min:"1",max:"50",onClick:n},null,8,R)]),o("div",{class:"toolitem"},[o("button",{id:"clear",class:"btn-mask","p-5px":"","b-rd-5px":"",border:"~ gray-400","hover:border":"#000 dark:#fff",onClick:v}," 清空画布 ")]),o("div",H,[o("button",{id:"clear",class:"btn-mask","^active":!!d(e).eraser.enabled,"p-5px":"","b-rd-5px":"",border:"~ gray-400","hover:border":"#000 dark:#fff",onClick:c[0]||(c[0]=r=>d(e).setEraser(!d(e).eraser.enabled))}," 橡皮擦 ",8,K),z("  "),o("input",{id:"eraserSize",value:d(e).eraser.size,type:"range",step:"1",min:"10",max:"50",onChange:u},null,40,L)]),d(e).eraser.enabled?(h(),P(E,{key:0,to:((_=d(e).ctx)==null?void 0:_.canvas.parentElement)||"body"},[o("div",{ref_key:"eraser",ref:t,absolute:"","top-0":"","pointer-events-none":"",style:$(d(a)),"z-10":"","w-20px":"","h-20px":"",border:"~ #fff"},null,4)],8,["to"])):W("",!0)])}}});function Y(f){const e=p({strokeStyle:"#9aa2ad",fillStyle:"#9aa2ad",lineWidth:10,lineCap:"round"}),t=b({x:0,y:0,size:10,enabled:!1});return b({ctx:f,config:e,eraser:t,setEraser(a){typeof a=="boolean"?t.enabled=a:typeof a=="number"?t.size=a:(t.x=a.x,t.y=a.y)},setConfig(a){Object.keys(a).forEach(n=>{e.value[n]=a[n]})}})}function q(f,e,t){let a=!1;const n=e,v=Math.PI,u={initPos:{}};function i(r,s){n.beginPath(),n.arc(r,s,n.lineWidth/2,0,v*2),n.fill()}function c(r,s,l,w){n.beginPath(),n.moveTo(r,s),n.lineTo(l,w),n.stroke()}function _(r,s){n.beginPath(),n.clearRect(r-t.eraser.size/2,s-t.eraser.size/2,t.eraser.size,t.eraser.size),n.stroke()}return g(f,"mousedown",r=>{a=!0;const s=r.offsetX,l=r.offsetY;if(u.initPos={x:s,y:l},t.eraser.enabled){t.setEraser({x:s,y:l});return}i(s,l)}),g(f,"mouseup",()=>{a=!1,n.closePath()}),g(f,"mousemove",r=>{const s=r.offsetX,l=r.offsetY;if(t.eraser.enabled){t.setEraser({x:s,y:l}),a&&_(s,l);return}a&&(c(u.initPos.x,u.initPos.y,s,l),u.initPos={x:s,y:l})}),e}const A={"w-full":"","h-full":"",relative:"","pt-50px":""},J={"w-full":"","h-full":"",relative:"","overflow-hidden":""},U=y({name:"CanvasDraw",__name:"index",setup(f){const e=p(),t=p(),a=Y(t),n=C(()=>a.config);T(k,a);function v(){const i=e.value.clientWidth,c=e.value.clientHeight;e.value.width=i,e.value.height=c,t.value=e.value.getContext("2d"),u(),q(e,t.value,a)}function u(){t.value.strokeStyle=n.value.strokeStyle,t.value.fillStyle=n.value.fillStyle,t.value.lineWidth=n.value.lineWidth,t.value.lineCap=n.value.lineCap}return D(()=>{v()}),(i,c)=>{const _=X;return h(),m("div",A,[x(_),o("div",J,[o("canvas",{ref_key:"canvas",ref:e,"w-full":"","h-full":"",border:"~ gray-400"},null,512)])])}}}),G={},Q={w:"1/2"},Z={w:"1/2"};function ee(f,e){const t=U;return h(),m(B,null,[o("div",Q,[x(t)]),o("div",Z,[x(t)])],64)}const te=j(G,[["render",ee]]),ae=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));export{ae as _};

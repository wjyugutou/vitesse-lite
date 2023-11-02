import{d as g,C as z,i as y,c as j,o as r,a as d,b as p,F as x,e as C,y as D,f as u,n as b,q as S,t as V,G as q,H as A,_ as P,I as L,J as k,z as B,K as w,k as E,x as K,g as N,L as O,M,w as I,N as U,O as Y,T as H,P as J,r as G,h,E as W}from"../../assets/index-2ec1ffe0.js";import{_ as Q}from"./canvasDrawPage-4afe4816.js";import{_ as X}from"./canvasPlum-cd584bfe.js";import{_ as Z}from"./digitalRain-213aa4e5.js";import{_ as ee}from"./ellipsePanel-a6192e80.js";import{_ as te}from"./fileUpload-f630dc14.js";import{_ as ne}from"./indexedDB-b282be72.js";import{_ as oe}from"./interestingHTMLElement-59fbcb78.js";import{_ as ae}from"./intersectionObserver-25bedcd6.js";import{_ as le}from"./lens-6cb43e74.js";import{_ as se}from"./matter-8d0218e6.js";import{_ as re}from"./minesweeperPage-968fc2ab.js";import{_ as ie}from"./popoverDemo-608fdfd8.js";import{_ as _e}from"./recorder-a5ea472c.js";import{_ as ue}from"./renderToString-8cba364f.js";import{_ as de}from"./scope-1e190377.js";import{_ as ce}from"./videojsPlayRemp-abd366e6.js";import{_ as me}from"./virtualScroll-ff26f919.js";import{_ as pe}from"./watchCarousel-d047f553.js";import{_ as ve}from"./waterfallFlowa-fd9080f3.js";import"./random-99138415.js";import"./isObjectLike-f3d21275.js";import"./1-3eee8eec.js";import"./useDrag-301d16e2.js";import"./MineBlock.vue_vue_type_script_setup_true_lang-93eb9114.js";const R=o=>(q("data-v-a3aaa0f2"),o=o(),A(),o),fe=["onClick"],ge=R(()=>p("div",{class:"left"},null,-1)),he=R(()=>p("div",{class:"right"},null,-1)),xe=g({name:"DemochallengeList",__name:"index",props:{list:{}},setup(o){const a=o,{push:n}=z(),e=y(7),s=y();function l(i){n(i)}const t=j(()=>({transform:`translate3d(${-(170*(e.value-4))}px, 0, 0)`}));function c(i){i.preventDefault(),i.deltaY<0?e.value=e.value-1<0?a.list.length-1:e.value-1:e.value=e.value+1>a.list.length-1?0:e.value+1}return(i,m)=>(r(),d("div",{ref_key:"scrollRef",ref:s,"w-full":"","overflow-hidden":"",border:"","py-200px":"",class:"box",onWheel:c},[p("div",{flex:"",transition:"~ 500",style:b(u(t))},[(r(!0),d(x,null,C(i.list,(_,v)=>(r(),d("div",{key:_.path,class:D(["item",v===u(e)&&"active"]),transition:"~ 500",flex:"","shrink-0":"","select-none":"","items-center":"","justify-center":"","bg-red":"",style:b({transform:`perspective(1000px) rotateY(${v===u(e)?0:v<u(e)?45:-45}deg)`}),onClick:f=>l(_.path)},[S(V(_.name)+" ",1),ge,he],14,fe))),128))],4)],544))}});const ye=P(xe,[["__scopeId","data-v-a3aaa0f2"]]),Ce={class:"inputBox"},be=["value"],ke=g({name:"InputAnimate",__name:"index",props:{modelValue:{default:""},placeholder:{default:""}},emits:["update:modelValue"],setup(o,{emit:a}){const n=o,e=a,s=y();function l(t){e("update:modelValue",t.target.value)}return L(()=>{n.modelValue.length>0&&s.value.focus()}),(t,c)=>(r(),d("div",Ce,[p("input",{ref_key:"input",ref:s,value:t.modelValue,required:"",onChange:l},null,40,be),p("label",null,[(r(!0),d(x,null,C(t.placeholder.length,(i,m)=>(r(),d("span",{key:m,style:b({transitionDelay:`${m*30}ms`,filter:`hue-rotate(${m*15}deg)`})},V(t.placeholder[m]),5))),128))])]))}});const Ie=P(ke,[["__scopeId","data-v-f17d67dd"]]),$=Symbol("currentIndex"),F=Symbol("dataLen"),$e={key:0,class:"dots",flex:"","gap-2":"",absolute:"","bottom-3px":"","left-5px":"","z-1":""},we=["onClick"],je=g({__name:"CarouselDot",setup(o){const a=k(F,0),n=k($,0);return(e,s)=>u(a)>1?(r(),d("ul",$e,[(r(!0),d(x,null,C(u(a),(l,t)=>(r(),d("li",{key:t,class:D(["dot",{"dot-active":u(n)===t}]),onClick:c=>n.value=t},null,10,we))),128))])):B("",!0)}});const De={class:"carousel"},Se=g({name:"Carousel",__name:"index",props:{autoplay:{type:Boolean,default:!0},duration:{type:Number,default:3e3},initial:{type:Number,default:0},dot:{type:Boolean,default:!0},director:{type:Boolean,default:!0}},setup(o){const a=o,n=O(),e=y(a.initial),s=j(()=>{var _,v,f;return((f=(v=n==null?void 0:(_=n.slots).default)==null?void 0:v.call(_)[0].children)==null?void 0:f.length)??0});w($,e),w(F,s);let l;function t(_){switch(_){case"next":e.value++,e.value>=s.value&&(e.value=0);break;case"prev":e.value--,e.value<=s.value&&(e.value=s.value-1);break}}function c(){l=setInterval(()=>{t("next")},a.duration)}function i(){clearInterval(l)}function m(){c()}return L(()=>{a.autoplay&&c()}),E(()=>{clearInterval(l)}),(_,v)=>{const f=je;return r(),d("div",De,[p("div",{class:"inner","w-full":"","h-full":"",relative:"","overflow-hidden":"",onPointerenter:i,onPointerleave:m},[K(_.$slots,"default"),o.dot?(r(),N(f,{key:0})):B("",!0)],32)])}}}),Ve={class:"carouselItem","w-full":"","h-full":"",absolute:"","origin-top-left":""},Pe=["src","alt"],Le=g({__name:"CarouselItem",props:{data:{type:Object,required:!0}},setup(o){var e;const a=k($),n=M({selfIndex:(e=O())==null?void 0:e.vnode.key});return(s,l)=>(r(),N(H,{name:"carousel"},{default:I(()=>[U(p("div",Ve,[p("img",{"w-full":"","h-full":"",src:o.data.url,alt:o.data.title},null,8,Pe)],512),[[Y,u(a)===u(n).selfIndex]])]),_:1}))}});const Be="/study-test-demo/static/jpg/kindred-848e5688.jpg",Ne="/study-test-demo/static/jpg/butt-4cebe300.jpg",Oe="/study-test-demo/static/jpg/lotusPond-c6964bca.jpg",Re="/study-test-demo/static/jpg/nanny-dd04a3dd.jpg",Fe={flex:"","items-center":"","justify-between":""},Te={"my-2":""},ut=g({__name:"index",setup(o){const a=[{title:"woman",url:Ne},{title:"千珏",url:Be},{title:"荷花池",url:Oe},{title:"奶妈",url:Re}],n=J("hi-name","鱼骨头"),s=Object.keys(Object.assign({"./demoChallenge/index/canvasDrawPage.vue":Q,"./demoChallenge/index/canvasPlum.vue":X,"./demoChallenge/index/digitalRain.vue":Z,"./demoChallenge/index/ellipsePanel.vue":ee,"./demoChallenge/index/fileUpload.vue":te,"./demoChallenge/index/indexedDB.vue":ne,"./demoChallenge/index/interestingHTMLElement.vue":oe,"./demoChallenge/index/intersectionObserver.vue":ae,"./demoChallenge/index/lens.vue":le,"./demoChallenge/index/matter.vue":se,"./demoChallenge/index/minesweeperPage.vue":re,"./demoChallenge/index/popoverDemo.vue":ie,"./demoChallenge/index/recorder.vue":_e,"./demoChallenge/index/renderToString.vue":ue,"./demoChallenge/index/scope.vue":de,"./demoChallenge/index/videojsPlayRemp.vue":ce,"./demoChallenge/index/virtualScroll.vue":me,"./demoChallenge/index/watchCarousel.vue":pe,"./demoChallenge/index/waterfallFlowa.vue":ve})).map(l=>{const t=l.split("/").at(-1);let c=t==null?void 0:t.substring(0,t.length-4);return l.includes("index.vue")&&(c=l.split("/").at(-2)),{path:l.replaceAll(".","").replace(/(\/index)?(vue)?/g,""),name:c}});return s.push({name:"starport",path:"/flip/flipOne"}),(l,t)=>{const c=Le,i=Se,m=Ie,_=G("router-link"),v=ye;return r(),d(x,null,[p("div",Fe,[h(i,{"w-100":"","h-50":"",autoplay:"",dot:"",director:"",duration:3e3,initial:2},{default:I(()=>[(r(),d(x,null,C(a,(f,T)=>h(c,{key:T,data:f},null,8,["data"])),64))]),_:1})]),p("div",Te,[h(m,{modelValue:u(n),"onUpdate:modelValue":t[0]||(t[0]=f=>W(n)?n.value=f:null),placeholder:"Input Your Name"},null,8,["modelValue"]),h(_,{to:`/hi/${u(n)}`},{default:I(()=>[S(" 前往 ")]),_:1},8,["to"])]),h(v,{list:u(s)},null,8,["list"])],64)}}});export{ut as default};

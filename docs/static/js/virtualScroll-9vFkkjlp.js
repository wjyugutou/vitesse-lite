import{d as f,c as H,o as c,a as d,m as x,n as S,f as p,G as w,i as h,D as T,J as B,b as _,F as $,e as y,g as N,w as v,h as C,t as L,p as D,v as z}from"../../assets/index-05tj2T3Y.js";import{r as F}from"./random-iIIaiqwD.js";import"./isObjectLike-KBcu1gfg.js";const P=f({name:"CssVirtualList",__name:"CssVirtualList",props:{itemHeight:{default:50}},setup(m){const e=m,u=H(()=>({containIntrinsicSize:`${e.itemHeight}px`}));return(l,i)=>(c(),d("div",{class:"css-virtual-list",style:S(p(u))},[x(l.$slots,"default",{},void 0,!0)],4))}}),A=w(P,[["__scopeId","data-v-5a3160e4"]]),E=["index"],G=f({name:"VirtualListItem",__name:"VirtualListItem",props:{index:{}},emits:["sizeChange"],setup(m,{emit:e}){const{index:u}=m,l=e,i=h();return T(()=>{l("sizeChange",i.value,u)}),(s,o)=>(c(),d("div",{ref_key:"div",ref:i,"h-fit":"",index:s.index},[x(s.$slots,"default")],8,E))}}),J=10,R=f({name:"VirtualList",__name:"index",props:{viewCount:{},itemSize:{},height:{},dataSource:{}},setup(m){const e=m,u=h(),l=h(),i=h(0),s=B({itemHeight:{}}),o=h("0px"),g=h(e.dataSource.length*(e.itemSize??50)),k=H(()=>{const a=Math.min(e.dataSource.length-1,i.value+J);return e.dataSource.slice(i.value,a+1).map((n,t)=>({record:n,index:t+i.value}))});function V(a,n){let t=e.dataSource.length*(e.itemSize??50);s.itemHeight[n]=a.clientHeight;for(const r in s.itemHeight)t+=s.itemHeight[r]-50;g.value=t}function I(a){if(e.itemSize)return Math.floor(a/e.itemSize);let n=0,t=0;for(let r=0;r<e.dataSource.length&&(n+=s.itemHeight[r]||50,t++,console.log(n,Math.max(t-2,0)),!(n>=a));r++);return Math.max(t-2,0)}function b(a){if(e.itemSize)return`${a*e.itemSize}px`;let n=0;for(let t=0;t<i.value&&!(t>+i.value);t++)n+=s.itemHeight[t]||50;return`${n}px`}function M(a){const n=a.target;i.value=I(n.scrollTop),o.value=b(i.value)}return(a,n)=>{const t=G;return c(),d("div",{ref_key:"virtualList",ref:u,class:"virtualList",onScroll:M},[_("div",{ref_key:"virtualContent",ref:l,style:S({height:`${p(g)}px`,paddingTop:p(o)})},[(c(!0),d($,null,y(p(k),r=>(c(),N(t,{key:r.index,index:r.index,onSizeChange:V},{default:v(()=>[x(a.$slots,"default",{record:r.record,index:r.index})]),_:2},1032,["index"]))),128))],4)],544)}}}),j=_("h1",{"text-center":""}," 动态高度 ",-1),q=_("p",null,[z("5asdasdas "),_("br"),z(" 5")],-1),K=[q],W=f({description:"虚拟列表",__name:"virtualScroll",setup(m){const e=Array.from({length:1e3}).map((u,l)=>({content:`但是价格法大师傅--${l}`,index:l,src:"",height:F(20,165)}));return(u,l)=>{const i=R,s=A;return c(),d("div",null,[j,C(i,{"data-source":p(e),class:"virtualList"},{default:v(({record:o,index:g})=>[_("div",{style:S({height:`${o.height}px`}),class:D({"bg-pink-400":o.index%2===0,"bg-blue-400":o.index%2!==0})},L(o)+"-- "+L(g),7)]),_:1},8,["data-source"]),C(s,{"h-200px":""},{default:v(()=>[(c(!0),d($,null,y(p(e),o=>(c(),d("div",{key:o.index},K))),128))]),_:1})])}}});export{W as default};

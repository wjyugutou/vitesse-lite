import{U as F,V as R,W as L,h as w,X as N,Y as h,Z as z,$ as S,a0 as d,F as k,a1 as j,a2 as D,a3 as K,a4 as U,a5 as p,a6 as G,a7 as I,a8 as x,a9 as W,aa as q,ab as X,ac as Y,ad as Z,ae as J,af as Q,y as ee,n as re,ag as te,ah as se,_ as ne,o as v,a as M,d as oe,i as ae,ai as ie,I as le,q as fe,b as ce}from"../../assets/index-037433d0.js";const ue=F(",key,ref,innerHTML,textContent,ref_key,ref_for");function pe(e,r){let s="";for(const t in e){if(ue(t)||q(t)||r==="textarea"&&t==="value")continue;const n=e[t];t==="class"?s+=` class="${me(n)}"`:t==="style"?s+=` style="${ye(n)}"`:s+=de(t,n,r)}return s}function de(e,r,s){if(!_e(r))return"";const t=s&&(s.indexOf("-")>0||X(s))?e:Y[e]||e.toLowerCase();return Z(t)?J(r)?` ${t}`:"":Q(t)?r===""?` ${t}`:` ${t}="${p(r)}"`:(console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${t}`),"")}function _e(e){if(e==null)return!1;const r=typeof e;return r==="string"||r==="number"||r==="boolean"}function me(e){return p(ee(e))}function ye(e){if(!e)return"";if(d(e))return p(e);const r=re(e);return p(te(r))}function ge(e,r,s,t,n){e("<!--teleport start-->");const o=n.appContext.provides[N],a=o.__teleportBuffers||(o.__teleportBuffers={}),i=a[s]||(a[s]=[]),f=i.length;let u;if(t)r(e),u="<!--teleport anchor-->";else{const{getBuffer:c,push:l}=E();r(l),l("<!--teleport anchor-->"),u=c()}i.splice(f,0,u),e("<!--teleport end-->")}let g,C="__VUE_INSTANCE_SETTERS__";(g=R()[C])||(g=R()[C]=[]),g.push(e=>e);function he(e,r){throw new Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.")}const{createComponentInstance:be,setCurrentRenderingInstance:B,setupComponent:Te,renderComponentRoot:$,normalizeVNode:Re}=x;function E(){let e=!1;const r=[];return{getBuffer(){return r},push(s){const t=d(s);e&&t?r[r.length-1]+=s:r.push(s),e=t,(h(s)||se(s)&&s.hasAsync)&&(r.hasAsync=!0)}}}function H(e,r=null,s){const t=be(e,r,null),n=Te(t,!0),o=h(n),a=t.sp;if(o||a){let i=o?n:Promise.resolve();return a&&(i=i.then(()=>Promise.all(a.map(f=>f.call(t.proxy)))).catch(()=>{})),i.then(()=>A(t,s))}else return A(t,s)}function A(e,r){const s=e.type,{getBuffer:t,push:n}=E();if(z(s)){let o=$(e);if(!s.props)for(const a in e.attrs)a.startsWith("data-v-")&&((o.props||(o.props={}))[a]="");y(n,e.subTree=o,e,r)}else{(!e.render||e.render===S)&&!e.ssrRender&&!s.ssrRender&&d(s.template)&&(s.ssrRender=he(s.template));for(const a of e.scope.effects)a.computed&&(a.computed._cacheable=!0);const o=e.ssrRender||s.ssrRender;if(o){let a=e.inheritAttrs!==!1?e.attrs:void 0,i=!1,f=e;for(;;){const c=f.vnode.scopeId;c&&(i||(a={...a},i=!0),a[c]="");const l=f.parent;if(l&&l.subTree&&l.subTree===f.vnode)f=l;else break}r&&(i||(a={...a}),a[r.trim()]="");const u=B(e);try{o(e.proxy,n,e,a,e.props,e.setupState,e.data,e.ctx)}finally{B(u)}}else e.render&&e.render!==S?y(n,e.subTree=$(e),e,r):(s.name||s.__file,n("<!---->"))}return t()}function y(e,r,s,t){const{type:n,shapeFlag:o,children:a}=r;switch(n){case U:e(p(a));break;case D:e(a?`<!--${K(a)}-->`:"<!---->");break;case j:e(a);break;case k:r.slotScopeIds&&(t=(t?t+" ":"")+r.slotScopeIds.join(" ")),e("<!--[-->"),b(e,a,s,t),e("<!--]-->");break;default:o&1?Se(e,r,s,t):o&6?e(H(r,s,t)):o&64?Be(e,r,s,t):o&128&&y(e,r.ssContent,s,t)}}function b(e,r,s,t){for(let n=0;n<r.length;n++)y(e,Re(r[n]),s,t)}function Se(e,r,s,t){const n=r.type;let{props:o,children:a,shapeFlag:i,scopeId:f,dirs:u}=r,c=`<${n}`;u&&(o=Ce(r,o,u)),o&&(c+=pe(o,n)),f&&(c+=` ${f}`);let l=s,_=r;for(;l&&_===l.subTree;)_=l.vnode,_.scopeId&&(c+=` ${_.scopeId}`),l=l.parent;if(t&&(c+=` ${t}`),e(c+">"),!G(n)){let m=!1;o&&(o.innerHTML?(m=!0,e(o.innerHTML)):o.textContent?(m=!0,e(p(o.textContent))):n==="textarea"&&o.value&&(m=!0,e(p(o.value)))),m||(i&8?e(p(a)):i&16&&b(e,a,s,t)),e(`</${n}>`)}}function Ce(e,r,s){const t=[];for(let n=0;n<s.length;n++){const o=s[n],{dir:{getSSRProps:a}}=o;if(a){const i=a(o,e);i&&t.push(i)}}return I(r||{},...t)}function Be(e,r,s,t){const n=r.props&&r.props.to,o=r.props&&r.props.disabled;if(!n)return[];if(!d(n))return[];ge(e,a=>{b(a,r.children,s,t)},n,o||o==="",s)}const{isVNode:$e}=x;async function T(e){if(e.hasAsync){let r="";for(let s=0;s<e.length;s++){let t=e[s];h(t)&&(t=await t),d(t)?r+=t:r+=await T(t)}return r}else return O(e)}function O(e){let r="";for(let s=0;s<e.length;s++){let t=e[s];d(t)?r+=t:r+=O(t)}return r}async function P(e,r={}){if($e(e))return P(L({render:()=>e}),r);const s=w(e._component,e._props);s.appContext=e._context,e.provide(N,r);const t=await H(s),n=await T(t);if(await Ae(r),r.__watcherHandles)for(const o of r.__watcherHandles)o();return n}async function Ae(e){if(e.__teleportBuffers){e.teleports=e.teleports||{};for(const r in e.__teleportBuffers)e.teleports[r]=await T(await Promise.all([e.__teleportBuffers[r]]))}}W();const Ve={},we={"p-2":"","bg-pink":"","text-white":""};function Ne(e,r){return v(),M("div",we," 测试 ")}const V=ne(Ve,[["render",Ne]]),ke=oe({__name:"renderToString",setup(e){const r=ae(),s=ie(V);async function t(){const n=await P(s);console.log(n),r.value.innerHTML=n}return le(()=>{t()}),(n,o)=>(v(),M(k,null,[fe(" aaa "),ce("div",{ref_key:"divRef",ref:r},null,512),w(V)],64))}}),ve=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));export{ve as _};
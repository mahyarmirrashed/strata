const Fn=!1;var qn=Array.isArray,Ln=Array.from,Mn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Yn=Object.prototype,Hn=Array.prototype,Jt=Object.getPrototypeOf;const jn=()=>{};function Bn(t){return t()}function Wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Et=4,B=8,st=16,T=32,J=64,tt=128,I=256,K=512,h=1024,x=2048,b=4096,C=8192,P=16384,Xt=32768,yt=65536,Un=1<<17,Qt=1<<19,wt=1<<20,vt=Symbol("$state"),Vn=Symbol("legacy props"),Gn=Symbol("");function mt(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Kn(t,n){return t!==n}function Tt(t){return!tn(t,this.v)}function nn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $n(){throw new Error("https://svelte.dev/e/hydration_failed")}function Zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Jn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function Wn(){W=!0}const Xn=1,Qn=2,tr=16,nr=1,rr=2,er=4,lr=8,sr=16,ar=1,ur=2,un="[",on="[!",fn="]",gt={},or=Symbol();function at(t,n){var r={f:0,v:t,reactions:null,equals:mt,version:0};return r}function ir(t){return At(at(t))}function _n(t,n=!1){var e;const r=at(t);return n||(r.equals=Tt),W&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function fr(t,n=!1){return At(_n(t,n))}function At(t){return i!==null&&i.f&y&&(m===null?xn([t]):m.push(t)),t}function cn(t,n){return i!==null&&ft()&&i.f&(y|st)&&(m===null||!m.includes(t))&&an(),vn(t,n)}function vn(t,n){return t.equals(n)||(t.v=n,t.version=Bt(),xt(t,x),ft()&&u!==null&&u.f&h&&!(u.f&T)&&(v!==null&&v.includes(t)?(w(u,x),Q(u)):A===null?Rn([t]):A.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=ft(),l=r.length,s=0;s<l;s++){var a=r[s],f=a.f;f&x||!e&&a===u||(w(a,n),f&(h|I)&&(f&y?xt(a,b):Q(a)))}}function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let N=!1;function _r(t){N=t}let g;function M(t){if(t===null)throw Rt(),gt;return g=t}function cr(){return M(F(g))}function vr(t){if(N){if(F(g)!==null)throw Rt(),gt;g=t}}function pr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===on)&&(t+=1)}var e=F(n);n.remove(),n=e}}var pt,St,Dt;function hr(){if(pt===void 0){pt=window;var t=Element.prototype,n=Node.prototype;St=ct(n,"firstChild").get,Dt=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return St.call(t)}function F(t){return Dt.call(t)}function dr(t,n){if(!N)return rt(t);var r=rt(g);if(r===null)r=g.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),M(e),e}return M(r),r}function Er(t,n){if(!N){var r=rt(t);return r instanceof Comment&&r.data===""?F(r):r}return g}function yr(t,n=1,r=!1){let e=N?g:t;for(var l;n--;)l=e,e=F(e);if(!N)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=nt();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function wr(t){t.textContent=""}function pn(t){var n=y|x;u===null?n|=I:u.f|=wt;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:mt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function mr(t){const n=pn(t);return n.equals=Tt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ut(e):D(e)}}}function hn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ot(t){var n,r=u;z(hn(t));try{It(t),n=Ut(t)}finally{z(r)}return n}function kt(t){var n=Ot(t),r=(S||t.f&I)&&t.deps!==null?b:h;w(t,r),t.equals(n)||(t.v=n,t.version=Bt())}function ut(t){It(t),j(t,0),w(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ct(t){u===null&&i===null&&en(),i!==null&&i.f&I&&rn(),it&&nn()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var l=(t&J)!==0,s=u,a={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=O;try{ht(!0),U(a),a.f|=Xt}catch(_){throw D(a),_}finally{ht(f)}}else n!==null&&Q(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&wt)===0;if(!p&&!l&&e&&(s!==null&&dn(a,s),i!==null&&i.f&y)){var d=i;(d.children??(d.children=[])).push(a)}return a}function Tr(t){const n=q(B,null,!1);return w(n,h),n.teardown=t,n}function gr(t){Ct();var n=u!==null&&(u.f&T)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=Nt(t);return e}}function Ar(t){return Ct(),ot(t)}function xr(t){const n=q(J,t,!0);return(r={})=>new Promise(e=>{r.outro?wn(n,()=>{D(n),e(void 0)}):(D(n),e(void 0))})}function Nt(t){return q(Et,t,!1)}function Rr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ot(()=>{t(),!e.ran&&(e.ran=!0,cn(r.l.r2,!0),Nn(n))})}function Sr(){var t=o;ot(()=>{if(Cn(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&w(r,b),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function ot(t){return q(B,t,!0)}function Dr(t){return En(t)}function En(t,n=0){return q(B|st|n,t,!0)}function Ir(t,n=!0){return q(B|T,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=it,e=i;dt(!0),Z(null);try{n.call(null)}finally{dt(r),Z(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;D(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||D(n),n=r}}function D(t,n=!0){var r=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:F(e);e.remove(),e=s}r=!0}Ft(t,n&&!r),Pt(t),j(t,0),w(t,P);var a=t.transitions;if(a!==null)for(const p of a)p.stop();bt(t);var f=t.parent;f!==null&&f.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function wn(t,n){var r=[];Lt(t,r,!0),mn(r,()=>{D(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Lt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&yt)!==0||(e.f&T)!==0;Lt(e,n,s?r:!1),e=l}}}function Or(t){Mt(t,!0)}function Mt(t,n){if(t.f&C){L(t)&&U(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&T)!==0;Mt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let $=!1,et=[];function Yt(){$=!1;const t=et.slice();et=[],Wt(t)}function kr(t){$||($=!0,queueMicrotask(Yt)),et.push(t)}function Tn(){$&&Yt()}function gn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Ht=0,An=1;let V=!1,G=Ht,Y=!1,H=null,O=!1,it=!1;function ht(t){O=t}function dt(t){it=t}let R=[],k=0;let i=null;function Z(t){i=t}let u=null;function z(t){u=t}let m=null;function xn(t){m=t}let v=null,E=0,A=null;function Rn(t){A=t}let jt=1,S=!1,o=null;function Bt(){return++jt}function ft(){return!W||o!==null&&o.l===null}function L(t){var a,f;var n=t.f;if(n&x)return!0;if(n&b){var r=t.deps,e=(n&I)!==0;if(r!==null){var l;if(n&K){for(l=0;l<r.length;l++)((a=r[l]).reactions??(a.reactions=[])).push(t);t.f^=K}for(l=0;l<r.length;l++){var s=r[l];if(L(s)&&kt(s),e&&u!==null&&!S&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}(!e||u!==null&&!S)&&w(t,h)}return!1}function Sn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw V=!1,t}function Dn(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&tt)===0)}function X(t,n,r,e){if(V){if(r===null&&(V=!1),Dn(n))throw t;return}r!==null&&(V=!0);{Sn(t,n);return}}function Ut(t){var _t;var n=v,r=E,e=A,l=i,s=S,a=m,f=o,p=t.f;v=null,E=0,A=null,i=p&(T|J)?null:t,S=!O&&(p&I)!==0,m=null,o=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(j(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!S)for(c=E;c<_.length;c++)((_t=_[c]).reactions??(_t.reactions=[])).push(t)}else _!==null&&E<_.length&&(j(t,E),_.length=E);return d}finally{v=n,E=r,A=e,i=l,S=s,m=a,o=f}}function In(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(w(n,b),n.f&(I|K)||(n.f^=K),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)In(t,r[e])}function U(t){var n=t.f;if(!(n&P)){w(t,h);var r=u,e=o;u=t;try{n&st?yn(t):Ft(t),Pt(t),bt(t);var l=Ut(t);t.teardown=typeof l=="function"?l:null,t.version=jt}catch(s){X(s,t,r,e||t.ctx)}finally{u=r}}}function Vt(){if(k>1e3){k=0;try{ln()}catch(t){if(H!==null)X(t,H,null);else throw t}}k++}function Gt(t){var n=t.length;if(n!==0){Vt();var r=O;O=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&h||(l.f^=h);var s=[];Kt(l,s),On(s)}}finally{O=r}}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|C)))try{L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){X(l,e,null,e.ctx)}}}function kn(){if(Y=!1,k>1001)return;const t=R;R=[],Gt(t),Y||(k=0,H=null)}function Q(t){G===Ht&&(Y||(Y=!0,queueMicrotask(kn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(J|T)){if(!(r&h))return;n.f^=h}}R.push(n)}function Kt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&T)!==0,a=s&&(l&h)!==0,f=r.next;if(!a&&!(l&C))if(l&B){if(s)r.f^=h;else try{L(r)&&U(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else l&Et&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Kt(p,n)}function $t(t){var n=G,r=R;try{Vt();const l=[];G=An,R=l,Y=!1,Gt(r);var e=t==null?void 0:t();return Tn(),(R.length>0||l.length>0)&&$t(),k=0,H=null,e}finally{G=n,R=r}}async function Cr(){await Promise.resolve(),$t()}function Cn(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=Ot(t);return ut(t),e}if(i!==null){m!==null&&m.includes(t)&&sn();var l=i.deps;v===null&&l!==null&&l[E]===t?E++:v===null?v=[t]:v.push(t),A!==null&&u!==null&&u.f&h&&!(u.f&T)&&A.includes(t)&&(w(u,x),Q(u))}else if(r&&t.deps===null)for(var s=t,a=s.parent,f=s;a!==null;)if(a.f&y){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(s=t,L(s)&&kt(s)),t.v}function Nn(t){const n=i;try{return i=null,t()}finally{i=n}}const bn=~(x|b|h);function w(t,n){t.f=t.f&bn|n}function Nr(t){return Zt().get(t)}function br(t,n){return Zt().set(t,n),n}function Zt(t){return o===null&&gn(),o.c??(o.c=new Map(Pn(o)||void 0))}function Pn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Pr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(o.l={s:null,u:null,r1:[],r2:at(!1)})}function Fr(t){const n=o;if(n!==null){const a=n.e;if(a!==null){var r=u,e=i;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];z(s.effect),Z(s.reaction),Nt(s.fn)}}finally{z(r),Z(e)}}o=n.p,n.m=!0}return{}}function qr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=Jt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{wn as $,pn as A,Wn as B,Er as C,Mn as D,yt as E,Z as F,z as G,Qt as H,qn as I,i as J,u as K,hr as L,gt as M,cr as N,fn as O,Rt as P,$n as Q,wr as R,Ln as S,xr as T,Jt as U,Gn as V,zt as W,br as X,Nr as Y,ar as Z,ur as _,un as a,Nt as a0,ot as a1,kr as a2,vt as a3,Vn as a4,cn as a5,$t as a6,_n as a7,Cr as a8,ir as a9,Un as aA,er as aB,Tt as aC,T as aD,J as aE,nr as aF,W as aG,rr as aH,lr as aI,mr as aJ,sr as aK,gn as aL,ft as aa,Kn as ab,tn as ac,or as ad,on as ae,pr as af,C as ag,Or as ah,vn as ai,Lt as aj,mn as ak,at as al,Qn as am,Xn as an,tr as ao,Fn as ap,Rr as aq,Sr as ar,fr as as,Yn as at,Hn as au,zn as av,ct as aw,Jn as ax,Tr as ay,Zn as az,En as b,nt as c,M as d,g as e,rt as f,F as g,N as h,Fr as i,dr as j,Ir as k,D as l,yr as m,jn as n,gr as o,Pr as p,o as q,vr as r,_r as s,Dr as t,Ar as u,Nn as v,Bn as w,Wt as x,Cn as y,qr as z};

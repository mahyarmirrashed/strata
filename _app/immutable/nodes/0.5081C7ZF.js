import{c as N,a as C,t as de}from"../chunks/legacy.DY7PJ-QD.js";import{a9 as _e,aa as me,ab as pe,b as q,h as k,J as Y,_ as ae,Q as O,ac as Le,e as w,D as Ee,O as ne,ad as be,ae as $,d as z,s as F,K as ye,af as M,ag as te,F as Q,ah as Ae,ai as Te,N as ke,aj as Re,ak as re,E as we,a6 as xe,al as W,am as Ce,an as Ie,ao as Ne,g as Pe,Z as Ue,ap as De,aq as He,p as J,ar as A,as as se,j as P,k as Z,a4 as U,x as c,y as x,at as D,t as Se}from"../chunks/runtime.sNbnHdCN.js";import{s as le,n as ie,p as S,b as oe,c as fe,d as G,e as K,f as V,i as Be}from"../chunks/i18n.D8KBWgnA.js";import{h as Me}from"../chunks/svelte-head.ydytkAVf.js";import{i as ue}from"../chunks/lifecycle.DMTzM0RM.js";import{s as X,L as Oe,a as Fe,b as j}from"../chunks/index.Dere4Y3v.js";import{b as ce,g as Ge,i as Ke}from"../chunks/entry.urcjsiJ5.js";function Ve(r,e,n){k&&Y();var s=r,a=Le,t,l=_e()?me:pe;q(()=>{l(a,a=e())&&(t&&ae(t),t=O(()=>n(s)))}),k&&(s=w)}function qe(r,e){return e}function Ye(r,e,n,s){for(var a=[],t=e.length,l=0;l<t;l++)Te(e[l].e,a,!0);var m=t>0&&a.length===0&&n!==null;if(m){var i=n.parentNode;ke(i),i.append(n),s.clear(),R(r,e[0].prev,e[t-1].next)}Re(a,()=>{for(var d=0;d<t;d++){var p=e[d];m||(s.delete(p.k),R(r,p.prev,p.next)),re(p.e,!m)}})}function Je(r,e,n,s,a,t=null){var l=r,m={flags:e,items:new Map,first:null};k&&Y();var i=null,d=!1;q(()=>{var p=n(),o=Ee(p)?p:p==null?[]:ne(p),h=o.length;if(d&&h===0)return;d=h===0;let f=!1;if(k){var u=l.data===be;u!==(h===0)&&(l=$(),z(l),F(!1),f=!0)}if(k){for(var g=null,E,_=0;_<h;_++){if(w.nodeType===8&&w.data===ye){l=w,f=!0,F(!1);break}var v=o[_],L=s(v,_);E=ge(w,m,g,null,v,L,_,a,e),m.items.set(L,E),g=E}h>0&&z($())}if(!k){var b=we;Ze(o,m,l,a,e,(b.f&M)!==0,s)}t!==null&&(h===0?i?te(i):i=O(()=>t(l)):i!==null&&ae(i,()=>{i=null})),f&&F(!0),n()}),k&&(l=w)}function Ze(r,e,n,s,a,t,l,m){var i=r.length,d=e.items,p=e.first,o=p,h,f=null,u=[],g=[],E,_,v,L;for(L=0;L<i;L+=1){if(E=r[L],_=l(E,L),v=d.get(_),v===void 0){var b=o?o.e.nodes_start:n;f=ge(b,e,f,f===null?e.first:f.next,E,_,L,s,a),d.set(_,f),u=[],g=[],o=f.next;continue}if($e(v,E,L),v.e.f&M&&te(v.e),v!==o){if(h!==void 0&&h.has(v)){if(u.length<g.length){var y=g[0],T;f=y.prev;var B=u[0],H=u[u.length-1];for(T=0;T<u.length;T+=1)ee(u[T],y,n);for(T=0;T<g.length;T+=1)h.delete(g[T]);R(e,B.prev,H.next),R(e,f,B),R(e,H,y),o=y,f=H,L-=1,u=[],g=[]}else h.delete(v),ee(v,o,n),R(e,v.prev,v.next),R(e,v,f===null?e.first:f.next),R(e,f,v),f=v;continue}for(u=[],g=[];o!==null&&o.k!==_;)(t||!(o.e.f&M))&&(h??(h=new Set)).add(o),g.push(o),o=o.next;if(o===null)continue;v=o}u.push(v),f=v,o=v.next}if(o!==null||h!==void 0){for(var I=h===void 0?[]:ne(h);o!==null;)(t||!(o.e.f&M))&&I.push(o),o=o.next;var ve=I.length;if(ve>0){var he=null;Ye(e,I,he,d)}}Q.first=e.first&&e.first.e,Q.last=f&&f.e}function $e(r,e,n,s){Ae(r.v,e),r.i=n}function ge(r,e,n,s,a,t,l,m,i,d){var p=(i&Ie)!==0,o=(i&Ne)===0,h=p?o?xe(a):W(a):a,f=i&Ce?W(l):l,u={i:f,v:h,k:t,a:null,e:null,prev:n,next:s};try{return u.e=O(()=>m(r,h,f),k),u.e.prev=n&&n.e,u.e.next=s&&s.e,n===null?e.first=u:(n.next=u,n.e.next=u.e),s!==null&&(s.prev=u,s.e.prev=u.e),u}finally{}}function ee(r,e,n){for(var s=r.next?r.next.e.nodes_start:n,a=e?e.e.nodes_start:n,t=r.e.nodes_start;t!==s;){var l=Pe(t);a.before(t),t=l}}function R(r,e,n){e===null?r.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function ze(r,e,n,s,a){var m;k&&Y();var t=(m=e.$$slots)==null?void 0:m[n],l=!1;t===!0&&(t=e.children,l=!0),t===void 0||t(r,l?()=>s:s)}function Qe(r,e,...n){var s=r,a=De,t;q(()=>{a!==(a=e())&&(t&&(re(t),t=null),t=O(()=>a(s,...n)))},Ue),k&&(s=w)}const We=He;function Xe(r,e){return r.protocol!==e.protocol?e.href:e.password||e.username?"//"+[e.username,e.password].filter(Boolean).join(":")+"@"+e.host+e.pathname+e.search+e.hash:r.host!==e.host?"//"+e.host+e.pathname+e.search+e.hash:e.pathname+e.search+e.hash}function je(r,e,n){const s=new URL(n,e).pathname;return r.origin!==e.origin||!r.pathname.startsWith(s)}var ea=de('<link rel="alternate">');function aa(r,e){J(e,!1);const n=le(),s=()=>fe(G,"$page",n),a=D(),t=D(),l=D(),m=ie(ce,new URL(s().url))||"/";let i=S(e,"availableLanguageTags",8),d=S(e,"strategy",8),p=S(e,"currentLang",8);const o=(g,E)=>{const _=[];for(const v of i()){const L=E.getLocalisedPath(g,v),b=V(L,m,void 0),y=new URL(b,new URL(s().url)).href;_.push(y)}return _};A(()=>s(),()=>{U(a,K(s().url.pathname,m)[0])}),A(()=>(x(d()),c(a),x(p())),()=>{U(t,d().getCanonicalPath(c(a),p()))}),A(()=>(c(t),x(d())),()=>{U(l,o(c(t),d()))}),se(),ue();var h=N(),f=P(h);{var u=g=>{var E=N(),_=P(E);Je(_,1,()=>c(l),qe,(v,L,b)=>{var y=ea();Se(()=>{X(y,"hreflang",i()[b]),X(y,"href",c(L))}),C(v,y)}),C(g,E)};oe(f,g=>{i().length>=1&&g(u)})}C(r,h),Z()}const na=(r,e)=>`${Oe}=${r};Path=${e};SameSite=lax;Max-Age=31557600`;function ta(r,e){J(e,!1);const n=le(),s=()=>fe(G,"$page",n),a=D(),t=D(),l=ie(ce,new URL(s().url))||"/";let m=S(e,"languageTag",24,()=>{}),i=S(e,"i18n",8),d=D(0);function p(f,u){try{const g=new URL(Ge(G).url),[E,_]=K(g.pathname,l),v=i().strategy.getCanonicalPath(E,c(a)),L=new URL(g);L.pathname=V(v,l,_);const b=new URL(f,new URL(L));if(je(b,g,l)||i().config.exclude(b.pathname))return f;const y=u??c(a),[T,B]=K(b.pathname,l),H=i().strategy.getLocalisedPath(T,y),I=new URL(b);return I.pathname=V(H,l,B),Xe(g,I)}catch{return f}}Fe({translateHref:p}),A(()=>(x(m()),x(i()),s()),()=>{U(a,m()??i().getLanguageFromUrl(s().url))}),A(()=>(x(i()),c(a)),()=>{i().config.runtime.setLanguageTag(c(a))}),A(()=>c(a),()=>{document.documentElement.lang=c(a)}),A(()=>(x(i()),c(a)),()=>{document.documentElement.dir=i().config.textDirection[c(a)]??"ltr"}),A(()=>(c(a),c(d)),()=>{c(a)&&U(d,c(d)+1)}),A(()=>(c(a),c(d),j),()=>{c(a)&&(c(d)>1||We)&&Ke(j)}),A(()=>c(a),()=>{U(t,c(a))}),A(()=>c(a),()=>{document.cookie=na(c(a),l)}),se(),ue();var o=N();Me(f=>{var u=N(),g=P(u);{var E=_=>{aa(_,{get availableLanguageTags(){return i().config.runtime.availableLanguageTags},get strategy(){return i().strategy},get currentLang(){return c(a)}})};oe(g,_=>{i().config.seo.noAlternateLinks!==!0&&!i().config.exclude(s().url.pathname)&&_(E)})}C(f,u)});var h=P(o);Ve(h,()=>c(t),f=>{var u=N(),g=P(u);ze(g,e,"default",{}),C(f,u)}),C(r,o),Z()}function ca(r,e){J(e,!0),ta(r,{i18n:Be,children:(n,s)=>{var a=N(),t=P(a);Qe(t,()=>e.children),C(n,a)},$$slots:{default:!0}}),Z()}export{ca as component};

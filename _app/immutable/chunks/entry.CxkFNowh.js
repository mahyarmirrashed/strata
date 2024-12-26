var Zt=t=>{throw TypeError(t)};var Ve=(t,e,n)=>e.has(t)||Zt("Cannot "+n);var k=(t,e,n)=>(Ve(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?Zt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{ap as ht,q as pe,o as Tt,aM as Be,aH as qe,m as Me,ab as Ge,a8 as O,x as C,a4 as N,a7 as He}from"./runtime.sNbnHdCN.js";function ze(t,e,n){if(t==null)return e(void 0),ht;const r=pe(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}function Qt(t){Tt===null&&Be(),qe&&Tt.l!==null?Ke(Tt).m.push(t):Me(()=>{const e=pe(t);if(typeof e=="function")return e})}function Ke(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}new URL("sveltekit-internal://");function We(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Ye(t){return t.split("%25").map(decodeURI).join("%25")}function Je(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function xt({href:t}){return t.split("#")[0]}function Xe(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return l=>(n(l),i[s](l));e();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];r&&o.push("hash");for(const i of o)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}const Ze="/__data.json",Qe=".html__data.json";function tn(t){return t.endsWith(".html")?t.replace(/\.html$/,Qe):t.replace(/\/$/,"")+Ze}function en(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function nn(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const ge=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&Y.delete(Ft(t)),ge(t,e));const Y=new Map;function rn(t,e){const n=Ft(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&Y.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=nn(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,e)}function an(t,e,n){if(Y.size>0){const r=Ft(t,n),a=Y.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);Y.delete(r)}}return window.fetch(e,n)}function Ft(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${en(...a)}"]`}return r}const on=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function sn(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${ln(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Pt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Pt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const h=on.exec(c),[,d,y,u,g]=h;return e.push({name:u,matcher:g,optional:!!d,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":d?"([^/]*)?":"([^/]+?)"}return Pt(c)}).join("")}).join("")}/?$`),params:e}}function cn(t){return!/^\([^)]+\)$/.test(t)}function ln(t){return t.slice(1).split("/").filter(cn)}function fn(t,e,n){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<e.length;s+=1){const c=e[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(h=>h).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const h=e[s+1],d=a[s+1];h&&!h.rest&&h.optional&&d&&c.chained&&(i=0),!h&&!d&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Pt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function un({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([s,[c,l,h]])=>{const{pattern:d,params:y}=sn(s),u={id:s,exec:g=>{const f=d.exec(g);if(f)return fn(f,y,r)},errors:[1,...h||[]].map(g=>t[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function me(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function te(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}const V=[];function Vt(t,e=ht){let n=null;const r=new Set;function a(s){if(Ge(t,s)&&(t=s,n)){const c=!V.length;for(const l of r)l[1](),V.push(l,t);if(c){for(let l=0;l<V.length;l+=2)V[l][0](V[l+1]);V.length=0}}}function o(s){a(s(t))}function i(s,c=ht){const l=[s,c];return r.add(l),r.size===1&&(n=e(a,o)||ht),s(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:i}}function Hn(t){let e;return ze(t,n=>e=n)(),e}var le;const x=((le=globalThis.__sveltekit_17f4gz5)==null?void 0:le.base)??"";var fe;const hn=((fe=globalThis.__sveltekit_17f4gz5)==null?void 0:fe.assets)??x,dn="1735251702250",ye="sveltekit:snapshot",_e="sveltekit:scroll",we="sveltekit:states",pn="sveltekit:pageurl",M="sveltekit:history",X="sveltekit:navigation",dt={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ut=location.origin;function ve(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Bt(){return{x:pageXOffset,y:pageYOffset}}function B(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const ee={...dt,"":dt.hover};function be(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function ke(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=be(t)}}function jt(t,e,n){let r;try{r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,o=!r||!!a||kt(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ut&&t.hasAttribute("download");return{url:r,external:o,target:a,download:i}}function pt(t){let e=null,n=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=B(s,"preload-code")),a===null&&(a=B(s,"preload-data")),e===null&&(e=B(s,"keepfocus")),n===null&&(n=B(s,"noscroll")),o===null&&(o=B(s,"reload")),i===null&&(i=B(s,"replacestate")),s=be(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:ee[r??"off"],preload_data:ee[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(o),replace_state:c(i)}}function ne(t){const e=Vt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function o(i){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const Ae={v:()=>{}};function gn(){const{set:t,subscribe:e}=Vt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${hn}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==dn;return i&&(t(!0),Ae.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function kt(t,e,n){return t.origin!==ut||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function re(t){const e=yn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const mn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function yn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=mn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const _n=-1,wn=-2,vn=-3,bn=-4,kn=-5,An=-6;function Sn(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(o,i=!1){if(o===_n)return;if(o===vn)return NaN;if(o===bn)return 1/0;if(o===kn)return-1/0;if(o===An)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=e==null?void 0:e[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const h=new Set;r[o]=h;for(let u=1;u<s.length;u+=1)h.add(a(s[u]));break;case"Map":const d=new Map;r[o]=d;for(let u=1;u<s.length;u+=2)d.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=re(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=re(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const h=s[l];h!==wn&&(c[l]=a(h))}}else{const c={};r[o]=c;for(const l in s){const h=s[l];c[l]=a(h)}}return r[o]}return a(0)}const Se=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Se];const En=new Set([...Se]);[...En];function Rn(t){return t.filter(e=>e!=null)}class At{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ee{constructor(e,n){this.status=e,this.location=n}}class qt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const In="x-sveltekit-invalidated",Un="x-sveltekit-trailing-slash";function gt(t){return t instanceof At||t instanceof qt?t.status:500}function Ln(t){return t instanceof qt?t.text:"Internal Error"}let b,Z,Ot;const Tn=Qt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Qt.toString());var et,nt,rt,at,ot,st,it,ct,ue,lt,he,ft,de;Tn?(b={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Z={current:null},Ot={current:!1}):(b=new(ue=class{constructor(){P(this,et,O({}));P(this,nt,O(null));P(this,rt,O(null));P(this,at,O({}));P(this,ot,O({id:null}));P(this,st,O({}));P(this,it,O(-1));P(this,ct,O(new URL("https://example.com")))}get data(){return C(k(this,et))}set data(e){N(k(this,et),e)}get form(){return C(k(this,nt))}set form(e){N(k(this,nt),e)}get error(){return C(k(this,rt))}set error(e){N(k(this,rt),e)}get params(){return C(k(this,at))}set params(e){N(k(this,at),e)}get route(){return C(k(this,ot))}set route(e){N(k(this,ot),e)}get state(){return C(k(this,st))}set state(e){N(k(this,st),e)}get status(){return C(k(this,it))}set status(e){N(k(this,it),e)}get url(){return C(k(this,ct))}set url(e){N(k(this,ct),e)}},et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ct=new WeakMap,ue),Z=new(he=class{constructor(){P(this,lt,O(null))}get current(){return C(k(this,lt))}set current(e){N(k(this,lt),e)}},lt=new WeakMap,he),Ot=new(de=class{constructor(){P(this,ft,O(!1))}get current(){return C(k(this,ft))}set current(e){N(k(this,ft),e)}},ft=new WeakMap,de),Ae.v=()=>Ot.current=!0);function Re(t){Object.assign(b,t)}const xn=new Set(["icon","shortcut icon","apple-touch-icon"]),F=me(_e)??{},Q=me(ye)??{},$={url:ne({}),page:ne({}),navigating:Vt(null),updated:gn()};function Mt(t){F[t]=Bt()}function Pn(t,e){let n=t+1;for(;F[n];)delete F[n],n+=1;for(n=e+1;Q[n];)delete Q[n],n+=1}function H(t){return location.href=t.href,new Promise(()=>{})}async function Ie(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function ae(){}let St,$t,mt,j,Dt,S;const yt=[],_t=[];let L=null;const Ue=[],On=[];let q=[],_={branch:[],error:null,url:null},Gt=!1,wt=!1,oe=!0,tt=!1,K=!1,Le=!1,Ht=!1,Et,U,T,z;const J=new Set;let Ct;async function Yn(t,e,n){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),S=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),St=un(t),j=document.documentElement,Dt=e,$t=t.nodes[0],mt=t.nodes[1],$t(),mt(),U=(i=history.state)==null?void 0:i[M],T=(s=history.state)==null?void 0:s[X],U||(U=T=Date.now(),history.replaceState({...history.state,[M]:U,[X]:T},""));const r=F[U];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Bn(Dt,n):Fn(location.href,{replaceState:!0}),Vn()}async function Cn(){if(await(Ct||(Ct=Promise.resolve())),!Ct)return;Ct=null;const t=It(_.url,!0);L=null;const e=z={},n=t&&await Yt(t);if(!(!n||e!==z)){if(n.type==="redirect")return zt(new URL(n.location,_.url).href,{},1,e);n.props.page&&Object.assign(b,n.props.page),_=n.state,Te(),Et.$set(n.props),Re(n.props.page)}}function Te(){yt.length=0,Ht=!1}function xe(t){_t.some(e=>e==null?void 0:e.snapshot)&&(Q[t]=_t.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Pe(t){var e;(e=Q[t])==null||e.forEach((n,r)=>{var a,o;(o=(a=_t[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function se(){Mt(U),te(_e,F),xe(T),te(ye,Q)}async function zt(t,e,n,r){return W({type:"goto",url:ve(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Ht=!0)}})}async function Nn(t){if(t.id!==(L==null?void 0:L.id)){const e={};J.add(e),L={id:t.id,token:e,promise:Yt({...t,preload:e}).then(n=>(J.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Nt(t){const e=St.find(n=>n.exec(Ce(t)));e&&await Promise.all([...e.layouts,e.leaf].map(n=>n==null?void 0:n[1]()))}function Oe(t,e,n){var o;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(b,t.props.page),Et=new S.root({target:e,props:{...t.props,stores:$,components:_t},hydrate:n,sync:!1}),Pe(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};q.forEach(i=>i(a)),wt=!0}function vt({url:t,params:e,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(x&&(t.pathname===x||t.pathname===x+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=We(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:o},props:{constructors:Rn(n).map(u=>u.node.component),page:b}};i!==void 0&&(c.props.form=i);let l={},h=!b,d=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const g=n[u],f=_.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(h=!0),g&&(l={...l,...g.data},h&&(c.props[`data_${d}`]=l),d+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==b.form||h)&&(c.props.page={error:a,params:e,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:h?l:b.data}),c}async function Kt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:o}){var h,d,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((h=l.universal)!=null&&h.load){let u=function(...f){for(const p of f){const{href:A}=new URL(p,n);c.dependencies.add(A)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:Xe(n,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)},S.hash),async fetch(f,p){let A;f instanceof Request?(A=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):A=f;const R=new URL(A,n);return s&&u(R.href),R.origin===n.origin&&(A=R.href.slice(n.origin.length)),wt?an(A,R.href,p):rn(A,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),e()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:t,server:o,universal:(d=l.universal)!=null&&d.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function ie(t,e,n,r,a,o){if(Ht)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(yt.some(s=>s(new URL(i))))return!0;return!1}function Wt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function jn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),o=e.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function ce({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:b,constructors:[]}}}async function Yt({id:t,invalidating:e,url:n,params:r,route:a,preload:o}){if((L==null?void 0:L.id)===t)return J.delete(L.token),L.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let h=null;const d=_.url?t!==bt(_.url):!1,y=_.route?a.id!==_.route.id:!1,u=jn(_.url,n);let g=!1;const f=l.map((m,v)=>{var D;const E=_.branch[v],I=!!(m!=null&&m[0])&&((E==null?void 0:E.loader)!==m[1]||ie(g,y,d,u,(D=E.server)==null?void 0:D.uses,r));return I&&(g=!0),I});if(f.some(Boolean)){try{h=await $e(n,f)}catch(m){const v=await G(m,{url:n,params:r,route:{id:t}});return J.has(o)?ce({error:v,url:n,params:r,route:a}):Rt({status:gt(m),error:v,url:n,route:a})}if(h.type==="redirect")return h}const p=h==null?void 0:h.nodes;let A=!1;const R=l.map(async(m,v)=>{var Ut;if(!m)return;const E=_.branch[v],I=p==null?void 0:p[v];if((!I||I.type==="skip")&&m[1]===(E==null?void 0:E.loader)&&!ie(A,y,d,u,(Ut=E.universal)==null?void 0:Ut.uses,r))return E;if(A=!0,(I==null?void 0:I.type)==="error")throw I;return Kt({loader:m[1],url:n,params:r,route:a,parent:async()=>{var Xt;const Jt={};for(let Lt=0;Lt<v;Lt+=1)Object.assign(Jt,(Xt=await R[Lt])==null?void 0:Xt.data);return Jt},server_data_node:Wt(I===void 0&&m[0]?{type:"skip"}:I??null,m[0]?E==null?void 0:E.server:void 0)})});for(const m of R)m.catch(()=>{});const w=[];for(let m=0;m<l.length;m+=1)if(l[m])try{w.push(await R[m])}catch(v){if(v instanceof Ee)return{type:"redirect",location:v.location};if(J.has(o))return ce({error:await G(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let E=gt(v),I;if(p!=null&&p.includes(v))E=v.status??E,I=v.error;else if(v instanceof At)I=v.body;else{if(await $.updated.check())return await Ie(),await H(n);I=await G(v,{params:r,url:n,route:{id:a.id}})}const D=await $n(m,w,i);return D?vt({url:n,params:r,branch:w.slice(0,D.idx).concat(D.node),status:E,error:I,route:a}):await je(n,{id:a.id},I,E)}else w.push(void 0);return vt({url:n,params:r,branch:w,status:200,error:null,route:a,form:e?void 0:null})}async function $n(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function Rt({status:t,error:e,url:n,route:r}){const a={};let o=null;if(S.server_loads[0]===0)try{const l=await $e(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==ut||n.pathname!==location.pathname||Gt)&&await H(n)}const s=await Kt({loader:$t,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Wt(o)}),c={node:await mt(),loader:mt,universal:null,server:null,data:null};return vt({url:n,params:a,branch:[s,c],status:t,error:e,route:null})}function It(t,e){if(!t||kt(t,x,S.hash))return;let n;try{if(n=S.hooks.reroute({url:new URL(t)})??t,typeof n=="string"){const a=new URL(t);S.hash?a.hash=n:a.pathname=n,n=a}}catch{return}const r=Ce(n);for(const a of St){const o=a.exec(r);if(o)return{id:bt(t),invalidating:e,route:a,params:Je(o),url:t}}}function Ce(t){return Ye(S.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function bt(t){return(S.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Ne({url:t,type:e,intent:n,delta:r}){let a=!1;const o=Fe(_,n,t,e);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return tt||Ue.forEach(s=>s(i)),a?null:o}async function W({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=ae,block:h=ae}){const d=It(e,!1),y=Ne({url:e,type:t,delta:n==null?void 0:n.delta,intent:d});if(!y){h();return}const u=U,g=T;l(),tt=!0,wt&&$.navigating.set(Z.current=y.navigation),z=c;let f=d&&await Yt(d);if(!f){if(kt(e,x,S.hash))return await H(e);f=await je(e,{id:null},await G(new qt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(d==null?void 0:d.url)||e,z!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await Rt({status:500,error:await G(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return zt(new URL(f.location,e).href,{},s+1,c),!1;else f.props.page.status>=400&&await $.updated.check()&&(await Ie(),await H(e));if(Te(),Mt(u),xe(g),f.props.page.url.pathname!==e.pathname&&(e.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const w=o?0:1,m={[M]:U+=w,[X]:T+=w,[we]:i};(o?history.replaceState:history.pushState).call(history,m,"",e),o||Pn(U,T)}if(L=null,f.props.page.state=i,wt){_=f.state,f.props.page&&(f.props.page.url=e);const w=(await Promise.all(On.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){q=q.filter(v=>!w.includes(v))};w.push(m),q.push(...w)}Et.$set(f.props),Re(f.props.page),Le=!0}else Oe(f,Dt,!1);const{activeElement:p}=document;await He();const A=n?n.scroll:a?Bt():null;if(oe){const w=e.hash&&document.getElementById(decodeURIComponent(S.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));A?scrollTo(A.x,A.y):w?w.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==p&&document.activeElement!==document.body;!r&&!R&&qn(),oe=!0,f.props.page&&Object.assign(b,f.props.page),tt=!1,t==="popstate"&&Pe(T),y.fulfil(void 0),q.forEach(w=>w(y.navigation)),$.navigating.set(Z.current=null)}async function je(t,e,n,r){return t.origin===ut&&t.pathname===location.pathname&&!Gt?await Rt({status:r,error:n,url:t,route:e}):await H(t)}function Dn(){let t;j.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(o){o.defaultPrevented||r(o.composedPath()[0],1)}j.addEventListener("mousedown",e),j.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Nt(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=ke(o,j);if(!s)return;const{url:c,external:l,download:h}=jt(s,x,S.hash);if(l||h)return;const d=pt(s),y=c&&bt(_.url)===bt(c);if(!d.reload&&!y)if(i<=d.preload_data){const u=It(c,!1);u&&Nn(u)}else i<=d.preload_code&&Nt(c)}function a(){n.disconnect();for(const o of j.querySelectorAll("a")){const{url:i,external:s,download:c}=jt(o,x,S.hash);if(s||c)continue;const l=pt(o);l.reload||(l.preload_code===dt.viewport&&n.observe(o),l.preload_code===dt.eager&&Nt(i))}}q.push(a),a()}function G(t,e){if(t instanceof At)return t.body;const n=gt(t),r=Ln(t);return S.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Fn(t,e={}){return t=new URL(ve(t)),t.origin!==ut?Promise.reject(new Error("goto: invalid URL")):zt(t,e,0)}function Jn(t){if(typeof t=="function")yt.push(t);else{const{href:e}=new URL(t,location.href);yt.push(n=>n.href===e)}return Cn()}function Vn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(se(),!tt){const a=Fe(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Ue.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&se()}),(e=navigator.connection)!=null&&e.saveData||Dn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=ke(n.composedPath()[0],j);if(!r)return;const{url:a,external:o,target:i,download:s}=jt(r,x,S.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=pt(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[h,d]=(S.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=h===xt(location);if(o||c.reload&&(!y||!d)){Ne({url:a,type:"link"})?tt=!0:n.preventDefault();return}if(d!==void 0&&y){const[,u]=_.url.href.split("#");if(u===d){if(n.preventDefault(),d===""||d==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(d));g&&(g.scrollIntoView(),g.focus())}return}if(K=!0,Mt(U),t(a),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(kt(s,x,!1))return;const c=n.target,l=pt(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const h=new FormData(c),d=a==null?void 0:a.getAttribute("name");d&&h.append(d,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(h).toString(),W({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[M]){const a=n.state[M];if(z={},a===U)return;const o=F[a],i=n.state[we]??{},s=new URL(n.state[pn]??location.href),c=n.state[X],l=xt(location)===xt(_.url);if(c===T&&(Le||l)){t(s),F[U]=Bt(),o&&scrollTo(o.x,o.y),i!==b.state&&(b.state=i,Et.$set({page:b})),U=a;return}const d=a-U;await W({type:"popstate",url:s,popped:{state:i,scroll:o,delta:d},accept:()=>{U=a,T=c},block:()=>{history.go(-d)},nav_token:z})}else if(!K){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{K?(K=!1,history.replaceState({...history.state,[M]:++U,[X]:T},"",location.href)):S.hash&&_.url.hash===location.hash&&W({type:"goto",url:_.url})});for(const n of document.querySelectorAll("link"))xn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Z.current=null)});function t(n){_.url=b.url=n,$.page.set({data:b.data,error:b.error,form:b.form,params:b.params,route:b.route,state:b.state,status:b.status,url:n}),$.page.notify()}}async function Bn(t,{status:e=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){Gt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=It(c,!1)||{});let l,h=!0;try{const d=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=De(p.uses)),Kt({loader:S.nodes[g],url:c,params:a,route:o,parent:async()=>{const A={};for(let R=0;R<f;R+=1)Object.assign(A,(await d[R]).data);return A},server_data_node:Wt(p)})}),y=await Promise.all(d),u=St.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=vt({url:c,params:a,branch:y,status:e,error:n,form:s,route:u??null})}catch(d){if(d instanceof Ee){await H(new URL(d.location,location.href));return}l=await Rt({status:gt(d),error:await G(d,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",h=!1}l.props.page&&(l.props.page.state={}),Oe(l,t,h)}async function $e(t,e){var a;const n=new URL(t);n.pathname=tn(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(Un,"1"),n.searchParams.append(In,e.map(o=>o?"1":"0").join(""));const r=await ge(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new At(r.status,o)}return new Promise(async o=>{var d;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return Sn(y,{...S.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let h="";for(;;){const{done:y,value:u}=await s.read();if(y&&!h)break;for(h+=!u&&h?`
`:c.decode(u,{stream:!0});;){const g=h.indexOf(`
`);if(g===-1)break;const f=JSON.parse(h.slice(0,g));if(h=h.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(d=f.nodes)==null||d.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=De(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:A,error:R}=f,w=i.get(p);i.delete(p),R?w.reject(l(R)):w.fulfil(l(A))}}}})}function De(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function qn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function Fe(t,e,n,r){var c,l;let a,o;const i=new Promise((h,d)=>{a=h,o=d});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:o}}export{ze as a,x as b,Yn as c,Hn as g,Jn as i,Qt as o,b as p,$ as s,Ot as u};

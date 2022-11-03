import{S as Ye,i as Xe,s as Ze,a as Qe,e as N,c as xe,b as H,g as W,t as T,d as Y,f as j,h as F,j as et,o as Re,k as tt,l as nt,m as rt,n as Ee,p as X,q as at,r as ot,u as it,v as J,w as z,x as te,y as G,z as K,A as Ce}from"./chunks/index-dbeec53a.js";import{g as Fe,f as Je,s as ee,a as Oe,i as st}from"./chunks/singletons-77af33ca.js";import{s as lt}from"./chunks/paths-6cd3a76e.js";function ct(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ft(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const n=new URL(r);for(const o of ut){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return dt(n),n}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const _t="/__data.json";function ht(r){return r.replace(/\/$/,"")+_t}function mt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;he.delete(o)}return me(r,e)};const he=new Map;function gt(r,e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(a+=`[data-hash="${mt(n.body)}"]`);const c=document.querySelector(a);if(c!=null&&c.textContent){const{body:t,...l}=JSON.parse(c.textContent),s=c.getAttribute("data-ttl");return s&&he.set(e,{body:t,init:l,ttl:1e3*Number(s)}),Promise.resolve(new Response(t,l))}return me(r,n)}function wt(r,e){const n=he.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);he.delete(r)}return me(r,e)}const yt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function bt(r){const e=[],n=[],o=[];let a=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${kt(r).map((t,l,s)=>{const f=decodeURIComponent(t),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(h)return e.push(h[1]),n.push(h[2]),o.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(f);if(w)return e.push(w[1]),n.push(w[2]),o.push(!0),"(?:/([^/]+))?";const q=l===s.length-1;return f?"/"+f.split(/\[(.+?)\](?!\])/).map((C,M)=>{if(M%2){const Z=yt.exec(C);if(!Z)throw new Error(`Invalid param: ${C}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,x,le,re,ce]=Z;return e.push(re),n.push(ce),o.push(!!x),le?"(.*?)":x?"([^/]*)?":"([^/]+?)"}return q&&C.includes(".")&&(a=!1),C.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${a?"/?":""}$`),names:e,types:n,optional:o}}function vt(r){return!/^\([^)]+\)$/.test(r)}function kt(r){return r.slice(1).split("/").filter(vt)}function Et(r,{names:e,types:n,optional:o},a){const c={};for(let t=0;t<e.length;t+=1){const l=e[t],s=n[t];let f=r[t+1];if(f||!o[t]){if(s){const h=a[s];if(!h)throw new Error(`Missing "${s}" param matcher`);if(!h(f))return}c[l]=f!=null?f:""}}return c}function $t(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([l,[s,f,h]])=>{const{pattern:w,names:q,types:V,optional:L}=bt(l),C={id:l,exec:M=>{const Z=w.exec(M);if(Z)return Et(Z,{names:q,types:V,optional:L},o)},errors:[1,...h||[]].map(M=>r[M]),layouts:[0,...f||[]].map(t),leaf:c(s)};return C.errors.length=C.layouts.length=Math.max(C.errors.length,C.layouts.length),C});function c(l){const s=l<0;return s&&(l=~l),[s,r[l]]}function t(l){return l===void 0?l:[a.has(l),r[l]]}}function Rt(r){let e,n,o;var a=r[0][0];function c(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=J(a,c(r))),{c(){e&&z(e.$$.fragment),n=N()},l(t){e&&te(e.$$.fragment,t),n=N()},m(t,l){e&&G(e,t,l),H(t,n,l),o=!0},p(t,l){const s={};if(l&4&&(s.data=t[2]),l&2&&(s.form=t[1]),a!==(a=t[0][0])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{K(f,1)}),Y()}a?(e=J(a,c(t)),z(e.$$.fragment),j(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&F(n),e&&K(e,t)}}}function Ot(r){let e,n,o;var a=r[0][0];function c(t){return{props:{data:t[2],$$slots:{default:[Tt]},$$scope:{ctx:t}}}}return a&&(e=J(a,c(r))),{c(){e&&z(e.$$.fragment),n=N()},l(t){e&&te(e.$$.fragment,t),n=N()},m(t,l){e&&G(e,t,l),H(t,n,l),o=!0},p(t,l){const s={};if(l&4&&(s.data=t[2]),l&2107&&(s.$$scope={dirty:l,ctx:t}),a!==(a=t[0][0])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{K(f,1)}),Y()}a?(e=J(a,c(t)),z(e.$$.fragment),j(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&F(n),e&&K(e,t)}}}function Lt(r){let e,n,o;var a=r[0][1];function c(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=J(a,c(r))),{c(){e&&z(e.$$.fragment),n=N()},l(t){e&&te(e.$$.fragment,t),n=N()},m(t,l){e&&G(e,t,l),H(t,n,l),o=!0},p(t,l){const s={};if(l&8&&(s.data=t[3]),l&2&&(s.form=t[1]),a!==(a=t[0][1])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{K(f,1)}),Y()}a?(e=J(a,c(t)),z(e.$$.fragment),j(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&F(n),e&&K(e,t)}}}function It(r){let e,n,o;var a=r[0][1];function c(t){return{props:{data:t[3],$$slots:{default:[Nt]},$$scope:{ctx:t}}}}return a&&(e=J(a,c(r))),{c(){e&&z(e.$$.fragment),n=N()},l(t){e&&te(e.$$.fragment,t),n=N()},m(t,l){e&&G(e,t,l),H(t,n,l),o=!0},p(t,l){const s={};if(l&8&&(s.data=t[3]),l&2099&&(s.$$scope={dirty:l,ctx:t}),a!==(a=t[0][1])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{K(f,1)}),Y()}a?(e=J(a,c(t)),z(e.$$.fragment),j(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&F(n),e&&K(e,t)}}}function St(r){let e,n,o;var a=r[0][2];function c(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=J(a,c(r))),{c(){e&&z(e.$$.fragment),n=N()},l(t){e&&te(e.$$.fragment,t),n=N()},m(t,l){e&&G(e,t,l),H(t,n,l),o=!0},p(t,l){const s={};if(l&16&&(s.data=t[4]),l&2&&(s.form=t[1]),a!==(a=t[0][2])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{K(f,1)}),Y()}a?(e=J(a,c(t)),z(e.$$.fragment),j(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&F(n),e&&K(e,t)}}}function At(r){let e,n,o;var a=r[0][2];function c(t){return{props:{data:t[4],$$slots:{default:[Pt]},$$scope:{ctx:t}}}}return a&&(e=J(a,c(r))),{c(){e&&z(e.$$.fragment),n=N()},l(t){e&&te(e.$$.fragment,t),n=N()},m(t,l){e&&G(e,t,l),H(t,n,l),o=!0},p(t,l){const s={};if(l&16&&(s.data=t[4]),l&2083&&(s.$$scope={dirty:l,ctx:t}),a!==(a=t[0][2])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{K(f,1)}),Y()}a?(e=J(a,c(t)),z(e.$$.fragment),j(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&F(n),e&&K(e,t)}}}function Pt(r){let e,n,o;var a=r[0][3];function c(t){return{props:{data:t[5],form:t[1]}}}return a&&(e=J(a,c(r))),{c(){e&&z(e.$$.fragment),n=N()},l(t){e&&te(e.$$.fragment,t),n=N()},m(t,l){e&&G(e,t,l),H(t,n,l),o=!0},p(t,l){const s={};if(l&32&&(s.data=t[5]),l&2&&(s.form=t[1]),a!==(a=t[0][3])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{K(f,1)}),Y()}a?(e=J(a,c(t)),z(e.$$.fragment),j(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else a&&e.$set(s)},i(t){o||(e&&j(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&F(n),e&&K(e,t)}}}function Nt(r){let e,n,o,a;const c=[At,St],t=[];function l(s,f){return s[0][3]?0:1}return e=l(r),n=t[e]=c[e](r),{c(){n.c(),o=N()},l(s){n.l(s),o=N()},m(s,f){t[e].m(s,f),H(s,o,f),a=!0},p(s,f){let h=e;e=l(s),e===h?t[e].p(s,f):(W(),T(t[h],1,1,()=>{t[h]=null}),Y(),n=t[e],n?n.p(s,f):(n=t[e]=c[e](s),n.c()),j(n,1),n.m(o.parentNode,o))},i(s){a||(j(n),a=!0)},o(s){T(n),a=!1},d(s){t[e].d(s),s&&F(o)}}}function Tt(r){let e,n,o,a;const c=[It,Lt],t=[];function l(s,f){return s[0][2]?0:1}return e=l(r),n=t[e]=c[e](r),{c(){n.c(),o=N()},l(s){n.l(s),o=N()},m(s,f){t[e].m(s,f),H(s,o,f),a=!0},p(s,f){let h=e;e=l(s),e===h?t[e].p(s,f):(W(),T(t[h],1,1,()=>{t[h]=null}),Y(),n=t[e],n?n.p(s,f):(n=t[e]=c[e](s),n.c()),j(n,1),n.m(o.parentNode,o))},i(s){a||(j(n),a=!0)},o(s){T(n),a=!1},d(s){t[e].d(s),s&&F(o)}}}function ze(r){let e,n=r[7]&&Ge(r);return{c(){e=tt("div"),n&&n.c(),this.h()},l(o){e=nt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=rt(e);n&&n.l(a),a.forEach(F),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),X(e,"position","absolute"),X(e,"left","0"),X(e,"top","0"),X(e,"clip","rect(0 0 0 0)"),X(e,"clip-path","inset(50%)"),X(e,"overflow","hidden"),X(e,"white-space","nowrap"),X(e,"width","1px"),X(e,"height","1px")},m(o,a){H(o,e,a),n&&n.m(e,null)},p(o,a){o[7]?n?n.p(o,a):(n=Ge(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&F(e),n&&n.d()}}}function Ge(r){let e;return{c(){e=at(r[8])},l(n){e=ot(n,r[8])},m(n,o){H(n,e,o)},p(n,o){o&256&&it(e,n[8])},d(n){n&&F(e)}}}function jt(r){let e,n,o,a,c;const t=[Ot,Rt],l=[];function s(h,w){return h[0][1]?0:1}e=s(r),n=l[e]=t[e](r);let f=r[6]&&ze(r);return{c(){n.c(),o=Qe(),f&&f.c(),a=N()},l(h){n.l(h),o=xe(h),f&&f.l(h),a=N()},m(h,w){l[e].m(h,w),H(h,o,w),f&&f.m(h,w),H(h,a,w),c=!0},p(h,[w]){let q=e;e=s(h),e===q?l[e].p(h,w):(W(),T(l[q],1,1,()=>{l[q]=null}),Y(),n=l[e],n?n.p(h,w):(n=l[e]=t[e](h),n.c()),j(n,1),n.m(o.parentNode,o)),h[6]?f?f.p(h,w):(f=ze(h),f.c(),f.m(a.parentNode,a)):f&&(f.d(1),f=null)},i(h){c||(j(n),c=!0)},o(h){T(n),c=!1},d(h){l[e].d(h),h&&F(o),f&&f.d(h),h&&F(a)}}}function Dt(r,e,n){let{stores:o}=e,{page:a}=e,{components:c}=e,{form:t}=e,{data_0:l=null}=e,{data_1:s=null}=e,{data_2:f=null}=e,{data_3:h=null}=e;et(o.page.notify);let w=!1,q=!1,V=null;return Re(()=>{const L=o.page.subscribe(()=>{w&&(n(7,q=!0),n(8,V=document.title||"untitled page"))});return n(6,w=!0),L}),r.$$set=L=>{"stores"in L&&n(9,o=L.stores),"page"in L&&n(10,a=L.page),"components"in L&&n(0,c=L.components),"form"in L&&n(1,t=L.form),"data_0"in L&&n(2,l=L.data_0),"data_1"in L&&n(3,s=L.data_1),"data_2"in L&&n(4,f=L.data_2),"data_3"in L&&n(5,h=L.data_3)},r.$$.update=()=>{r.$$.dirty&1536&&o.page.set(a)},[c,t,l,s,f,h,w,q,V,o,a]}class Ut extends Ye{constructor(e){super(),Xe(this,e,Dt,jt,Ze,{stores:9,page:10,components:0,form:1,data_0:2,data_1:3,data_2:4,data_3:5})}}const Vt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Bt=function(r,e){return new URL(r,e).href},Ke={},B=function(e,n,o){if(!n||n.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(n.map(c=>{if(c=Bt(c,o),c in Ke)return;Ke[c]=!0;const t=c.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(!!o)for(let h=a.length-1;h>=0;h--){const w=a[h];if(w.href===c&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${l}`))return;const f=document.createElement("link");if(f.rel=t?"stylesheet":Vt,t||(f.as="script",f.crossOrigin=""),f.href=c,document.head.appendChild(f),t)return new Promise((h,w)=>{f.addEventListener("load",h),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e())},qt={},ge=[()=>B(()=>import("./chunks/0-98e68ee8.js"),["./chunks\\0-98e68ee8.js","./chunks\\_layout-8d2a742b.js","./components\\pages\\_layout.svelte-d0afab08.js","./chunks\\index-dbeec53a.js","./chunks\\paths-6cd3a76e.js"],import.meta.url),()=>B(()=>import("./chunks/1-af1301ce.js"),["./chunks\\1-af1301ce.js","./components\\pages\\_error.svelte-23be96a7.js","./chunks\\index-dbeec53a.js","./chunks\\stores-9cc6d222.js","./chunks\\singletons-77af33ca.js","./chunks\\index-53f11303.js","./chunks\\paths-6cd3a76e.js","./assets\\_error-0007c0b0.css"],import.meta.url),()=>B(()=>import("./chunks/2-4649b30e.js"),["./chunks\\2-4649b30e.js","./components\\pages\\lektion1\\_layout.svelte-1401e7b4.js","./chunks\\index-dbeec53a.js","./chunks\\paths-6cd3a76e.js","./assets\\_layout-939dfb01.css"],import.meta.url),()=>B(()=>import("./chunks/3-72c00fac.js"),["./chunks\\3-72c00fac.js","./chunks\\_layout-21cf7306.js","./components\\pages\\lektion1\\articles\\_layout.svelte-7704a58f.js","./chunks\\index-dbeec53a.js","./chunks\\paths-6cd3a76e.js"],import.meta.url),()=>B(()=>import("./chunks/4-84710f3f.js"),["./chunks\\4-84710f3f.js","./components\\pages\\lektion2\\_layout.svelte-9ce96475.js","./chunks\\index-dbeec53a.js"],import.meta.url),()=>B(()=>import("./chunks/5-f8329431.js"),["./chunks\\5-f8329431.js","./components\\pages\\_page.svelte-4beccb96.js","./chunks\\index-dbeec53a.js"],import.meta.url),()=>B(()=>import("./chunks/6-89085527.js"),["./chunks\\6-89085527.js","./components\\pages\\about\\_page.svelte-22326f83.js","./chunks\\index-dbeec53a.js","./chunks\\paths-6cd3a76e.js"],import.meta.url),()=>B(()=>import("./chunks/7-b43ed92d.js"),["./chunks\\7-b43ed92d.js","./components\\pages\\contact\\_page.svelte-a0aad17f.js","./chunks\\index-dbeec53a.js","./chunks\\paths-6cd3a76e.js"],import.meta.url),()=>B(()=>import("./chunks/8-bd510d4c.js"),["./chunks\\8-bd510d4c.js","./components\\pages\\lektion1\\_page.svelte-b5bbbf97.js","./chunks\\index-dbeec53a.js","./chunks\\paths-6cd3a76e.js","./assets\\_page-a03e45ac.css"],import.meta.url),()=>B(()=>import("./chunks/9-18a75877.js"),["./chunks\\9-18a75877.js","./components\\pages\\lektion1\\articles\\_page.svelte-91fb305c.js","./chunks\\index-dbeec53a.js","./chunks\\Article-90eea33b.js","./chunks\\paths-6cd3a76e.js","./chunks\\stores-9cc6d222.js","./chunks\\singletons-77af33ca.js","./chunks\\index-53f11303.js","./assets\\Article-53e5dd16.css","./assets\\_page-0c1c4db9.css"],import.meta.url),()=>B(()=>import("./chunks/10-97f953f0.js"),["./chunks\\10-97f953f0.js","./components\\pages\\lektion1\\articles\\article1\\_page.svelte-7b058d29.js","./chunks\\index-dbeec53a.js","./chunks\\Article-90eea33b.js","./chunks\\paths-6cd3a76e.js","./chunks\\stores-9cc6d222.js","./chunks\\singletons-77af33ca.js","./chunks\\index-53f11303.js","./assets\\Article-53e5dd16.css"],import.meta.url),()=>B(()=>import("./chunks/11-4d62134c.js"),["./chunks\\11-4d62134c.js","./components\\pages\\lektion1\\articles\\article2\\_page.svelte-dd5ab6ff.js","./chunks\\index-dbeec53a.js","./chunks\\Article-90eea33b.js","./chunks\\paths-6cd3a76e.js","./chunks\\stores-9cc6d222.js","./chunks\\singletons-77af33ca.js","./chunks\\index-53f11303.js","./assets\\Article-53e5dd16.css"],import.meta.url),()=>B(()=>import("./chunks/12-cd24f09b.js"),["./chunks\\12-cd24f09b.js","./components\\pages\\lektion1\\articles\\article3\\_page.svelte-e07a4613.js","./chunks\\index-dbeec53a.js","./chunks\\Article-90eea33b.js","./chunks\\paths-6cd3a76e.js","./chunks\\stores-9cc6d222.js","./chunks\\singletons-77af33ca.js","./chunks\\index-53f11303.js","./assets\\Article-53e5dd16.css"],import.meta.url),()=>B(()=>import("./chunks/13-b6ac20b8.js"),["./chunks\\13-b6ac20b8.js","./components\\pages\\lektion1\\movies\\_page.svelte-7d6ff16b.js","./chunks\\index-dbeec53a.js","./chunks\\index-53f11303.js","./assets\\_page-d0ebb8d7.css"],import.meta.url),()=>B(()=>import("./chunks/14-a8f3c001.js"),["./chunks\\14-a8f3c001.js","./components\\pages\\lektion1\\phone-number\\_page.svelte-f2fea1bf.js","./chunks\\index-dbeec53a.js","./assets\\_page-2ec1f4d3.css"],import.meta.url),()=>B(()=>import("./chunks/15-45aad40b.js"),["./chunks\\15-45aad40b.js","./components\\pages\\lektion1\\size-dropdown\\_page.svelte-e0b9a3e1.js","./chunks\\index-dbeec53a.js","./assets\\_page-41ceee0d.css"],import.meta.url),()=>B(()=>import("./chunks/16-cefb2e24.js"),["./chunks\\16-cefb2e24.js","./components\\pages\\lektion2\\_page.svelte-8fa6f170.js","./chunks\\index-dbeec53a.js"],import.meta.url)],Ct=[],Ft={"/":[5],"/about":[6],"/contact":[7],"/lektion1":[8,[2]],"/lektion1/articles":[9,[2,3]],"/lektion1/articles/article1":[10,[2,3]],"/lektion1/articles/article2":[11,[2,3]],"/lektion1/articles/article3":[12,[2,3]],"/lektion1/movies":[13,[2]],"/lektion1/phone-number":[14,[2]],"/lektion1/size-dropdown":[15,[2]],"/lektion2":[16,[4]]},Jt={handleError:({error:r})=>{console.error(r)}};class Le{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,n){this.status=e,this.location=n}}async function zt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Gt=-1,Kt=-2,Mt=-3,Ht=-4,Wt=-5,Yt=-6;function Xt(r){const e=JSON.parse(r);if(typeof e=="number")return a(e);const n=e,o=Array(n.length);function a(c){if(c===Gt)return;if(c===Mt)return NaN;if(c===Ht)return 1/0;if(c===Wt)return-1/0;if(c===Yt)return-0;if(c in o)return o[c];const t=n[c];if(!t||typeof t!="object")o[c]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":o[c]=new Date(t[1]);break;case"Set":const s=new Set;o[c]=s;for(let w=1;w<t.length;w+=1)s.add(a(t[w]));break;case"Map":const f=new Map;o[c]=f;for(let w=1;w<t.length;w+=2)f.set(a(t[w]),a(t[w+1]));break;case"RegExp":o[c]=new RegExp(t[1],t[2]);break;case"Object":o[c]=Object(t[1]);break;case"BigInt":o[c]=BigInt(t[1]);break;case"null":const h=Object.create(null);o[c]=h;for(let w=1;w<t.length;w+=2)h[t[w]]=a(t[w+1]);break}else{const l=new Array(t.length);o[c]=l;for(let s=0;s<t.length;s+=1){const f=t[s];f!==Kt&&(l[s]=a(f))}}else{const l={};o[c]=l;for(const s in t){const f=t[s];l[s]=a(f)}}return o[c]}return a(0)}const We="sveltekit:scroll",Q="sveltekit:index",pe=$t(ge,Ct,Ft,qt),Ie=ge[0],Se=ge[1];Ie();Se();let se={};try{se=JSON.parse(sessionStorage[We])}catch{}function $e(r){se[r]=Oe()}function Zt({target:r,base:e,trailing_slash:n}){var Ve;const o=[];let a=null;const c={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,s=!1,f=!0,h=!1,w=!1,q,V=(Ve=history.state)==null?void 0:Ve[Q];V||(V=Date.now(),history.replaceState({...history.state,[Q]:V},"",location.href));const L=se[V];L&&(history.scrollRestoration="manual",scrollTo(L.x,L.y));let C=!1,M,Z,x;async function le(){x=x||Promise.resolve(),await x,x=null;const i=new URL(location.href),d=be(i,!0);a=null,await Ae(d,i,[])}async function re(i,{noscroll:d=!1,replaceState:_=!1,keepfocus:u=!1,state:p={},invalidateAll:m=!1},g,k){return typeof i=="string"&&(i=new URL(i,Fe(document))),ve({url:i,scroll:d?Oe():null,keepfocus:u,redirect_chain:g,details:{state:p,replaceState:_},nav_token:k,accepted:()=>{m&&(w=!0)},blocked:()=>{},type:"goto"})}async function ce(i){const d=be(i,!1);if(!d)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${i}`);return a={id:d.id,promise:Te(d)},a.promise}async function Ae(i,d,_,u,p={},m){var k,E;Z=p;let g=i&&await Te(i);if(g||(g=await Ue(d,null,ie(new Error(`Not found: ${d.pathname}`),{url:d,params:{},routeId:null}),404)),d=(i==null?void 0:i.url)||d,Z!==p)return!1;if(g.type==="redirect")if(_.length>10||_.includes(d.pathname))g=await fe({status:500,error:ie(new Error("Redirect loop"),{url:d,params:{},routeId:null}),url:d,routeId:null});else return re(new URL(g.location,d).href,{},[..._,d.pathname],p),!1;else((E=(k=g.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await ee.updated.check()&&await ue(d);if(o.length=0,w=!1,h=!0,u&&u.details){const{details:b}=u,v=b.replaceState?0:1;b.state[Q]=V+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",d)}if(a=null,s){t=g.state,g.props.page&&(g.props.page.url=d);const b=_e();q.$set(g.props),b()}else Pe(g);if(u){const{scroll:b,keepfocus:v}=u;if(!v){const R=document.body,I=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var S;(S=getSelection())==null||S.removeAllRanges()}),I!==null?R.setAttribute("tabindex",I):R.removeAttribute("tabindex")}if(await Ce(),f){const R=d.hash&&document.getElementById(d.hash.slice(1));b?scrollTo(b.x,b.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ce();f=!0,g.props.page&&(M=g.props.page),m&&m(),h=!1}function Pe(i){var p,m;t=i.state;const d=document.querySelector("style[data-sveltekit]");d&&d.remove(),M=i.props.page;const _=_e();q=new Ut({target:r,props:{...i.props,stores:ee},hydrate:!0}),_();const u={from:null,to:de("to",{params:t.params,routeId:(m=(p=t.route)==null?void 0:p.id)!=null?m:null,url:new URL(location.href)}),type:"load"};c.after_navigate.forEach(g=>g(u)),s=!0}async function ae({url:i,params:d,branch:_,status:u,error:p,route:m,form:g}){var I;const k=_.filter(Boolean),E={type:"loaded",state:{url:i,params:d,branch:_,error:p,route:m},props:{components:k.map(S=>S.node.component)}};g!==void 0&&(E.props.form=g);let b={},v=!M;for(let S=0;S<k.length;S+=1){const D=k[S];b={...b,...D.data},(v||!t.branch.some(U=>U===D))&&(E.props[`data_${S}`]=b,v=v||Object.keys((I=D.data)!=null?I:{}).length>0)}if(v||(v=Object.keys(M.data).length!==Object.keys(b).length),!t.url||i.href!==t.url.href||t.error!==p||g!==void 0||v){E.props.page={error:p,params:d,routeId:m&&m.id,status:u,url:i,form:g,data:v?b:M.data};const S=(D,U)=>{Object.defineProperty(E.props.page,D,{get:()=>{throw new Error(`$page.${D} has been replaced by $page.url.${U}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return E}async function we({loader:i,parent:d,url:_,params:u,routeId:p,server_data_node:m}){var b,v,R,I,S;let g=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await i();if((b=E.shared)!=null&&b.load){let D=function(...O){for(const y of O){const{href:$}=new URL(y,_);k.dependencies.add($)}};const U={routeId:p,params:new Proxy(u,{get:(O,y)=>(k.params.add(y),O[y])}),data:(v=m==null?void 0:m.data)!=null?v:null,url:pt(_,()=>{k.url=!0}),async fetch(O,y){let $;O instanceof Request?($=O.url,y={body:O.method==="GET"||O.method==="HEAD"?void 0:await O.blob(),cache:O.cache,credentials:O.credentials,headers:O.headers,integrity:O.integrity,keepalive:O.keepalive,method:O.method,mode:O.mode,redirect:O.redirect,referrer:O.referrer,referrerPolicy:O.referrerPolicy,signal:O.signal,...y}):$=O;const P=new URL($,_).href;return D(P),s?wt(P,y):gt($,P,y)},setHeaders:()=>{},depends:D,parent(){return k.parent=!0,d()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(R=await E.shared.load.call(null,U))!=null?R:null,g=g?await zt(g):null}return{node:E,loader:i,server:m,shared:(I=E.shared)!=null&&I.load?{type:"data",data:g,uses:k}:null,data:(S=g!=null?g:m==null?void 0:m.data)!=null?S:null}}function Ne(i,d,_,u){if(w)return!0;if(!_)return!1;if(_.parent&&d||_.url&&i)return!0;for(const p of _.params)if(u[p]!==t.params[p])return!0;for(const p of _.dependencies)if(o.some(m=>m(new URL(p))))return!0;return!1}function ye(i,d){var _,u;return(i==null?void 0:i.type)==="data"?{type:"data",data:i.data,uses:{dependencies:new Set((_=i.uses.dependencies)!=null?_:[]),params:new Set((u=i.uses.params)!=null?u:[]),parent:!!i.uses.parent,url:!!i.uses.url}}:(i==null?void 0:i.type)==="skip"&&d!=null?d:null}async function Te({id:i,invalidating:d,url:_,params:u,route:p}){var O;if((a==null?void 0:a.id)===i)return a.promise;const{errors:m,layouts:g,leaf:k}=p,E=[...g,k];m.forEach(y=>y==null?void 0:y().catch(()=>{})),E.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let b=null;const v=t.url?i!==t.url.pathname+t.url.search:!1,R=E.reduce((y,$,P)=>{var oe;const A=t.branch[P],ne=!!($!=null&&$[0])&&((A==null?void 0:A.loader)!==$[1]||Ne(v,y.some(Boolean),(oe=A.server)==null?void 0:oe.uses,u));return y.push(ne),y},[]);if(R.some(Boolean)){try{b=await He(_,R)}catch(y){return fe({status:500,error:ie(y,{url:_,params:u,routeId:p.id}),url:_,routeId:p.id})}if(b.type==="redirect")return b}const I=b==null?void 0:b.nodes;let S=!1;const D=E.map(async(y,$)=>{var oe;if(!y)return;const P=t.branch[$],A=I==null?void 0:I[$];if((!A||A.type==="skip")&&y[1]===(P==null?void 0:P.loader)&&!Ne(v,S,(oe=P.shared)==null?void 0:oe.uses,u))return P;if(S=!0,(A==null?void 0:A.type)==="error")throw A;return we({loader:y[1],url:_,params:u,routeId:p.id,parent:async()=>{var qe;const Be={};for(let ke=0;ke<$;ke+=1)Object.assign(Be,(qe=await D[ke])==null?void 0:qe.data);return Be},server_data_node:ye(A===void 0&&y[0]?{type:"skip"}:A!=null?A:null,P==null?void 0:P.server)})});for(const y of D)y.catch(()=>{});const U=[];for(let y=0;y<E.length;y+=1)if(E[y])try{U.push(await D[y])}catch($){if($ instanceof Me)return{type:"redirect",location:$.location};let P=500,A;I!=null&&I.includes($)?(P=(O=$.status)!=null?O:P,A=$.error):$ instanceof Le?(P=$.status,A=$.body):A=ie($,{params:u,url:_,routeId:p.id});const ne=await je(y,U,m);return ne?await ae({url:_,params:u,branch:U.slice(0,ne.idx).concat(ne.node),status:P,error:A,route:p}):await Ue(_,p.id,A,P)}else U.push(void 0);return await ae({url:_,params:u,branch:U,status:200,error:null,route:p,form:d?void 0:null})}async function je(i,d,_){for(;i--;)if(_[i]){let u=i;for(;!d[u];)u-=1;try{return{idx:u+1,node:{node:await _[i](),loader:_[i],data:{},server:null,shared:null}}}catch{continue}}}async function fe({status:i,error:d,url:_,routeId:u}){var b;const p={},m=await Ie();let g=null;if(m.server)try{const v=await He(_,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;g=(b=v.nodes[0])!=null?b:null}catch{(_.origin!==location.origin||_.pathname!==location.pathname||l)&&await ue(_)}const k=await we({loader:Ie,url:_,params:p,routeId:u,parent:()=>Promise.resolve({}),server_data_node:ye(g)}),E={node:await Se(),loader:Se,shared:null,server:null,data:null};return await ae({url:_,params:p,branch:[k,E],status:i,error:d,route:null})}function be(i,d){if(De(i))return;const _=decodeURI(i.pathname.slice(e.length)||"/");for(const u of pe){const p=u.exec(_);if(p){const m=new URL(i.origin+ct(i.pathname,n)+i.search+i.hash);return{id:m.pathname+m.search,invalidating:d,route:u,params:ft(p),url:m}}}}function De(i){return i.origin!==location.origin||!i.pathname.startsWith(e)}async function ve({url:i,scroll:d,keepfocus:_,redirect_chain:u,details:p,type:m,delta:g,nav_token:k,accepted:E,blocked:b}){var D,U,O,y;let v=!1;const R=be(i,!1),I={from:de("from",{params:t.params,routeId:(U=(D=t.route)==null?void 0:D.id)!=null?U:null,url:t.url}),to:de("to",{params:(O=R==null?void 0:R.params)!=null?O:null,routeId:(y=R==null?void 0:R.route.id)!=null?y:null,url:i}),type:m};g!==void 0&&(I.delta=g);const S={...I,cancel:()=>{v=!0}};if(c.before_navigate.forEach($=>$(S)),v){b();return}$e(V),E(),s&&ee.navigating.set(I),await Ae(R,i,u,{scroll:d,keepfocus:_,details:p},k,()=>{c.after_navigate.forEach($=>$(I)),ee.navigating.set(null)})}async function Ue(i,d,_,u){return i.origin===location.origin&&i.pathname===location.pathname&&!l?await fe({status:u,error:_,url:i,routeId:d}):await ue(i)}function ue(i){return location.href=i.href,new Promise(()=>{})}return{after_navigate:i=>{Re(()=>(c.after_navigate.push(i),()=>{const d=c.after_navigate.indexOf(i);c.after_navigate.splice(d,1)}))},before_navigate:i=>{Re(()=>(c.before_navigate.push(i),()=>{const d=c.before_navigate.indexOf(i);c.before_navigate.splice(d,1)}))},disable_scroll_handling:()=>{(h||!s)&&(f=!1)},goto:(i,d={})=>re(i,d,[]),invalidate:i=>{if(i===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof i=="function")o.push(i);else{const{href:d}=new URL(i,location.href);o.push(_=>_.href===d)}return le()},invalidateAll:()=>(w=!0,le()),prefetch:async i=>{const d=new URL(i,Fe(document));await ce(d)},prefetch_routes:async i=>{const _=(i?pe.filter(u=>i.some(p=>u.exec(p))):pe).map(u=>Promise.all([...u.layouts,u.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(_)},apply_action:async i=>{if(i.type==="error"){const d=new URL(location.href),{branch:_,route:u}=t;if(!u)return;const p=await je(t.branch.length,_,u.errors);if(p){const m=await ae({url:d,params:t.params,branch:_.slice(0,p.idx).concat(p.node),status:500,error:i.error,route:u});t=m.state;const g=_e();q.$set(m.props),g()}}else if(i.type==="redirect")re(i.location,{invalidateAll:!0},[]);else{const d={form:i.data,page:{...M,form:i.data,status:i.status}},_=_e();q.$set(d),_()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",u=>{var g,k;let p=!1;const m={from:de("from",{params:t.params,routeId:(k=(g=t.route)==null?void 0:g.id)!=null?k:null,url:t.url}),to:null,type:"unload",cancel:()=>p=!0};c.before_navigate.forEach(E=>E(m)),p?(u.preventDefault(),u.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){$e(V);try{sessionStorage[We]=JSON.stringify(se)}catch{}}});const i=u=>{const{url:p,options:m}=Je(u);if(p&&m.prefetch){if(De(p))return;ce(p)}};let d;const _=u=>{clearTimeout(d),d=setTimeout(()=>{var p;(p=u.target)==null||p.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",i),addEventListener("mousemove",_),addEventListener("sveltekit:trigger_prefetch",i),addEventListener("click",u=>{if(u.button||u.which!==1||u.metaKey||u.ctrlKey||u.shiftKey||u.altKey||u.defaultPrevented)return;const{a:p,url:m,options:g}=Je(u);if(!p||!m)return;const k=p instanceof SVGAElement;if(!k&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:"))return;const E=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||E.includes("external")||g.reload||(k?p.target.baseVal:p.target))return;const[b,v]=m.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){C=!0,$e(V),t.url=m,ee.page.set({...M,url:m}),ee.page.notify();return}ve({url:m,scroll:g.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>u.preventDefault(),blocked:()=>u.preventDefault(),type:"link"})}),addEventListener("popstate",u=>{if(u.state){if(u.state[Q]===V)return;const p=u.state[Q]-V;ve({url:new URL(location.href),scroll:se[u.state[Q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{V=u.state[Q]},blocked:()=>{history.go(-p)},type:"popstate",delta:p})}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[Q]:++V},"",location.href))});for(const u of document.querySelectorAll("link"))u.rel==="icon"&&(u.href=u.href);addEventListener("pageshow",u=>{u.persisted&&ee.navigating.set(null)})},_hydrate:async({status:i,error:d,node_ids:_,params:u,routeId:p,data:m,form:g})=>{var b;l=!0;const k=new URL(location.href);let E;try{const v=_.map(async(R,I)=>{const S=m[I];return we({loader:ge[R],url:k,params:u,routeId:p,parent:async()=>{const D={};for(let U=0;U<I;U+=1)Object.assign(D,(await v[U]).data);return D},server_data_node:ye(S)})});E=await ae({url:k,params:u,branch:await Promise.all(v),status:i,error:d,form:g,route:(b=pe.find(R=>R.id===p))!=null?b:null})}catch(v){if(v instanceof Me){await ue(new URL(v.location,location.href));return}E=await fe({status:v instanceof Le?v.status:500,error:ie(v,{url:k,params:u,routeId:p}),url:k,routeId:p})}Pe(E)}}}async function He(r,e){const n=new URL(r);n.pathname=ht(r.pathname);const o=await me(n.href,{headers:{"x-sveltekit-invalidated":e.map(c=>c?"1":"").join(",")}}),a=await o.text();if(!o.ok)throw new Error(JSON.parse(a));return Xt(a)}function ie(r,e){var n;return r instanceof Le?r.body:(n=Jt.handleError({error:r,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Qt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function de(r,e){for(const n of Qt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return e}function _e(){return()=>{}}async function nn({env:r,hydrate:e,paths:n,target:o,trailing_slash:a}){lt(n);const c=Zt({target:o,base:n.base,trailing_slash:a});st({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{nn as start};

import{S as Xe,i as Ze,s as Qe,a as xe,e as P,c as et,b as J,g as W,t as T,d as H,f as D,h as j,j as tt,o as Ie,k as rt,l as nt,m as at,n as ke,p as Y,q as ot,r as it,u as st,v as N,w as U,x as Q,y as q,z as C,A as ue}from"./chunks/index-e44d5234.js";import{g as ze,f as Je,s as Z,a as Le,i as lt}from"./chunks/singletons-1de813a5.js";import{_ as w}from"./chunks/preload-helper-b21cceae.js";import{s as ct}from"./chunks/paths-6cd3a76e.js";function ft(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function ut(n){return n.split("%25").map(decodeURI).join("%25")}function _t(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const pt=["href","pathname","search","searchParams","toString","toJSON"];function dt(n,e){const r=new URL(n);for(const o of pt){let a=r[o];Object.defineProperty(r,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return mt(r),r}function mt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ht="/__data.json";function gt(n){return n.replace(/\/$/,"")+ht}function wt(n){let e=5381;if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=r.length;for(;o;)e=e*33^r[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:e?.method||"GET")!=="GET"){const o=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;oe.delete(o)}return me(n,e)};const oe=new Map;function vt(n,e){const r=He(n,e),o=document.querySelector(r);if(o?.textContent){const{body:a,...u}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&oe.set(r,{body:a,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,u))}return me(n,e)}function yt(n,e,r){if(oe.size>0){const o=He(n,r),a=oe.get(o);if(a){if(performance.now()<a.ttl)return new Response(a.body,a.init);oe.delete(o)}}return me(e,r)}function He(n,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return e?.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${wt(e.body)}"]`),o}const bt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Et(n){const e=[],r=[],o=[];let a=!0;return{pattern:n==="/"?/^\/$/:new RegExp(`^${$t(n).map((t,l,s)=>{const f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(f)return e.push(f[1]),r.push(f[2]),o.push(!1),"(?:/(.*))?";const m=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(m)return e.push(m[1]),r.push(m[2]),o.push(!0),"(?:/([^/]+))?";const y=l===s.length-1;return t?"/"+t.split(/\[(.+?)\](?!\])/).map((b,L)=>{if(L%2){if(b.startsWith("x+"))return $e(String.fromCharCode(parseInt(b.slice(2),16)));if(b.startsWith("u+"))return $e(String.fromCharCode(...b.slice(2).split("-").map(te=>parseInt(te,16))));const M=bt.exec(b);if(!M)throw new Error(`Invalid param: ${b}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,B,se,x,le]=M;return e.push(x),r.push(le),o.push(!!B),se?"(.*?)":B?"([^/]*)?":"([^/]+?)"}return y&&b.includes(".")&&(a=!1),$e(b)}).join(""):void 0}).join("")}${a?"/?":""}$`),names:e,types:r,optional:o}}function kt(n){return!/^\([^)]+\)$/.test(n)}function $t(n){return n.slice(1).split("/").filter(kt)}function Rt(n,{names:e,types:r,optional:o},a){const u={};for(let t=0;t<e.length;t+=1){const l=e[t],s=r[t];let f=n[t+1];if(f||!o[t]){if(s){const m=a[s];if(!m)throw new Error(`Missing "${s}" param matcher`);if(!m(f))return}u[l]=f??""}}return u}function $e(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ot(n,e,r,o){const a=new Set(e);return Object.entries(r).map(([l,[s,f,m]])=>{const{pattern:y,names:F,types:K,optional:b}=Et(l),L={id:l,exec:M=>{const B=y.exec(M);if(B)return Rt(B,{names:F,types:K,optional:b},o)},errors:[1,...m||[]].map(M=>n[M]),layouts:[0,...f||[]].map(t),leaf:u(s)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function u(l){const s=l<0;return s&&(l=~l),[s,n[l]]}function t(l){return l===void 0?l:[a.has(l),n[l]]}}function It(n){let e,r,o;var a=n[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=N(a,u(n))),{c(){e&&U(e.$$.fragment),r=P()},l(t){e&&Q(e.$$.fragment,t),r=P()},m(t,l){e&&q(e,t,l),J(t,r,l),o=!0},p(t,l){const s={};if(l&4&&(s.data=t[2]),l&2&&(s.form=t[1]),a!==(a=t[0][0])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{C(f,1)}),H()}a?(e=N(a,u(t)),U(e.$$.fragment),D(e.$$.fragment,1),q(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&j(r),e&&C(e,t)}}}function Lt(n){let e,r,o;var a=n[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[jt]},$$scope:{ctx:t}}}}return a&&(e=N(a,u(n))),{c(){e&&U(e.$$.fragment),r=P()},l(t){e&&Q(e.$$.fragment,t),r=P()},m(t,l){e&&q(e,t,l),J(t,r,l),o=!0},p(t,l){const s={};if(l&4&&(s.data=t[2]),l&2107&&(s.$$scope={dirty:l,ctx:t}),a!==(a=t[0][0])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{C(f,1)}),H()}a?(e=N(a,u(t)),U(e.$$.fragment),D(e.$$.fragment,1),q(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&j(r),e&&C(e,t)}}}function At(n){let e,r,o;var a=n[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=N(a,u(n))),{c(){e&&U(e.$$.fragment),r=P()},l(t){e&&Q(e.$$.fragment,t),r=P()},m(t,l){e&&q(e,t,l),J(t,r,l),o=!0},p(t,l){const s={};if(l&8&&(s.data=t[3]),l&2&&(s.form=t[1]),a!==(a=t[0][1])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{C(f,1)}),H()}a?(e=N(a,u(t)),U(e.$$.fragment),D(e.$$.fragment,1),q(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&j(r),e&&C(e,t)}}}function Pt(n){let e,r,o;var a=n[0][1];function u(t){return{props:{data:t[3],$$slots:{default:[St]},$$scope:{ctx:t}}}}return a&&(e=N(a,u(n))),{c(){e&&U(e.$$.fragment),r=P()},l(t){e&&Q(e.$$.fragment,t),r=P()},m(t,l){e&&q(e,t,l),J(t,r,l),o=!0},p(t,l){const s={};if(l&8&&(s.data=t[3]),l&2099&&(s.$$scope={dirty:l,ctx:t}),a!==(a=t[0][1])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{C(f,1)}),H()}a?(e=N(a,u(t)),U(e.$$.fragment),D(e.$$.fragment,1),q(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&j(r),e&&C(e,t)}}}function Tt(n){let e,r,o;var a=n[0][2];function u(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=N(a,u(n))),{c(){e&&U(e.$$.fragment),r=P()},l(t){e&&Q(e.$$.fragment,t),r=P()},m(t,l){e&&q(e,t,l),J(t,r,l),o=!0},p(t,l){const s={};if(l&16&&(s.data=t[4]),l&2&&(s.form=t[1]),a!==(a=t[0][2])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{C(f,1)}),H()}a?(e=N(a,u(t)),U(e.$$.fragment),D(e.$$.fragment,1),q(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&j(r),e&&C(e,t)}}}function Dt(n){let e,r,o;var a=n[0][2];function u(t){return{props:{data:t[4],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return a&&(e=N(a,u(n))),{c(){e&&U(e.$$.fragment),r=P()},l(t){e&&Q(e.$$.fragment,t),r=P()},m(t,l){e&&q(e,t,l),J(t,r,l),o=!0},p(t,l){const s={};if(l&16&&(s.data=t[4]),l&2083&&(s.$$scope={dirty:l,ctx:t}),a!==(a=t[0][2])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{C(f,1)}),H()}a?(e=N(a,u(t)),U(e.$$.fragment),D(e.$$.fragment,1),q(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&j(r),e&&C(e,t)}}}function Vt(n){let e,r,o;var a=n[0][3];function u(t){return{props:{data:t[5],form:t[1]}}}return a&&(e=N(a,u(n))),{c(){e&&U(e.$$.fragment),r=P()},l(t){e&&Q(e.$$.fragment,t),r=P()},m(t,l){e&&q(e,t,l),J(t,r,l),o=!0},p(t,l){const s={};if(l&32&&(s.data=t[5]),l&2&&(s.form=t[1]),a!==(a=t[0][3])){if(e){W();const f=e;T(f.$$.fragment,1,0,()=>{C(f,1)}),H()}a?(e=N(a,u(t)),U(e.$$.fragment),D(e.$$.fragment,1),q(e,r.parentNode,r)):e=null}else a&&e.$set(s)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&j(r),e&&C(e,t)}}}function St(n){let e,r,o,a;const u=[Dt,Tt],t=[];function l(s,f){return s[0][3]?0:1}return e=l(n),r=t[e]=u[e](n),{c(){r.c(),o=P()},l(s){r.l(s),o=P()},m(s,f){t[e].m(s,f),J(s,o,f),a=!0},p(s,f){let m=e;e=l(s),e===m?t[e].p(s,f):(W(),T(t[m],1,1,()=>{t[m]=null}),H(),r=t[e],r?r.p(s,f):(r=t[e]=u[e](s),r.c()),D(r,1),r.m(o.parentNode,o))},i(s){a||(D(r),a=!0)},o(s){T(r),a=!1},d(s){t[e].d(s),s&&j(o)}}}function jt(n){let e,r,o,a;const u=[Pt,At],t=[];function l(s,f){return s[0][2]?0:1}return e=l(n),r=t[e]=u[e](n),{c(){r.c(),o=P()},l(s){r.l(s),o=P()},m(s,f){t[e].m(s,f),J(s,o,f),a=!0},p(s,f){let m=e;e=l(s),e===m?t[e].p(s,f):(W(),T(t[m],1,1,()=>{t[m]=null}),H(),r=t[e],r?r.p(s,f):(r=t[e]=u[e](s),r.c()),D(r,1),r.m(o.parentNode,o))},i(s){a||(D(r),a=!0)},o(s){T(r),a=!1},d(s){t[e].d(s),s&&j(o)}}}function Ge(n){let e,r=n[7]&&Ke(n);return{c(){e=rt("div"),r&&r.c(),this.h()},l(o){e=nt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=at(e);r&&r.l(a),a.forEach(j),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),Y(e,"position","absolute"),Y(e,"left","0"),Y(e,"top","0"),Y(e,"clip","rect(0 0 0 0)"),Y(e,"clip-path","inset(50%)"),Y(e,"overflow","hidden"),Y(e,"white-space","nowrap"),Y(e,"width","1px"),Y(e,"height","1px")},m(o,a){J(o,e,a),r&&r.m(e,null)},p(o,a){o[7]?r?r.p(o,a):(r=Ke(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&j(e),r&&r.d()}}}function Ke(n){let e;return{c(){e=ot(n[8])},l(r){e=it(r,n[8])},m(r,o){J(r,e,o)},p(r,o){o&256&&st(e,r[8])},d(r){r&&j(e)}}}function Nt(n){let e,r,o,a,u;const t=[Lt,It],l=[];function s(m,y){return m[0][1]?0:1}e=s(n),r=l[e]=t[e](n);let f=n[6]&&Ge(n);return{c(){r.c(),o=xe(),f&&f.c(),a=P()},l(m){r.l(m),o=et(m),f&&f.l(m),a=P()},m(m,y){l[e].m(m,y),J(m,o,y),f&&f.m(m,y),J(m,a,y),u=!0},p(m,[y]){let F=e;e=s(m),e===F?l[e].p(m,y):(W(),T(l[F],1,1,()=>{l[F]=null}),H(),r=l[e],r?r.p(m,y):(r=l[e]=t[e](m),r.c()),D(r,1),r.m(o.parentNode,o)),m[6]?f?f.p(m,y):(f=Ge(m),f.c(),f.m(a.parentNode,a)):f&&(f.d(1),f=null)},i(m){u||(D(r),u=!0)},o(m){T(r),u=!1},d(m){l[e].d(m),m&&j(o),f&&f.d(m),m&&j(a)}}}function Ut(n,e,r){let{stores:o}=e,{page:a}=e,{components:u}=e,{form:t}=e,{data_0:l=null}=e,{data_1:s=null}=e,{data_2:f=null}=e,{data_3:m=null}=e;tt(o.page.notify);let y=!1,F=!1,K=null;return Ie(()=>{const b=o.page.subscribe(()=>{y&&(r(7,F=!0),r(8,K=document.title||"untitled page"))});return r(6,y=!0),b}),n.$$set=b=>{"stores"in b&&r(9,o=b.stores),"page"in b&&r(10,a=b.page),"components"in b&&r(0,u=b.components),"form"in b&&r(1,t=b.form),"data_0"in b&&r(2,l=b.data_0),"data_1"in b&&r(3,s=b.data_1),"data_2"in b&&r(4,f=b.data_2),"data_3"in b&&r(5,m=b.data_3)},n.$$.update=()=>{n.$$.dirty&1536&&o.page.set(a)},[u,t,l,s,f,m,y,F,K,o,a]}class qt extends Xe{constructor(e){super(),Ze(this,e,Ut,Nt,Qe,{stores:9,page:10,components:0,form:1,data_0:2,data_1:3,data_2:4,data_3:5})}}const Ct={},he=[()=>w(()=>import("./chunks/0-eb90add0.js"),["./chunks/0-eb90add0.js","./chunks/_layout-8d2a742b.js","./components/pages/_layout.svelte-345969cd.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js","./chunks/stores-c572297f.js","./chunks/singletons-1de813a5.js","./chunks/index-24cc50d7.js","./assets/_layout-1c7e14f8.css"],import.meta.url),()=>w(()=>import("./chunks/1-2cb13dc9.js"),["./chunks/1-2cb13dc9.js","./components/pages/_error.svelte-4e9e2ddc.js","./chunks/index-e44d5234.js","./chunks/stores-c572297f.js","./chunks/singletons-1de813a5.js","./chunks/index-24cc50d7.js","./chunks/paths-6cd3a76e.js","./assets/_error-3215df57.css"],import.meta.url),()=>w(()=>import("./chunks/2-487cbe43.js"),["./chunks/2-487cbe43.js","./components/pages/lektion1/_layout.svelte-4d836360.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js","./assets/_layout-e52193a7.css"],import.meta.url),()=>w(()=>import("./chunks/3-4c35b88a.js"),["./chunks/3-4c35b88a.js","./components/pages/lektion1/articles/_layout.svelte-180996cc.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js","./chunks/stores-a829ab84.js","./chunks/index-24cc50d7.js"],import.meta.url),()=>w(()=>import("./chunks/4-53e327c0.js"),["./chunks/4-53e327c0.js","./components/pages/lektion2/_layout.svelte-80a2e9de.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>w(()=>import("./chunks/5-26c4f80f.js"),["./chunks/5-26c4f80f.js","./components/pages/lektion3/_layout.svelte-5dda9cc5.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>w(()=>import("./chunks/6-d3ae48f0.js"),["./chunks/6-d3ae48f0.js","./components/pages/lektion4/_layout.svelte-6c2032cc.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>w(()=>import("./chunks/7-e852282b.js"),["./chunks/7-e852282b.js","./components/pages/lektion5/_layout.svelte-c5db6799.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>w(()=>import("./chunks/8-28275128.js"),["./chunks/8-28275128.js","./components/pages/lektion8/_layout.svelte-727e38af.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>w(()=>import("./chunks/9-135aabd7.js"),["./chunks/9-135aabd7.js","./components/pages/lektion9/_layout.svelte-9a7e8fb4.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js","./chunks/stores-c572297f.js","./chunks/singletons-1de813a5.js","./chunks/index-24cc50d7.js"],import.meta.url),()=>w(()=>import("./chunks/10-26fc9045.js"),["./chunks/10-26fc9045.js","./components/pages/_page.svelte-9bc8eafb.js","./chunks/index-e44d5234.js"],import.meta.url),()=>w(()=>import("./chunks/11-65c4e2f1.js"),["./chunks/11-65c4e2f1.js","./components/pages/about/_page.svelte-ca18450d.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>w(()=>import("./chunks/12-bb8b19a4.js"),["./chunks/12-bb8b19a4.js","./components/pages/contact/_page.svelte-df99e74b.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>w(()=>import("./chunks/13-73691ea4.js"),["./chunks/13-73691ea4.js","./components/pages/lektion1/_page.svelte-adeee37d.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js","./assets/_page-3b98eb30.css"],import.meta.url),()=>w(()=>import("./chunks/14-762210b5.js"),["./chunks/14-762210b5.js","./components/pages/lektion1/articles/_page.svelte-e1d8be40.js","./chunks/index-e44d5234.js","./chunks/Article-ce89992f.js","./chunks/paths-6cd3a76e.js","./chunks/stores-a829ab84.js","./chunks/index-24cc50d7.js","./assets/Article-41709cbb.css","./assets/_page-a51ebe6b.css"],import.meta.url),()=>w(()=>import("./chunks/15-35bff132.js"),["./chunks/15-35bff132.js","./components/pages/lektion1/articles/article1/_page.svelte-24f93ee6.js","./chunks/index-e44d5234.js","./chunks/Article-ce89992f.js","./chunks/paths-6cd3a76e.js","./chunks/stores-a829ab84.js","./chunks/index-24cc50d7.js","./assets/Article-41709cbb.css"],import.meta.url),()=>w(()=>import("./chunks/16-bdd5e63f.js"),["./chunks/16-bdd5e63f.js","./components/pages/lektion1/articles/article2/_page.svelte-afbba87c.js","./chunks/index-e44d5234.js","./chunks/Article-ce89992f.js","./chunks/paths-6cd3a76e.js","./chunks/stores-a829ab84.js","./chunks/index-24cc50d7.js","./assets/Article-41709cbb.css"],import.meta.url),()=>w(()=>import("./chunks/17-a8b3d8a8.js"),["./chunks/17-a8b3d8a8.js","./components/pages/lektion1/articles/article3/_page.svelte-ddf02348.js","./chunks/index-e44d5234.js","./chunks/Article-ce89992f.js","./chunks/paths-6cd3a76e.js","./chunks/stores-a829ab84.js","./chunks/index-24cc50d7.js","./assets/Article-41709cbb.css"],import.meta.url),()=>w(()=>import("./chunks/18-d7f8d1d0.js"),["./chunks/18-d7f8d1d0.js","./components/pages/lektion1/movies/_page.svelte-61404559.js","./chunks/index-e44d5234.js","./chunks/index-f31a4d66.js","./chunks/index-24cc50d7.js","./chunks/index-59b09acd.js","./assets/_page-7c0428e7.css"],import.meta.url),()=>w(()=>import("./chunks/19-80d052cc.js"),["./chunks/19-80d052cc.js","./components/pages/lektion1/phone-number/_page.svelte-af84d9cd.js","./chunks/index-e44d5234.js","./assets/_page-2bccbac2.css"],import.meta.url),()=>w(()=>import("./chunks/20-bfd801f6.js"),["./chunks/20-bfd801f6.js","./components/pages/lektion1/size-dropdown/_page.svelte-8ddfd8fa.js","./chunks/index-e44d5234.js","./assets/_page-10a61069.css"],import.meta.url),()=>w(()=>import("./chunks/21-2af6afaa.js"),["./chunks/21-2af6afaa.js","./components/pages/lektion10/_page.svelte-63a4ddf9.js","./chunks/index-e44d5234.js","./assets/_page-6adcfa34.css"],import.meta.url),()=>w(()=>import("./chunks/22-96203ea2.js"),["./chunks/22-96203ea2.js","./components/pages/lektion2/_page.svelte-7b71a0b6.js","./chunks/index-e44d5234.js","./assets/_page-6e3ec055.css"],import.meta.url),()=>w(()=>import("./chunks/23-ff3802aa.js"),["./chunks/23-ff3802aa.js","./components/pages/lektion2/recept/_page.svelte-82f534b3.js","./chunks/index-e44d5234.js","./assets/_page-3343c5dd.css"],import.meta.url),()=>w(()=>import("./chunks/24-7491c3c3.js"),["./chunks/24-7491c3c3.js","./components/pages/lektion3/_page.svelte-df833bb7.js","./chunks/index-e44d5234.js","./assets/_page-ae0c8c70.css"],import.meta.url),()=>w(()=>import("./chunks/25-7977bfdd.js"),["./chunks/25-7977bfdd.js","./components/pages/lektion3/cheat-sheet/_page.svelte-628234df.js","./chunks/index-e44d5234.js"],import.meta.url),()=>w(()=>import("./chunks/26-b3be591b.js"),["./chunks/26-b3be591b.js","./components/pages/lektion3/cheat-sheet-svelte/_page.svelte-dccfc7a1.js","./chunks/index-e44d5234.js","./assets/_page-fb2eda44.css"],import.meta.url),()=>w(()=>import("./chunks/27-d43518e9.js"),["./chunks/27-d43518e9.js","./components/pages/lektion3/cheat-sheet-svelte-component/_page.svelte-6060d512.js","./chunks/index-e44d5234.js","./assets/_page-5a61ecd8.css"],import.meta.url),()=>w(()=>import("./chunks/28-2fcf5902.js"),["./chunks/28-2fcf5902.js","./components/pages/lektion3/exercise/_page.svelte-ab8845dc.js","./chunks/index-e44d5234.js","./chunks/index-59b09acd.js","./assets/_page-df9d6c8f.css"],import.meta.url),()=>w(()=>import("./chunks/29-27d27924.js"),["./chunks/29-27d27924.js","./components/pages/lektion3/specificity/_page.svelte-642dc71c.js","./chunks/index-e44d5234.js","./assets/_page-f3a8f37f.css"],import.meta.url),()=>w(()=>import("./chunks/30-42884b36.js"),["./chunks/30-42884b36.js","./components/pages/lektion4/_page.svelte-26686486.js","./chunks/index-e44d5234.js","./assets/_page-720a1ba8.css"],import.meta.url),()=>w(()=>import("./chunks/31-532d79bb.js"),["./chunks/31-532d79bb.js","./components/pages/lektion4/exercise/_page.svelte-d6fa7721.js","./chunks/index-e44d5234.js","./assets/_page-58d32bd0.css"],import.meta.url),()=>w(()=>import("./chunks/32-319f0d93.js"),["./chunks/32-319f0d93.js","./components/pages/lektion5/_page.svelte-78b02420.js","./chunks/index-e44d5234.js","./assets/_page-1bf98ba9.css"],import.meta.url),()=>w(()=>import("./chunks/33-eb49315c.js"),["./chunks/33-eb49315c.js","./components/pages/lektion5/exercise/_page.svelte-d86fd5e4.js","./chunks/index-e44d5234.js","./assets/_page-2a12abb0.css"],import.meta.url),()=>w(()=>import("./chunks/34-43609f8c.js"),["./chunks/34-43609f8c.js","./components/pages/lektion5/first-exercise-remake/_page.svelte-73511e82.js","./chunks/index-e44d5234.js","./assets/_page-c32d7b9a.css"],import.meta.url),()=>w(()=>import("./chunks/35-37580a7c.js"),["./chunks/35-37580a7c.js","./components/pages/lektion5/flexbox-more/_page.svelte-88c1c742.js","./chunks/index-e44d5234.js","./assets/_page-b64b38fd.css"],import.meta.url),()=>w(()=>import("./chunks/36-6d22db05.js"),["./chunks/36-6d22db05.js","./components/pages/lektion5/flexbox-more-mobile-first/_page.svelte-47847278.js","./chunks/index-e44d5234.js","./assets/_page-3ee6c1e4.css"],import.meta.url),()=>w(()=>import("./chunks/37-d5f07e2c.js"),["./chunks/37-d5f07e2c.js","./components/pages/lektion6/_page.svelte-8eb78e4f.js","./chunks/index-e44d5234.js"],import.meta.url),()=>w(()=>import("./chunks/38-6298d8be.js"),["./chunks/38-6298d8be.js","./components/pages/lektion7/_page.svelte-4ff2a04f.js","./chunks/index-e44d5234.js"],import.meta.url),()=>w(()=>import("./chunks/39-76bd7a99.js"),["./chunks/39-76bd7a99.js","./components/pages/lektion8/_page.svelte-1faca273.js","./chunks/index-e44d5234.js"],import.meta.url),()=>w(()=>import("./chunks/40-466588e9.js"),["./chunks/40-466588e9.js","./components/pages/lektion8/exercise/_page.svelte-8e394cd4.js","./chunks/index-e44d5234.js","./assets/_page-a69b80c1.css"],import.meta.url),()=>w(()=>import("./chunks/41-11ef7005.js"),["./chunks/41-11ef7005.js","./components/pages/lektion9/_page.svx-9d4c2179.js","./chunks/index-e44d5234.js","./chunks/index-24cc50d7.js","./assets/index-481bf672.css"],import.meta.url),()=>w(()=>import("./chunks/42-e34b732c.js"),["./chunks/42-e34b732c.js","./components/pages/lektion9/hemsida/_page.svelte-7980b680.js","./chunks/index-e44d5234.js","./chunks/paths-6cd3a76e.js","./assets/index-481bf672.css"],import.meta.url),()=>w(()=>import("./chunks/43-a9ca4b93.js"),["./chunks/43-a9ca4b93.js","./chunks/_page-e9792c7d.js","./chunks/preload-helper-b21cceae.js","./components/pages/svelte-course/_page.svx-9385144c.js","./chunks/index-e44d5234.js","./assets/Blockquote-4571d5f1.css"],import.meta.url),()=>w(()=>import("./chunks/44-47ae78ae.js"),["./chunks/44-47ae78ae.js","./components/pages/threlte/_page.svelte-e7896e5e.js","./chunks/index-e44d5234.js","./chunks/useTexture-b4b32c69.js","./chunks/index-24cc50d7.js","./assets/useTexture-ca7f1f30.css","./chunks/index-f31a4d66.js","./assets/_page-ae65aa5a.css"],import.meta.url)],Ft=[],Bt={"/":[10],"/about":[11],"/contact":[12],"/lektion10":[21],"/lektion1":[13,[2]],"/lektion1/articles":[14,[2,3]],"/lektion1/articles/article1":[15,[2,3]],"/lektion1/articles/article2":[16,[2,3]],"/lektion1/articles/article3":[17,[2,3]],"/lektion1/movies":[18,[2]],"/lektion1/phone-number":[19,[2]],"/lektion1/size-dropdown":[20,[2]],"/lektion2":[22,[4]],"/lektion2/recept":[23,[4]],"/lektion3":[24,[5]],"/lektion3/cheat-sheet-svelte-component":[27,[5]],"/lektion3/cheat-sheet-svelte":[26,[5]],"/lektion3/cheat-sheet":[25,[5]],"/lektion3/exercise":[28,[5]],"/lektion3/specificity":[29,[5]],"/lektion4":[30,[6]],"/lektion4/exercise":[31,[6]],"/lektion5":[32,[7]],"/lektion5/exercise":[33,[7]],"/lektion5/first-exercise-remake":[34,[7]],"/lektion5/flexbox-more-mobile-first":[36,[7]],"/lektion5/flexbox-more":[35,[7]],"/lektion6":[37],"/lektion7":[38],"/lektion8":[39,[8]],"/lektion8/exercise":[40,[8]],"/lektion9":[41,[9]],"/lektion9/hemsida":[42,[9]],"/svelte-course":[43],"/threlte":[44]},zt={handleError:({error:n})=>{console.error(n)}};class Ae{constructor(e,r){this.status=e,typeof r=="string"?this.body={message:r}:r?this.body=r:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,r){this.status=e,this.location=r}}async function Jt(n){for(const e in n)if(typeof n[e]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([r,o])=>[r,await o])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Gt=-1,Kt=-2,Mt=-3,Wt=-4,Ht=-5,Yt=-6;function Xt(n){if(typeof n=="number")return o(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,r=Array(e.length);function o(a,u=!1){if(a===Gt)return;if(a===Mt)return NaN;if(a===Wt)return 1/0;if(a===Ht)return-1/0;if(a===Yt)return-0;if(u)throw new Error("Invalid input");if(a in r)return r[a];const t=e[a];if(!t||typeof t!="object")r[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":r[a]=new Date(t[1]);break;case"Set":const s=new Set;r[a]=s;for(let y=1;y<t.length;y+=1)s.add(o(t[y]));break;case"Map":const f=new Map;r[a]=f;for(let y=1;y<t.length;y+=2)f.set(o(t[y]),o(t[y+1]));break;case"RegExp":r[a]=new RegExp(t[1],t[2]);break;case"Object":r[a]=Object(t[1]);break;case"BigInt":r[a]=BigInt(t[1]);break;case"null":const m=Object.create(null);r[a]=m;for(let y=1;y<t.length;y+=2)m[t[y]]=o(t[y+1]);break}else{const l=new Array(t.length);r[a]=l;for(let s=0;s<t.length;s+=1){const f=t[s];f!==Kt&&(l[s]=o(f))}}else{const l={};r[a]=l;for(const s in t){const f=t[s];l[s]=o(f)}}return r[a]}return o(0)}const Ye="sveltekit:scroll",X="sveltekit:index",_e=Ot(he,Ft,Bt,Ct),Pe=he[0],Te=he[1];Pe();Te();let ie={};try{ie=JSON.parse(sessionStorage[Ye])}catch{}function Re(n){ie[n]=Le()}function Zt({target:n,base:e,trailing_slash:r}){const o=[];let a=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,s=!1,f=!0,m=!1,y=!1,F=!1,K=!1,b,L=history.state?.[X];L||(L=Date.now(),history.replaceState({...history.state,[X]:L},"",location.href));const M=ie[L];M&&(history.scrollRestoration="manual",scrollTo(M.x,M.y));let B,se,x;async function le(){x=x||Promise.resolve(),await x,x=null;const i=new URL(location.href),_=ve(i,!0);a=null,await Ve(_,i,[])}async function te(i,{noScroll:_=!1,replaceState:p=!1,keepFocus:c=!1,state:d={},invalidateAll:h=!1},g,v){return typeof i=="string"&&(i=new URL(i,ze(document))),ye({url:i,scroll:_?Le():null,keepfocus:c,redirect_chain:g,details:{state:d,replaceState:p},nav_token:v,accepted:()=>{h&&(K=!0)},blocked:()=>{},type:"goto"})}async function De(i){const _=ve(i,!1);if(!_)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${i}`);return a={id:_.id,promise:Ne(_).then(p=>(p.type==="loaded"&&p.state.error&&(a=null),p))},a.promise}async function Ve(i,_,p,c,d={},h){se=d;let g=i&&await Ne(i);if(g||(g=await Fe(_,{id:null},ae(new Error(`Not found: ${_.pathname}`),{url:_,params:{},route:{id:null}}),404)),_=i?.url||_,se!==d)return!1;if(g.type==="redirect")if(p.length>10||p.includes(_.pathname))g=await ce({status:500,error:ae(new Error("Redirect loop"),{url:_,params:{},route:{id:null}}),url:_,route:{id:null}});else return te(new URL(g.location,_).href,{},[...p,_.pathname],d),!1;else g.props?.page?.status>=400&&await Z.updated.check()&&await fe(_);if(o.length=0,K=!1,m=!0,c&&c.details){const{details:v}=c,$=v.replaceState?0:1;v.state[X]=L+=$,history[v.replaceState?"replaceState":"pushState"](v.state,"",_)}if(a=null,s){t=g.state,g.props.page&&(g.props.page.url=_);const v=de();b.$set(g.props),v()}else Se(g);if(c){const{scroll:v,keepfocus:$}=c;if($||Oe(),await ue(),f){const E=_.hash&&document.getElementById(_.hash.slice(1));v?scrollTo(v.x,v.y):E?E.scrollIntoView():scrollTo(0,0)}}else await ue();f=!0,g.props.page&&(B=g.props.page),h&&h(),m=!1}function Se(i){t=i.state;const _=document.querySelector("style[data-sveltekit]");_&&_.remove(),B=i.props.page;const p=de();b=new qt({target:n,props:{...i.props,stores:Z},hydrate:!0}),p();const c={from:null,to:pe("to",{params:t.params,route:{id:t.route?.id??null},url:new URL(location.href)}),willUnload:!1,type:"enter"};u.after_navigate.forEach(d=>d(c)),s=!0}async function re({url:i,params:_,branch:p,status:c,error:d,route:h,form:g}){const v=p.filter(Boolean),$={type:"loaded",state:{url:i,params:_,branch:p,error:d,route:h},props:{components:v.map(R=>R.node.component)}};g!==void 0&&($.props.form=g);let E={},O=!B;for(let R=0;R<v.length;R+=1){const A=v[R];E={...E,...A.data},(O||!t.branch.some(z=>z===A))&&($.props[`data_${R}`]=E,O=O||Object.keys(A.data??{}).length>0)}if(O||(O=Object.keys(B.data).length!==Object.keys(E).length),!t.url||i.href!==t.url.href||t.error!==d||g!==void 0||O){$.props.page={error:d,params:_,route:h,status:c,url:i,form:g,data:O?E:B.data},Object.defineProperty($.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const R=(A,z)=>{Object.defineProperty($.props.page,A,{get:()=>{throw new Error(`$page.${A} has been replaced by $page.url.${z}`)}})};R("origin","origin"),R("path","pathname"),R("query","searchParams")}return $}async function ge({loader:i,parent:_,url:p,params:c,route:d,server_data_node:h}){let g=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},$=await i();if($.shared?.load){let E=function(...k){for(const R of k){const{href:A}=new URL(R,p);v.dependencies.add(A)}};const O={route:{get id(){return v.route=!0,d.id}},params:new Proxy(c,{get:(k,R)=>(v.params.add(R),k[R])}),data:h?.data??null,url:dt(p,()=>{v.url=!0}),async fetch(k,R){let A;k instanceof Request?(A=k.url,R={body:k.method==="GET"||k.method==="HEAD"?void 0:await k.blob(),cache:k.cache,credentials:k.credentials,headers:k.headers,integrity:k.integrity,keepalive:k.keepalive,method:k.method,mode:k.mode,redirect:k.redirect,referrer:k.referrer,referrerPolicy:k.referrerPolicy,signal:k.signal,...R}):A=k;const z=new URL(A,p).href;return E(z),s?yt(A,z,R):vt(A,R)},setHeaders:()=>{},depends:E,parent(){return v.parent=!0,_()}};Object.defineProperties(O,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),g=await $.shared.load.call(null,O)??null,g=g?await Jt(g):null}return{node:$,loader:i,server:h,shared:$.shared?.load?{type:"data",data:g,uses:v}:null,data:g??h?.data??null}}function je(i,_,p,c,d){if(K)return!0;if(!c)return!1;if(c.parent&&i||c.route&&_||c.url&&p)return!0;for(const h of c.params)if(d[h]!==t.params[h])return!0;for(const h of c.dependencies)if(o.some(g=>g(new URL(h))))return!0;return!1}function we(i,_){return i?.type==="data"?{type:"data",data:i.data,uses:{dependencies:new Set(i.uses.dependencies??[]),params:new Set(i.uses.params??[]),parent:!!i.uses.parent,route:!!i.uses.route,url:!!i.uses.url}}:i?.type==="skip"?_??null:null}async function Ne({id:i,invalidating:_,url:p,params:c,route:d}){if(a?.id===i)return a.promise;const{errors:h,layouts:g,leaf:v}=d,$=[...g,v];h.forEach(I=>I?.().catch(()=>{})),$.forEach(I=>I?.[1]().catch(()=>{}));let E=null;const O=t.url?i!==t.url.pathname+t.url.search:!1,k=t.route?i!==t.route.id:!1,R=$.reduce((I,V,G)=>{const S=t.branch[G],ee=!!V?.[0]&&(S?.loader!==V[1]||je(I.some(Boolean),k,O,S.server?.uses,c));return I.push(ee),I},[]);if(R.some(Boolean)){try{E=await We(p,R)}catch(I){return ce({status:500,error:ae(I,{url:p,params:c,route:{id:d.id}}),url:p,route:d})}if(E.type==="redirect")return E}const A=E?.nodes;let z=!1;const be=$.map(async(I,V)=>{if(!I)return;const G=t.branch[V],S=A?.[V];if((!S||S.type==="skip")&&I[1]===G?.loader&&!je(z,k,O,G.shared?.uses,c))return G;if(z=!0,S?.type==="error")throw S;return ge({loader:I[1],url:p,params:c,route:d,parent:async()=>{const Be={};for(let Ee=0;Ee<V;Ee+=1)Object.assign(Be,(await be[Ee])?.data);return Be},server_data_node:we(S===void 0&&I[0]?{type:"skip"}:S??null,G?.server)})});for(const I of be)I.catch(()=>{});const ne=[];for(let I=0;I<$.length;I+=1)if($[I])try{ne.push(await be[I])}catch(V){if(V instanceof Me)return{type:"redirect",location:V.location};let G=500,S;A?.includes(V)?(G=V.status??G,S=V.error):V instanceof Ae?(G=V.status,S=V.body):S=ae(V,{params:c,url:p,route:{id:d.id}});const ee=await Ue(I,ne,h);return ee?await re({url:p,params:c,branch:ne.slice(0,ee.idx).concat(ee.node),status:G,error:S,route:d}):await Fe(p,{id:d.id},S,G)}else ne.push(void 0);return await re({url:p,params:c,branch:ne,status:200,error:null,route:d,form:_?void 0:null})}async function Ue(i,_,p){for(;i--;)if(p[i]){let c=i;for(;!_[c];)c-=1;try{return{idx:c+1,node:{node:await p[i](),loader:p[i],data:{},server:null,shared:null}}}catch{continue}}}async function ce({status:i,error:_,url:p,route:c}){const d={},h=await Pe();let g=null;if(h.server)try{const E=await We(p,[!0]);if(E.type!=="data"||E.nodes[0]&&E.nodes[0].type!=="data")throw 0;g=E.nodes[0]??null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||l)&&await fe(p)}const v=await ge({loader:Pe,url:p,params:d,route:c,parent:()=>Promise.resolve({}),server_data_node:we(g)}),$={node:await Te(),loader:Te,shared:null,server:null,data:null};return await re({url:p,params:d,branch:[v,$],status:i,error:_,route:null})}function ve(i,_){if(qe(i))return;const p=ut(i.pathname.slice(e.length)||"/");for(const c of _e){const d=c.exec(p);if(d){const h=new URL(i.origin+ft(i.pathname,r)+i.search+i.hash);return{id:h.pathname+h.search,invalidating:_,route:c,params:_t(d),url:h}}}}function qe(i){return i.origin!==location.origin||!i.pathname.startsWith(e)}function Ce({url:i,type:_,intent:p,delta:c}){let d=!1;const h={from:pe("from",{params:t.params,route:{id:t.route?.id??null},url:t.url}),to:pe("to",{params:p?.params??null,route:{id:p?.route?.id??null},url:i}),willUnload:!p,type:_};c!==void 0&&(h.delta=c);const g={...h,cancel:()=>{d=!0}};return y||u.before_navigate.forEach(v=>v(g)),d?null:h}async function ye({url:i,scroll:_,keepfocus:p,redirect_chain:c,details:d,type:h,delta:g,nav_token:v,accepted:$,blocked:E}){const O=ve(i,!1),k=Ce({url:i,type:h,delta:g,intent:O});if(!k){E();return}Re(L),$(),y=!0,s&&Z.navigating.set(k),await Ve(O,i,c,{scroll:_,keepfocus:p,details:d},v,()=>{y=!1,u.after_navigate.forEach(R=>R(k)),Z.navigating.set(null)})}async function Fe(i,_,p,c){return i.origin===location.origin&&i.pathname===location.pathname&&!l?await ce({status:c,error:p,url:i,route:_}):await fe(i)}function fe(i){return location.href=i.href,new Promise(()=>{})}return{after_navigate:i=>{Ie(()=>(u.after_navigate.push(i),()=>{const _=u.after_navigate.indexOf(i);u.after_navigate.splice(_,1)}))},before_navigate:i=>{Ie(()=>(u.before_navigate.push(i),()=>{const _=u.before_navigate.indexOf(i);u.before_navigate.splice(_,1)}))},disable_scroll_handling:()=>{(m||!s)&&(f=!1)},goto:(i,_={})=>{if("keepfocus"in _&&!("keepFocus"in _))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in _&&!("noScroll"in _))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return te(i,_,[])},invalidate:i=>{if(i===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof i=="function")o.push(i);else{const{href:_}=new URL(i,location.href);o.push(p=>p.href===_)}return le()},invalidateAll:()=>(K=!0,le()),prefetch:async i=>{const _=new URL(i,ze(document));await De(_)},prefetch_routes:async i=>{const p=(i?_e.filter(c=>i.some(d=>c.exec(d))):_e).map(c=>Promise.all([...c.layouts,c.leaf].map(d=>d?.[1]())));await Promise.all(p)},apply_action:async i=>{if(i.type==="error"){const _=new URL(location.href),{branch:p,route:c}=t;if(!c)return;const d=await Ue(t.branch.length,p,c.errors);if(d){const h=await re({url:_,params:t.params,branch:p.slice(0,d.idx).concat(d.node),status:500,error:i.error,route:c});t=h.state;const g=de();b.$set(h.props),g(),ue().then(Oe)}}else if(i.type==="redirect")te(i.location,{invalidateAll:!0},[]);else{const _={form:i.data,page:{...B,form:i.data,status:i.status}},p=de();b.$set(_),p(),i.type==="success"&&ue().then(Oe)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",c=>{let d=!1;if(!y){const h={from:pe("from",{params:t.params,route:{id:t.route?.id??null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>d=!0};u.before_navigate.forEach(g=>g(h))}d?(c.preventDefault(),c.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(L);try{sessionStorage[Ye]=JSON.stringify(ie)}catch{}}});const i=c=>{const{url:d,options:h,has:g}=Je(c);if(d&&h.prefetch&&!qe(d)){if(h.reload||g.rel_external||g.target||g.download)return;De(d)}};let _;const p=c=>{clearTimeout(_),_=setTimeout(()=>{c.target?.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",i),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",i),addEventListener("click",c=>{if(c.button||c.which!==1||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.defaultPrevented)return;const{a:d,url:h,options:g,has:v}=Je(c);if(!d||!h||!(d instanceof SVGAElement)&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:")||v.download)return;if(g.reload||v.rel_external||v.target){Ce({url:h,type:"link"})||c.preventDefault(),y=!0;return}const[E,O]=h.href.split("#");if(O!==void 0&&E===location.href.split("#")[0]){F=!0,Re(L),t.url=h,Z.page.set({...B,url:h}),Z.page.notify();return}ye({url:h,scroll:g.noscroll?Le():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>c.preventDefault(),blocked:()=>c.preventDefault(),type:"link"})}),addEventListener("popstate",c=>{if(c.state){if(c.state[X]===L)return;const d=c.state[X]-L;ye({url:new URL(location.href),scroll:ie[c.state[X]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{L=c.state[X]},blocked:()=>{history.go(-d)},type:"popstate",delta:d})}}),addEventListener("hashchange",()=>{F&&(F=!1,history.replaceState({...history.state,[X]:++L},"",location.href))});for(const c of document.querySelectorAll("link"))c.rel==="icon"&&(c.href=c.href);addEventListener("pageshow",c=>{c.persisted&&Z.navigating.set(null)})},_hydrate:async({status:i,error:_,node_ids:p,params:c,route:d,data:h,form:g})=>{l=!0;const v=new URL(location.href);let $;try{const E=p.map(async(O,k)=>{const R=h[k];return ge({loader:he[O],url:v,params:c,route:d,parent:async()=>{const A={};for(let z=0;z<k;z+=1)Object.assign(A,(await E[z]).data);return A},server_data_node:we(R)})});$=await re({url:v,params:c,branch:await Promise.all(E),status:i,error:_,form:g,route:_e.find(({id:O})=>O===d.id)??null})}catch(E){if(E instanceof Me){await fe(new URL(E.location,location.href));return}$=await ce({status:E instanceof Ae?E.status:500,error:ae(E,{url:v,params:c,route:d}),url:v,route:d})}Se($)}}}async function We(n,e){const r=new URL(n);r.pathname=gt(n.pathname);const o=await me(r.href,{headers:{"x-sveltekit-invalidated":e.map(u=>u?"1":"").join(",")}}),a=await o.json();if(!o.ok)throw new Error(a);return a.nodes?.forEach(u=>{u?.type==="data"&&(u.data=Xt(u.data),u.uses={dependencies:new Set(u.uses.dependencies??[]),params:new Set(u.uses.params??[]),parent:!!u.uses.parent,route:!!u.uses.route,url:!!u.uses.url})}),a}function ae(n,e){return n instanceof Ae?n.body:zt.handleError({error:n,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}const Qt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function pe(n,e){for(const r of Qt)Object.defineProperty(e,r,{get(){throw new Error(`The navigation shape changed - ${n}.${r} should now be ${n}.url.${r}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function de(){return()=>{}}function Oe(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,r=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{getSelection()?.removeAllRanges()}),r!==null?e.setAttribute("tabindex",r):e.removeAttribute("tabindex")}}async function nr({env:n,hydrate:e,paths:r,target:o,trailing_slash:a}){ct(r);const u=Zt({target:o,base:r.base,trailing_slash:a});lt({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{nr as start};
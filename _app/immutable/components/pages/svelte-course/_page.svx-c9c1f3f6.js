import{S as k,i as N,s as P,F as C,I as F,J as I,K as J,f as c,t as i,T as _,w as m,x as S,y as d,a0 as K,a1 as y,z as g,a2 as p,e as u,b as j,g as q,d as z,N as M,h as B,v}from"../../../chunks/index-2415c921.js";/* empty css                                                               */function T(f){let e;const s=f[4].default,n=C(s,f,f[3],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,o){n&&n.m(t,o),e=!0},p(t,[o]){n&&n.p&&(!e||o&8)&&F(n,s,t,t[3],e?J(s,t[3],o,null):I(t[3]),null)},i(t){e||(c(n,t),e=!0)},o(t){i(n,t),e=!1},d(t){n&&n.d(t)}}}function $(f,e,s){let{$$slots:n={},$$scope:t}=e,{title:o}=e,{author:a}=e,{date:r}=e;return f.$$set=l=>{"title"in l&&s(0,o=l.title),"author"in l&&s(1,a=l.author),"date"in l&&s(2,r=l.date),"$$scope"in l&&s(3,t=l.$$scope)},[o,a,r,t,n]}class A extends k{constructor(e){super(),N(this,e,$,T,P,{title:0,author:1,date:2})}}function b(f,e,s){const n=f.slice();return n[4]=e[s],n}function w(f){let e,s,n;var t=f[4].newbody;function o(a){return{}}return t&&(e=v(t,o())),{c(){e&&m(e.$$.fragment),s=u()},l(a){e&&S(e.$$.fragment,a),s=u()},m(a,r){e&&d(e,a,r),j(a,s,r),n=!0},p(a,r){if(t!==(t=a[4].newbody)){if(e){q();const l=e;i(l.$$.fragment,1,0,()=>{g(l,1)}),z()}t?(e=v(t,o()),m(e.$$.fragment),c(e.$$.fragment,1),d(e,s.parentNode,s)):e=null}},i(a){n||(e&&c(e.$$.fragment,a),n=!0)},o(a){e&&i(e.$$.fragment,a),n=!1},d(a){a&&B(s),e&&g(e,a)}}}function D(f){let e,s,n=f[0].myPages,t=[];for(let a=0;a<n.length;a+=1)t[a]=w(b(f,n,a));const o=a=>i(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=u()},l(a){for(let r=0;r<t.length;r+=1)t[r].l(a);e=u()},m(a,r){for(let l=0;l<t.length;l+=1)t[l].m(a,r);j(a,e,r),s=!0},p(a,r){if(r&1){n=a[0].myPages;let l;for(l=0;l<n.length;l+=1){const h=b(a,n,l);t[l]?(t[l].p(h,r),c(t[l],1)):(t[l]=w(h),t[l].c(),c(t[l],1),t[l].m(e.parentNode,e))}for(q(),l=n.length;l<t.length;l+=1)o(l);z()}},i(a){if(!s){for(let r=0;r<n.length;r+=1)c(t[r]);s=!0}},o(a){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)i(t[r]);s=!1},d(a){M(t,a),a&&B(e)}}}function E(f){let e,s;const n=[f[1],x];let t={$$slots:{default:[D]},$$scope:{ctx:f}};for(let o=0;o<n.length;o+=1)t=_(t,n[o]);return e=new A({props:t}),{c(){m(e.$$.fragment)},l(o){S(e.$$.fragment,o)},m(o,a){d(e,o,a),s=!0},p(o,[a]){const r=a&2?K(n,[a&2&&y(o[1]),a&0&&y(x)]):{};a&129&&(r.$$scope={dirty:a,ctx:o}),e.$set(r)},i(o){s||(c(e.$$.fragment,o),s=!0)},o(o){i(e.$$.fragment,o),s=!1},d(o){g(e,o)}}}const x={layout:"mainpage"};function G(f,e,s){let{data:n}=e;return f.$$set=t=>{s(1,e=_(_({},e),p(t))),"data"in t&&s(0,n=t.data)},e=p(e),[n,e]}class O extends k{constructor(e){super(),N(this,e,G,E,P,{data:0})}}export{O as default,x as metadata};

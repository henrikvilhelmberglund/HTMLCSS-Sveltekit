function g(){}const X=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function K(){return Object.create(null)}function x(t){t.forEach(Y)}function T(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Ft(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function pt(t){return Object.keys(t).length===0}function Z(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t){let e;return Z(t,n=>e=n)(),e}function It(t,e,n){t.$$.on_destroy.push(Z(e,n))}function Wt(t,e,n,i){if(t){const s=tt(t,e,n,i);return t[0](s)}}function tt(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)c[a]=e.dirty[a]|s[a];return c}return e.dirty|s}return e.dirty}function Kt(t,e,n,i,s,c){if(s){const r=tt(e,n,i,c);t.p(r,s)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ut(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Vt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Xt(t){return t??""}function Yt(t,e,n){return t.set(n),e}function Zt(t){return t&&T(t.destroy)?t.destroy:g}const et=typeof window<"u";let nt=et?()=>window.performance.now():()=>Date.now(),G=et?t=>requestAnimationFrame(t):g;const $=new Set;function it(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&G(it)}function st(t){let e;return $.size===0&&G(it),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let O=!1;function yt(){O=!0}function gt(){O=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:$t(1,s,_=>e[n[_]].claim_order,l))-1;i[o]=n[f]+1;const u=f+1;n[u]=o,s=Math.max(u,s)}const c=[],r=[];let a=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);a>=o;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);c.reverse(),r.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<r.length;o++){for(;l<c.length&&r[o].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(r[o],f)}}function bt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=I("style");return wt(rt(t),e),e.sheet}function wt(t,e){return bt(t.head||t,e),e.sheet}function Et(t,e){if(O){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){t.insertBefore(e,n||null)}function Nt(t,e,n){O&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function ee(){return W(" ")}function ne(){return W("")}function ie(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function se(t){return function(e){return e.preventDefault(),t.call(this,e)}}function re(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function oe(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Tt(t,i,e[i])}function ce(t){return t===""?null:+t}function St(t){return Array.from(t.childNodes)}function ot(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,s=!1){ot(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Ct(t,e,n,i){return ct(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||c.push(a.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function le(t,e,n){return Ct(t,e,n,I)}function jt(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function ae(t){return jt(t," ")}function Q(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ue(t,e){const n=Q(t,"HTML_TAG_START",0),i=Q(t,"HTML_TAG_END",n);if(n===i)return new U(void 0,e);ot(t);const s=t.splice(n,i-n+1);k(s[0]),k(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new U(c,e)}function fe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _e(t,e){t.value=e??""}function de(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function he(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function me(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function pe(t,e,n){t.classList[n?"add":"remove"](e)}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ye(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Dt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=At(n.nodeName):this.e=I(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(k)}}class U extends Dt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}}function ge(t,e){return new t(e)}const M=new Map;let P=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Mt(t,e){const n={stylesheet:vt(e),rules:{}};return M.set(t,n),n}function at(t,e,n,i,s,c,r,a=0){const o=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=o){const S=e+(n-e)*c(m);l+=m*100+`%{${r(S,1-S)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Ht(f)}_${a}`,_=rt(t),{stylesheet:d,rules:h}=M.get(_)||Mt(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${i}ms linear ${s}ms 1 both`,P+=1,u}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),P-=s,P||Pt())}function Pt(){G(()=>{P||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&k(e)}),M.clear())})}let N;function E(t){N=t}function b(){if(!N)throw new Error("Function called outside component initialization");return N}function $e(t){b().$$.on_mount.push(t)}function xe(t){b().$$.after_update.push(t)}function be(t){b().$$.on_destroy.push(t)}function ve(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=lt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function we(t,e){return b().$$.context.set(t,e),e}function Ee(t){return b().$$.context.get(t)}function ke(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],V=[],D=[],z=[],ut=Promise.resolve();let F=!1;function ft(){F||(F=!0,ut.then(_t))}function Ne(){return ft(),ut}function A(t){D.push(t)}function Ae(t){z.push(t)}const q=new Set;let j=0;function _t(){const t=N;do{for(;j<w.length;){const e=w[j];j++,E(e),Lt(e.$$)}for(E(null),w.length=0,j=0;V.length;)V.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];q.has(n)||(q.add(n),n())}D.length=0}while(w.length);for(;z.length;)z.pop()();F=!1,q.clear(),E(t)}function Lt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let v;function dt(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function L(t,e,n){t.dispatchEvent(lt(`${e?"intro":"outro"}${n}`))}const H=new Set;let y;function Te(){y={r:0,c:[],p:y}}function Se(){y.r||x(y.c),y=y.p}function Ot(t,e){t&&t.i&&(H.delete(t),t.i(e))}function Ce(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),y.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ht={duration:0};function je(t,e,n){let i=e(t,n),s=!1,c,r,a=0;function o(){c&&B(t,c)}function l(){const{delay:u=0,duration:_=300,easing:d=X,tick:h=g,css:p}=i||ht;p&&(c=at(t,0,1,_,u,d,p,a++)),h(0,1);const m=nt()+u,S=m+_;r&&r.abort(),s=!0,A(()=>L(t,!0,"start")),r=st(R=>{if(s){if(R>=S)return h(1,0),L(t,!0,"end"),o(),s=!1;if(R>=m){const J=d((R-m)/_);h(J,1-J)}}return s})}let f=!1;return{start(){f||(f=!0,B(t),T(i)?(i=i(),dt().then(l)):l())},invalidate(){f=!1},end(){s&&(o(),s=!1)}}}function De(t,e,n){let i=e(t,n),s=!0,c;const r=y;r.r+=1;function a(){const{delay:o=0,duration:l=300,easing:f=X,tick:u=g,css:_}=i||ht;_&&(c=at(t,1,0,l,o,f,_));const d=nt()+o,h=d+l;A(()=>L(t,!1,"start")),st(p=>{if(s){if(p>=h)return u(0,1),L(t,!1,"end"),--r.r||x(r.c),!1;if(p>=d){const m=f((p-d)/l);u(1-m,m)}}return s})}return T(i)?dt().then(()=>{i=i(),a()}):a(),{end(o){o&&i.tick&&i.tick(1,0),s&&(c&&B(t,c),s=!1)}}}function He(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],a=e[c];if(a){for(const o in r)o in a||(i[o]=1);for(const o in a)s[o]||(n[o]=a[o],s[o]=1);t[c]=a}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Me(t){return typeof t=="object"&&t!==null?t:{}}function Pe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Le(t){t&&t.c()}function Oe(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||A(()=>{const r=t.$$.on_mount.map(Y).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...r):x(r),t.$$.on_mount=[]}),c.forEach(A)}function qt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(w.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Re(t,e,n,i,s,c,r,a=[-1]){const o=N;E(t);const l=t.$$={fragment:null,ctx:[],props:c,update:g,not_equal:s,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:K(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&s(l.ctx[u],l.ctx[u]=h)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](h),f&&Bt(t,u)),_}):[],l.update(),f=!0,x(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){yt();const u=St(e.target);l.fragment&&l.fragment.l(u),u.forEach(k)}else l.fragment&&l.fragment.c();e.intro&&Ot(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),gt(),_t()}E(o)}class qe{$destroy(){qt(this,1),this.$destroy=g}$on(e,n){if(!T(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{De as $,Ne as A,g as B,Z as C,x as D,T as E,ye as F,It as G,Wt as H,Et as I,Kt as J,Qt as K,Jt as L,Ft as M,te as N,ie as O,Xt as P,nt as Q,st as R,qe as S,mt as T,X as U,_e as V,ce as W,A as X,he as Y,me as Z,je as _,ee as a,Ee as a0,Vt as a1,we as a2,Ut as a3,ke as a4,se as a5,re as a6,b as a7,V as a8,Pe as a9,He as aa,Me as ab,Ae as ac,oe as ad,Zt as ae,ve as af,be as ag,pe as ah,Yt as ai,Gt as aj,U as ak,ue as al,Nt as b,ae as c,Se as d,ne as e,Ot as f,Te as g,k as h,Re as i,xe as j,I as k,le as l,St as m,Tt as n,$e as o,de as p,W as q,jt as r,zt as s,Ce as t,fe as u,ge as v,Le as w,Oe as x,Rt as y,qt as z};
import{S as F,i as J,s as K,k as f,a as C,q as S,l as h,m as E,c as B,r as D,h as d,H as R,n as s,b as O,D as c,u as G,B as T,I as Q}from"./index-dbeec53a.js";import{b as j}from"./paths-6cd3a76e.js";import{p as U}from"./stores-0337f16a.js";function V(a){let l,r,t,_,n,A,z,u,g=a[1].data.articles[a[0]].title+"",k,H,m,p=a[1].data.articles[a[0]].subtitle+"",N,I,v,b=a[1].data.articles[a[0]].text+"",q,w;return{c(){l=f("a"),r=f("article"),t=f("img"),z=C(),u=f("h2"),k=S(g),H=C(),m=f("h3"),N=S(p),I=C(),v=f("p"),q=S(b),this.h()},l(e){l=h(e,"A",{href:!0,target:!0,rel:!0});var i=E(l);r=h(i,"ARTICLE",{});var o=E(r);t=h(o,"IMG",{src:!0,alt:!0,title:!0,class:!0}),z=B(o),u=h(o,"H2",{class:!0});var L=E(u);k=D(L,g),L.forEach(d),H=B(o),m=h(o,"H3",{class:!0});var M=E(m);N=D(M,p),M.forEach(d),I=B(o),v=h(o,"P",{});var P=E(v);q=D(P,b),P.forEach(d),o.forEach(d),i.forEach(d),this.h()},h(){R(t.src,_=a[1].data.articles[a[0]].img)||s(t,"src",_),s(t,"alt",n=a[1].data.articles[a[0]].altimg),s(t,"title",A=a[1].data.articles[a[0]].altimg),s(t,"class","article-image svelte-c2z16w"),s(u,"class","svelte-c2z16w"),s(m,"class","svelte-c2z16w"),s(l,"href",w=j+"/lektion1/articles/article"+(+a[0]+1)),s(l,"target","_blank"),s(l,"rel","noreferrer")},m(e,i){O(e,l,i),c(l,r),c(r,t),c(r,z),c(r,u),c(u,k),c(r,H),c(r,m),c(m,N),c(r,I),c(r,v),c(v,q)},p(e,[i]){i&3&&!R(t.src,_=e[1].data.articles[e[0]].img)&&s(t,"src",_),i&3&&n!==(n=e[1].data.articles[e[0]].altimg)&&s(t,"alt",n),i&3&&A!==(A=e[1].data.articles[e[0]].altimg)&&s(t,"title",A),i&3&&g!==(g=e[1].data.articles[e[0]].title+"")&&G(k,g),i&3&&p!==(p=e[1].data.articles[e[0]].subtitle+"")&&G(N,p),i&3&&b!==(b=e[1].data.articles[e[0]].text+"")&&G(q,b),i&1&&w!==(w=j+"/lektion1/articles/article"+(+e[0]+1))&&s(l,"href",w)},i:T,o:T,d(e){e&&d(l)}}}function W(a,l,r){let t;Q(a,U,n=>r(1,t=n));let{articleNumber:_}=l;return a.$$set=n=>{"articleNumber"in n&&r(0,_=n.articleNumber)},[_,t]}class y extends F{constructor(l){super(),J(this,l,W,V,K,{articleNumber:0})}}export{y as A};

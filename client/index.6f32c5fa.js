import{S as t,i as e,s,y as a,j as l,e as r,a as c,t as n,c as h,b as o,g as i,d as m,f,h as d,l as v,z as u,k as g,m as p,q as D,n as w,x as E}from"./client.cc4889b0.js";import{m as j}from"./moment.91c2810d.js";function M(t,e,s){const a=t.slice();return a[1]=e[s],a}function Y(t,e,s){const a=t.slice();return a[1]=e[s],a}function x(t){let e,s,a,D,w,E,j,M,Y,x,B,N,k,y,A=t[1].title+"",H=t[1].nextDate.poster&&I(t);function R(t,e){return t[1].dateUnconfirmed?b:V}let q=R(t),F=q(t);return{c(){e=r("a"),s=r("div"),a=r("div"),D=c(),w=r("div"),H&&H.c(),E=c(),j=r("br"),M=c(),Y=r("h3"),x=n(A),B=c(),F.c(),N=c(),this.h()},l(t){e=h(t,"A",{rel:!0,href:!0,class:!0});var l=o(e);s=h(l,"DIV",{class:!0});var r=o(s);a=h(r,"DIV",{class:!0,style:!0}),o(a).forEach(i),D=m(r),w=h(r,"DIV",{class:!0});var c=o(w);H&&H.l(c),E=m(c),j=h(c,"BR",{}),M=m(c),Y=h(c,"H3",{class:!0});var n=o(Y);x=f(n,A),n.forEach(i),B=m(c),F.l(c),c.forEach(i),r.forEach(i),N=m(l),l.forEach(i),this.h()},h(){d(a,"class","image svelte-17jth3w"),v(a,"background-image","url('./"+t[1].image+"')"),d(Y,"class","svelte-17jth3w"),d(w,"class","row eventdetails svelte-17jth3w"),d(s,"class","eventchit svelte-17jth3w"),d(e,"rel","prefetch"),d(e,"href",k="events/"+t[1].slug),d(e,"class",y=u(t[1].isFeature?"feature":"")+" svelte-17jth3w")},m(t,r){l(t,e,r),g(e,s),g(s,a),g(s,D),g(s,w),H&&H.m(w,null),g(w,E),g(w,j),g(w,M),g(w,Y),g(Y,x),g(w,B),F.m(w,null),g(e,N)},p(t,s){1&s&&v(a,"background-image","url('./"+t[1].image+"')"),t[1].nextDate.poster?H?H.p(t,s):(H=I(t),H.c(),H.m(w,E)):H&&(H.d(1),H=null),1&s&&A!==(A=t[1].title+"")&&p(x,A),q===(q=R(t))&&F?F.p(t,s):(F.d(1),F=q(t),F&&(F.c(),F.m(w,null))),1&s&&k!==(k="events/"+t[1].slug)&&d(e,"href",k),1&s&&y!==(y=u(t[1].isFeature?"feature":"")+" svelte-17jth3w")&&d(e,"class",y)},d(t){t&&i(e),H&&H.d(),F.d()}}}function I(t){let e,s;return{c(){e=r("img"),this.h()},l(t){e=h(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){e.src!==(s=t[1].nextDate.poster)&&d(e,"src",s),d(e,"alt",""),d(e,"class","poster svelte-17jth3w")},m(t,s){l(t,e,s)},p(t,a){1&a&&e.src!==(s=t[1].nextDate.poster)&&d(e,"src",s)},d(t){t&&i(e)}}}function V(t){let e,s,a,v,u,D,w=j(t[1].nextDate.datetime).format("ddd, MMMM Do YYYY, h:mm a")+"",E=j(t[1].nextDate.datetime).fromNow()+"";return{c(){e=n(w),s=c(),a=r("br"),v=c(),u=r("div"),D=n(E),this.h()},l(t){e=f(t,w),s=m(t),a=h(t,"BR",{}),v=m(t),u=h(t,"DIV",{class:!0});var l=o(u);D=f(l,E),l.forEach(i),this.h()},h(){d(u,"class","fromnow svelte-17jth3w")},m(t,r){l(t,e,r),l(t,s,r),l(t,a,r),l(t,v,r),l(t,u,r),g(u,D)},p(t,s){1&s&&w!==(w=j(t[1].nextDate.datetime).format("ddd, MMMM Do YYYY, h:mm a")+"")&&p(e,w),1&s&&E!==(E=j(t[1].nextDate.datetime).fromNow()+"")&&p(D,E)},d(t){t&&i(e),t&&i(s),t&&i(a),t&&i(v),t&&i(u)}}}function b(t){let e,s;return{c(){e=r("span"),s=n("Date TBA")},l(t){e=h(t,"SPAN",{});var a=o(e);s=f(a,"Date TBA"),a.forEach(i)},m(t,a){l(t,e,a),g(e,s)},p:w,d(t){t&&i(e)}}}function B(t){let e,s=t[1].nextDate&&x(t);return{c(){s&&s.c(),e=a()},l(t){s&&s.l(t),e=a()},m(t,a){s&&s.m(t,a),l(t,e,a)},p(t,a){t[1].nextDate?s?s.p(t,a):(s=x(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&i(e)}}}function N(t){let e,s,a,u,D,w,E,M,Y,x,I,V,b,B,N,y,A,H,R,q,F=t[1].title+"",P=j(t[1].lastDate.datetime).format("ddd, MMMM Do YYYY, h:mm a")+"",U=j(t[1].lastDate.datetime).fromNow()+"",G=t[1].lastDate.poster&&k(t);return{c(){e=r("a"),s=r("div"),a=r("div"),u=c(),D=r("div"),G&&G.c(),w=c(),E=r("br"),M=c(),Y=r("h3"),x=n(F),I=c(),V=r("div"),b=n(P),B=c(),N=r("br"),y=c(),A=r("div"),H=n(U),R=c(),this.h()},l(t){e=h(t,"A",{rel:!0,href:!0,class:!0});var l=o(e);s=h(l,"DIV",{class:!0});var r=o(s);a=h(r,"DIV",{class:!0,style:!0}),o(a).forEach(i),u=m(r),D=h(r,"DIV",{class:!0});var c=o(D);G&&G.l(c),w=m(c),E=h(c,"BR",{}),M=m(c),Y=h(c,"H3",{class:!0});var n=o(Y);x=f(n,F),n.forEach(i),I=m(c),V=h(c,"DIV",{class:!0});var d=o(V);b=f(d,P),B=m(d),N=h(d,"BR",{}),y=m(d),A=h(d,"DIV",{class:!0});var v=o(A);H=f(v,U),v.forEach(i),d.forEach(i),c.forEach(i),r.forEach(i),R=m(l),l.forEach(i),this.h()},h(){d(a,"class","image svelte-17jth3w"),v(a,"background-image","url('./"+t[1].image+"')"),d(Y,"class","svelte-17jth3w"),d(A,"class","fromnow svelte-17jth3w"),d(V,"class","row svelte-17jth3w"),d(D,"class","row svelte-17jth3w"),d(s,"class","eventchit svelte-17jth3w"),d(e,"rel","prefetch"),d(e,"href",q="events/"+t[1].slug),d(e,"class","svelte-17jth3w")},m(t,r){l(t,e,r),g(e,s),g(s,a),g(s,u),g(s,D),G&&G.m(D,null),g(D,w),g(D,E),g(D,M),g(D,Y),g(Y,x),g(D,I),g(D,V),g(V,b),g(V,B),g(V,N),g(V,y),g(V,A),g(A,H),g(e,R)},p(t,s){1&s&&v(a,"background-image","url('./"+t[1].image+"')"),t[1].lastDate.poster?G?G.p(t,s):(G=k(t),G.c(),G.m(D,w)):G&&(G.d(1),G=null),1&s&&F!==(F=t[1].title+"")&&p(x,F),1&s&&P!==(P=j(t[1].lastDate.datetime).format("ddd, MMMM Do YYYY, h:mm a")+"")&&p(b,P),1&s&&U!==(U=j(t[1].lastDate.datetime).fromNow()+"")&&p(H,U),1&s&&q!==(q="events/"+t[1].slug)&&d(e,"href",q)},d(t){t&&i(e),G&&G.d()}}}function k(t){let e,s;return{c(){e=r("img"),this.h()},l(t){e=h(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){e.src!==(s=t[1].lastDate.poster)&&d(e,"src",s),d(e,"alt",""),d(e,"class","poster svelte-17jth3w")},m(t,s){l(t,e,s)},p(t,a){1&a&&e.src!==(s=t[1].lastDate.poster)&&d(e,"src",s)},d(t){t&&i(e)}}}function y(t){let e,s=t[1].lastDate&&N(t);return{c(){s&&s.c(),e=a()},l(t){s&&s.l(t),e=a()},m(t,a){s&&s.m(t,a),l(t,e,a)},p(t,a){t[1].lastDate?s?s.p(t,a):(s=N(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&i(e)}}}function A(t){let e,s,a,v,u,p,j,x,I,V,b,N,k,A=t[0],H=[];for(let e=0;e<A.length;e+=1)H[e]=B(Y(t,A,e));let R=t[0],q=[];for(let e=0;e<R.length;e+=1)q[e]=y(M(t,R,e));return{c(){e=c(),s=r("div"),a=r("h1"),v=n("Upcoming Events"),u=c(),p=r("div");for(let t=0;t<H.length;t+=1)H[t].c();j=c(),x=r("br"),I=c(),V=r("h1"),b=n("Past Events"),N=c(),k=r("div");for(let t=0;t<q.length;t+=1)q[t].c();this.h()},l(t){D('[data-svelte="svelte-qh3sum"]',document.head).forEach(i),e=m(t),s=h(t,"DIV",{class:!0});var l=o(s);a=h(l,"H1",{});var r=o(a);v=f(r,"Upcoming Events"),r.forEach(i),u=m(l),p=h(l,"DIV",{class:!0});var c=o(p);for(let t=0;t<H.length;t+=1)H[t].l(c);c.forEach(i),j=m(l),x=h(l,"BR",{}),I=m(l),V=h(l,"H1",{});var n=o(V);b=f(n,"Past Events"),n.forEach(i),N=m(l),k=h(l,"DIV",{class:!0});var d=o(k);for(let t=0;t<q.length;t+=1)q[t].l(d);d.forEach(i),l.forEach(i),this.h()},h(){document.title="Events | Hawke's Bay Comedy",d(p,"class","events svelte-17jth3w"),d(k,"class","events svelte-17jth3w"),d(s,"class","content")},m(t,r){l(t,e,r),l(t,s,r),g(s,a),g(a,v),g(s,u),g(s,p);for(let t=0;t<H.length;t+=1)H[t].m(p,null);g(s,j),g(s,x),g(s,I),g(s,V),g(V,b),g(s,N),g(s,k);for(let t=0;t<q.length;t+=1)q[t].m(k,null)},p(t,[e]){if(1&e){let s;for(A=t[0],s=0;s<A.length;s+=1){const a=Y(t,A,s);H[s]?H[s].p(a,e):(H[s]=B(a),H[s].c(),H[s].m(p,null))}for(;s<H.length;s+=1)H[s].d(1);H.length=A.length}if(1&e){let s;for(R=t[0],s=0;s<R.length;s+=1){const a=M(t,R,s);q[s]?q[s].p(a,e):(q[s]=y(a),q[s].c(),q[s].m(k,null))}for(;s<q.length;s+=1)q[s].d(1);q.length=R.length}},i:w,o:w,d(t){t&&i(e),t&&i(s),E(H,t),E(q,t)}}}function H({params:t,query:e}){return this.fetch("events.json").then(t=>t.json()).then(t=>({events:t}))}function R(t,e,s){let{events:a}=e;return a=a.sort((function(t,e){return t.isFeature?-1:j(t.datetime).diff(e.datetime)})),t.$set=t=>{"events"in t&&s(0,a=t.events)},[a]}export default class extends t{constructor(t){super(),e(this,t,R,A,s,{events:0})}}export{H as preload};

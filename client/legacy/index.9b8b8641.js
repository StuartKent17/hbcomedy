import{_ as t,a as n,b as r,c as e,i as s,s as o,d as a,S as c,e as f,t as u,g as i,h as l,k as h,l as v,m as p,n as g,o as d,u as m,f as y,w as R,j as E,r as b,p as j,C as x}from"./client.689af7a1.js";function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,o=n(t);if(e){var a=n(this).constructor;s=Reflect.construct(o,arguments,a)}else s=o.apply(this,arguments);return r(this,s)}}function k(t,n,r){var e=t.slice();return e[1]=n[r],e}function w(t){var n,r,e,s,o=t[1].title+"";return{c:function(){n=f("li"),r=f("a"),e=u(o),this.h()},l:function(t){n=i(t,"LI",{});var s=l(n);r=i(s,"A",{rel:!0,href:!0});var a=l(r);e=h(a,o),a.forEach(v),s.forEach(v),this.h()},h:function(){p(r,"rel","prefetch"),p(r,"href",s="blog/"+t[1].slug)},m:function(t,s){g(t,n,s),d(n,r),d(r,e)},p:function(t,n){1&n&&o!==(o=t[1].title+"")&&m(e,o),1&n&&s!==(s="blog/"+t[1].slug)&&p(r,"href",s)},d:function(t){t&&v(n)}}}function B(t){for(var n,r,e,s,o,a,c=t[0],m=[],D=0;D<c.length;D+=1)m[D]=w(k(t,c,D));return{c:function(){n=y(),r=f("div"),e=f("h1"),s=u("Recent posts"),o=y(),a=f("ul");for(var t=0;t<m.length;t+=1)m[t].c();this.h()},l:function(t){R('[data-svelte="svelte-tf94ln"]',document.head).forEach(v),n=E(t),r=i(t,"DIV",{class:!0});var c=l(r);e=i(c,"H1",{});var f=l(e);s=h(f,"Recent posts"),f.forEach(v),o=E(c),a=i(c,"UL",{class:!0});for(var u=l(a),p=0;p<m.length;p+=1)m[p].l(u);u.forEach(v),c.forEach(v),this.h()},h:function(){document.title="Blog | Hawke's Bay Comedy",p(a,"class","svelte-1frg2tf"),p(r,"class","content")},m:function(t,c){g(t,n,c),g(t,r,c),d(r,e),d(e,s),d(r,o),d(r,a);for(var f=0;f<m.length;f+=1)m[f].m(a,null)},p:function(t,n){var r=b(n,1)[0];if(1&r){var e;for(c=t[0],e=0;e<c.length;e+=1){var s=k(t,c,e);m[e]?m[e].p(s,r):(m[e]=w(s),m[e].c(),m[e].m(a,null))}for(;e<m.length;e+=1)m[e].d(1);m.length=c.length}},i:j,o:j,d:function(t){t&&v(n),t&&v(r),x(m,t)}}}function C(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function H(t,n,r){var e=n.posts;return t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var I=function(n){t(f,c);var r=D(f);function f(t){var n;return e(this,f),n=r.call(this),s(a(n),t,H,B,o,{posts:0}),n}return f}();export default I;export{C as preload};
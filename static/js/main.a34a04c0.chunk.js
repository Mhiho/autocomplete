(this["webpackJsonpalt-autocomp"]=this["webpackJsonpalt-autocomp"]||[]).push([[0],{10:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n(0),s=n.n(r),o=n(7),i=n.n(o),u=(n(10),n(3)),l=function(e){var t=e.value,n=e.onChange,a=Object(r.useState)(""),o=Object(u.a)(a,2),i=o[0],l=o[1],j=Object(r.useState)(0),d=Object(u.a)(j,2),m=d[0],f=d[1],b=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e}),[e]),t.current}(i),p="Aplikacja zaci\u0105ga user\xf3w, kt\xf3rych lista jest nast\u0119pnie dostarczana do localStorage. Po klikni\u0119ciu na element wyrzucony z inputu, dodajemy ten element do drugiej listy. Usuwamy elementy z drugiej listy za pomoc\u0105 klikni\u0119cia w dany element. Je\u015bli chodzi o mechanizm szukania, wg za\u0142o\u017cenia, \u017ceby nie instalowa\u0107 dodatkowych bibliotek (chodzi mi o lodasha) u\u017cy\u0142em starej, dobrej p\u0119tli for. Mog\u0119 powiedzie\u0107, \u017ce wszystkie rozwi\u0105zania js-owe s\u0105 moim pomys\u0142em :)".split(""),O=200*Math.random()+50;return Object(r.useEffect)((function(){var e;b!==i&&m<p.length&&(e=p,setTimeout((function(){var t=i+e[m];f(m+1),l(t),console.log(i)}),O))})),Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)("form",{children:Object(c.jsx)("input",{placeholder:"name",type:"text",value:t,onChange:n})}),Object(c.jsxs)("article",{children:[Object(c.jsx)("h3",{children:"Opis dzia\u0142ania:"}),Object(c.jsx)("h4",{children:i})]})]})},j=n(12),d=n.n(j),m=n(24),f=n(25),b=n.n(f);!function(e){e.FETCH_NAMES="FETCH_NAMES"}(a||(a={}));var p=n(6),O=n(28),h=function(e){var t=e.names,n=Object(r.useState)([]),a=Object(u.a)(n,2),s=a[0],o=a[1];return Object(c.jsxs)("div",{className:"results-container",children:[Object(c.jsx)("div",{className:"results-list",children:t.map((function(e){return Object(c.jsx)("div",{"data-name":"".concat(e),onClick:function(e){return function(e){var t=[].concat(Object(O.a)(s),[e.target.dataset.name]),n=new Set;t.map((function(e){return n.add(e)}));var a=Array.from(n);console.log(a),o(a)}(e)},children:e},"resultName-".concat(e))}))}),Object(c.jsx)("div",{className:"results-added-names",children:s.map((function(e,t){return Object(c.jsx)("div",{"data-name":"".concat(e),onClick:function(e){return function(e){o(s.filter((function(t){return t!==e.target.dataset.name})))}(e)},children:e},"selName-".concat(e))}))})]})},v=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),i=Object(u.a)(o,2),j=i[0],f=i[1],O=JSON.parse(localStorage.getItem("names")||"{}"),v=Object(p.b)();Object(r.useEffect)((function(){O.length>0||v(function(){var e=Object(m.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()("https://jsonplaceholder.typicode.com/users");case 3:n=e.sent,t({type:a.FETCH_NAMES,names:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[v,O]);var g=Object(p.c)((function(e){return e.namesState})),x=g&&g.names&&g.names.map((function(e){return e.name}));localStorage.setItem("names",JSON.stringify(x));var y=O||x;console.log(x),console.log(y);return Object(c.jsx)("div",{children:Object(c.jsxs)("main",{children:[Object(c.jsx)(l,{onChange:function(e){return function(e){if(f(e.target.value),""===e.target.value)s([]);else if(j.search(/\s/)){var t=e.target.value.split(/\s/).filter((function(e){return""!==e})),n=new Set;console.log(t);for(var a=0;a<y.length;a++)for(var c=0;c<t.length;c++)y[a].toUpperCase().indexOf(t[c].toUpperCase())>-1?n.add(y[a]):n.delete(y[a]);var r=Array.from(n);s(r)}else{var o=y.filter((function(t){return t.toUpperCase().indexOf(e.target.value.toUpperCase())>-1?t:null}));s(o)}}(e)},value:j}),Object(c.jsx)(h,{names:n})]})})},g=n(4),x=n(27),y=n(15),w={names:[]},S=Object(g.c)({namesState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.FETCH_NAMES:return Object(y.a)(Object(y.a)({},e),{},{names:t.names});default:return e}}});var k=Object(g.d)(S,Object(g.a)(x.a));i.a.render(Object(c.jsx)(p.a,{store:k,children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.a34a04c0.chunk.js.map
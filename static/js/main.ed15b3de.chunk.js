(this.webpackJsonpleaderboard=this.webpackJsonpleaderboard||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.0458cdea.jpeg"},17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=(a(22),a(2)),s=a.n(o),u=a(14),m=a(3),i=a(15),d=a.n(i),h=a(16),p=a.n(h);a(41);var b=function(){var e=Object(n.useState)({"No one yet!":"???"}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),o=Object(m.a)(l,2),i=o[0],h=o[1];return Object(n.useEffect)(Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=7;break}return e.next=3,d()({method:"get",url:"https://acm-bounty.herokuapp.com/scores"});case 3:t=e.sent,c(t.data),console.log(a),h(0);case 7:case"end":return e.stop()}}),e)})))),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Leaderboard"),r.a.createElement("table",{className:"table table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Github Username"),r.a.createElement("th",null,"Total Score"))),r.a.createElement("tbody",null,Object.keys(a).map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,t+1),r.a.createElement("td",null,r.a.createElement("a",{href:"https://github.com/"+"".concat(e),target:"_blank"},e)),r.a.createElement("td",null,a[e]))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.ed15b3de.chunk.js.map
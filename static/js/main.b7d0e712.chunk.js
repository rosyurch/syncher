(this.webpackJsonpsyncher=this.webpackJsonpsyncher||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),s=a.n(r),i=(a(10),a(2)),l=a.n(i),o=a(1);a(12);var m=function(e){var t=e.nameTime,a=e.type,n=e.questions,r=e.price,s=e.editors,i=e.link,l=e.applicationAppealLink;return c.a.createElement("li",{className:"list-item"},c.a.createElement("h3",{className:"header"},t),c.a.createElement("div",{className:"info"},a," / ",n," / ",r),c.a.createElement("div",null,s.split(")").slice(0,-1).map((function(e){return c.a.createElement("div",{className:"editor",key:e},e?e+")":"")}))),c.a.createElement("div",{className:"links"},c.a.createElement("a",{className:"link",href:i,target:"_blank",rel:"noopener noreferrer"},"Link"),l&&c.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:l},"\u0417\u0430\u044f\u0432\u043a\u0430/\u0430\u043f\u0435\u043b\u044c")))},u=(a(13),new Date);var p=function(e){var t=e.tourns,a=Object(n.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1],l=Object(n.useState)(u),p=Object(o.a)(l,2),f=p[0],d=p[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",null,c.a.createElement("input",{className:"input","aria-label":"text search input",type:"text",placeholder:"SEARCH",onChange:function(e){i(e.target.value)}}),c.a.createElement("input",{className:"input-date","aria-label":"date filtering",type:"date",onChange:function(e){""===e.target.value?d(u):d(new Date(e.target.value))}})),c.a.createElement("ul",{className:"ul"},t.filter((function(e){return e.endDate>f&&(e.nameTime.toLowerCase().includes(s.toLowerCase())||e.editors.toLowerCase().includes(s.toLowerCase()))})).map((function(e){return c.a.createElement(m,Object.assign({},e,{key:e.nameTime}))}))))},f=(a(14),{"\u044f\u043d\u0432\u0430\u0440\u044f":"01","\u0444\u0435\u0432\u0440\u0430\u043b\u044f":"02","\u043c\u0430\u0440\u0442\u0430":"03","\u0430\u043f\u0440\u0435\u043b\u044f":"04","\u043c\u0430\u044f":"05","\u0438\u044e\u043d\u044f":"06","\u0438\u044e\u043b\u044f":"07","\u0430\u0432\u0433\u0443\u0441\u0442\u0430":"08","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f":"09","\u043e\u043a\u0442\u044f\u0431\u0440\u044f":"10","\u043d\u043e\u044f\u0431\u0440\u044f":"11","\u0434\u0435\u043a\u0430\u0431\u0440\u044f":"12"});var d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){!function(){var e,t,a,n,c,s;l.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,l.a.awrap(fetch("https://api.github.com/gists/2be45373cfe2010ebc4581abac7cb3cf"));case 2:return e=i.sent,i.next=5,l.a.awrap(e.json());case 5:t=i.sent,a=JSON.parse(t.files["chgk.json"].content),n=a.updated,c=a.synchs,s=new Date(n),c.forEach((function(e){if(e.nameTime.slice(e.nameTime.lastIndexOf("(")+1,e.nameTime.lastIndexOf(")")).split("-")[1]){var t=e.nameTime.slice(e.nameTime.lastIndexOf("(")+1,e.nameTime.lastIndexOf(")")).split("-")[1].trim().split(" "),a=t[1],n=a.replace(a,f[a]),c=[t[2],n,t[0]].join("-");e.endDate=new Date(c)}})),u("".concat(s.getHours(),":").concat(s.getMinutes().toString().length<2?"0"+s.getMinutes():s.getMinutes(),":").concat(s.getSeconds()," ").concat(s.getDate(),"-").concat(s.getMonth()+1,"-").concat(s.getFullYear())),r(c);case 11:case"end":return i.stop()}}))}()}),[]),c.a.createElement("div",{className:"wrap"},c.a.createElement("div",{className:"app"},c.a.createElement("header",{className:"header"},"Synchs"),c.a.createElement("div",{className:"last-update"},"Last update: ",m),c.a.createElement("hr",null),c.a.createElement("main",null,c.a.createElement(p,{tourns:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.b7d0e712.chunk.js.map
(this.webpackJsonpbrastewark=this.webpackJsonpbrastewark||[]).push([[1],[,,,,,,,,,,function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(1),i=t(11);t(23);n.a=function(){var e=Object(r.g)().id;return o.a.createElement(i.a,null,o.a.createElement("div",{className:"text-wrapper"},o.a.createElement("h3",null,e?"The gnome information is loading, please wait...":"List of gnomes information is loading, please wait...")))}},function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=(t(22),function(e){var n=e.children,t=e.actions;return o.a.createElement("div",{className:"page"},o.a.createElement("header",{className:"page-header"},o.a.createElement("h1",{className:"header-title"},"Brastlewark"),o.a.createElement("div",{className:"block-of-actions"},t)),o.a.createElement("section",{className:"page-content"},n))});r.defaultProps={actions:null},n.a=r},,,,,function(e,n,t){e.exports=t(30)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),i=t.n(r),c=(t(21),t(5)),l=t(1),s=t(10),u=(t(29),Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,37))}))),d=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,38))})),f=function(){return o.a.createElement(c.a,{className:"App"},o.a.createElement(a.Suspense,{fallback:o.a.createElement(s.a,null)},o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:u}),o.a.createElement(l.a,{exact:!0,path:"/gnomes/:id",component:d}))))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/brastlewark",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/brastlewark","/service-worker.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(n,e)}))}}()}],[[16,2,3]]]);
//# sourceMappingURL=main.42d2a9ee.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){},133:function(e,t){},135:function(e,t){},170:function(e,t){},171:function(e,t){},222:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(94),r=n.n(i),c=(n(103),n(12)),l=n(13),u=n(15),s=n(14),h=n(16),f=n(225),d=n(226),p=n(227),m=n(52),b=n.n(m);function v(e,t,n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var o="expires="+a.toGMTString();document.cookie=e+"="+t+";"+o+";path=/"}var g={setCookie:v,getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),a=0;a<n.length;a++){for(var o=n[a];" "===o.charAt(0);)o=o.substring(1);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""},deleteCookie:function(e){v(e,"delete",0)}},w=n(36),O=n.n(w),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).getEmail=function(e){n.setState({email:e})},n.state={email:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this.getEmail,t={Authorization:"bearer ".concat(g.getCookie("token"))};O()({method:"get",url:"http://localhost:3002/api/get/email",headers:t}).then(function(t){e(t.data.email)}).catch(function(e){alert(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Sample Application"),o.a.createElement("h2",null,"Hi user! Is you email ",this.state.email,"?"))}}]),t}(o.a.Component),j=n(30),E=n.n(j),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=E.a.parse(window.location.search);if(!e.code||!e.state)return alert("unallowed connection"),window.location.href="/";if(e.state!==g.getCookie("state"))return alert(e.state),alert(g.getCookie("state")),alert("invalid authorization"),window.location.href="/";var t=E.a.stringify({client_id:"9x3bEdlVe9XS1fQ5P0BohJHbow88vO8X",client_secret:"VEJNF6HcuOWWpkRxB376bvqzK5pKhMza",redirect_url:"http://localhost:3001/login/auth",code:e.code,state:e.state});O()({method:"get",url:"http://localhost:3002/api/auth/token?".concat(t)}).then(function(e){return g.setCookie("token",e.data,100),window.location.href="/"}).catch(function(e){return alert(e),window.location.href="/login"})}},{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(o.a.Component),C=n(95),_=n.n(C),B=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).buttonClick=function(){var e=_.a.generate();g.setCookie("state",e,1);var t=E.a.stringify({client_id:n.state.client_id,redirect_url:n.state.redirect_url,scope:n.state.scope,state:e});window.location.href="http://localhost:3002/api/auth/app?".concat(t)},n.state={client_id:"",redirect_url:"",scope:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({client_id:"9x3bEdlVe9XS1fQ5P0BohJHbow88vO8X",redirect_url:"http://localhost:3001/login/auth",scope:"email"})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Sample Application"),o.a.createElement("button",{onClick:this.buttonClick},"Login with Sample Service"))}}]),t}(o.a.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"404 Not Found"))}}]),t}(o.a.Component),S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).returnBool=function(e,t){return!!g.getCookie("token")},n.ifFalse=function(e,t,n){"/login"!==e&&(n(),alert("Please login first"),window.location.href="/login")},n.ifTrue=function(e,t,n){if("/login"===e)return alert("You already logged-in"),window.location.href="/"},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(b.a,{exact:!0,ifTrue:this.ifTrue,ifFalse:this.ifFalse,returnBool:this.returnBool,path:"/",component:k}),o.a.createElement(p.a,{exact:!0,path:"/login/auth",component:y}),o.a.createElement(b.a,{exact:!0,ifTrue:this.ifTrue,ifFalse:this.ifFalse,returnBool:this.returnBool,path:"/login",component:B}),o.a.createElement(p.a,{component:x}))}}]),t}(o.a.Component),T=(n(222),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f.a,null,o.a.createElement(S,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,n){e.exports=n(224)}},[[98,2,1]]]);
//# sourceMappingURL=main.cdd2a6d8.chunk.js.map
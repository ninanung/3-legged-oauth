(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(64)},32:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),i=n.n(o),l=(n(32),n(2)),c=n(3),u=n(5),s=n(4),p=n(6),h=n(67),d=n(68),m=n(13),f=n.n(m);function g(e,t,n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var r="expires="+a.toGMTString();document.cookie=e+"="+t+";"+r+";path=/"}var b={setCookie:g,getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),a=0;a<n.length;a++){for(var r=n[a];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""},deleteCookie:function(e){g(e,"delete",0)}},v=n(65),E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).logout=function(){b.deleteCookie("user_id"),window.location.href="/login"},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sample Service"),r.a.createElement("h2",null,"This is sample service home page."),r.a.createElement("button",null,r.a.createElement(v.a,{to:"/register"},"Register App")),r.a.createElement("button",{onClick:this.logout},"Logout"))}}]),t}(r.a.Component),w=n(12),O=n.n(w),j=n(11),C=n.n(j),_=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=O.a.parse(window.location.search);if(!e.client_id||!e.state||!e.code||!e.scope||!e.redirect_url)return alert("invalid authorization"),window.location.href="/notfound";if(!b.getCookie("user_id")){var t=O.a.stringify({client_id:e.client_id,state:e.state,code:e.code,scope:e.scope,redirect_url:e.redirect_url});return alert("please login for authorization"),window.location.href="/login?".concat(t)}var n={client_id:e.client_id,user_id:b.getCookie("user_id"),redirect_url:e.redirect_url,scope:e.scope,state:e.state,code:e.code},a="http://localhost:3002/api/auth/register?".concat(O.a.stringify(n));C()({method:"get",url:a}).then(function(e){return e.data.registered?(console.log(e.data),window.location.href=e.data.url):window.confirm("You want to register your account to this App?")?(console.log(e.data),window.location.href=e.data.url):window.location.href="/"}).catch(function(e){return alert(e),window.location.href="/notfound"})}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(r.a.Component),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).setApps=function(e){n.setState({apps:e})},n.onAppnameChange=function(e){n.setState({appname:e.target.value})},n.onRedirectUrlChange=function(e){n.setState({redirect_url:e.target.value})},n.onButtonClick=function(){var e=n.setApps;C()({method:"post",data:{appname:n.state.appname,redirect_url:n.state.redirect_url,user_id:b.getCookie("user_id")},url:"http://localhost:3002/api/sign/app"}).then(function(t){e(t.data.slice()),alert("App register succeeded."),document.getElementById("appname").value="",document.getElementById("redirect").value=""}).catch(function(e){alert(e)})},n.state={appname:"",redirect_url:"",apps:[]},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this.setApps;C()({method:"get",url:"http://localhost:3002/api/sign/get/app"}).then(function(t){e(t.data.slice())}).catch(function(e){alert(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Register Your App"),r.a.createElement("label",null,"App Name"),r.a.createElement("input",{id:"appname",type:"text",onChange:this.onAppnameChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Redirect URL"),r.a.createElement("input",{id:"redirect",type:"text",onChange:this.onRedirectUrlChange}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.onButtonClick},"Create"),r.a.createElement("hr",null),this.state.apps&&this.state.apps.length?r.a.createElement("div",null,r.a.createElement("h2",null,"Registered Apps"),r.a.createElement("hr",null)):r.a.createElement("div",null,r.a.createElement("h2",null,"No Apps"),r.a.createElement("hr",null)),this.state.apps&&this.state.apps.length?this.state.apps.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("h3",null,"Appname : ",e.appname),r.a.createElement("h3",null,"Client ID : ",e.client_id),r.a.createElement("h3",null,"Client Secret : ",e.client_secret),r.a.createElement("hr",null))}):r.a.createElement("div",null))}}]),t}(r.a.Component),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).onUsernameChange=function(e){n.setState({username:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onButtonClick=function(){var e=O.a.parse(window.location.search);C()({method:"post",data:{username:n.state.username,password:n.state.password},url:n.props.url}).then(function(t){if(b.setCookie("user_id",t.data,3),e.client_id&&e.state&&e.redirect_url&&e.scope&&e.code)return window.location.href="/auth?client_id=".concat(e.client_id,"&state=").concat(e.state,"&scope=").concat(e.scope,"&redirect_url=").concat(e.redirect_url,"&code=").concat(e.code);window.location.href="/"}).catch(function(e){alert(e)})},n.state={username:"",password:""},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",onChange:this.onUsernameChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",onChange:this.onPasswordChange}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.onButtonClick},"Login"))}}]),t}(r.a.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"To the Sample Service"),r.a.createElement(y,{url:"http://localhost:3002/api/sign/login"}))}}]),t}(r.a.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))}}]),t}(r.a.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=O.a.parse(window.location.search);if(!e.client_id||!e.state||!e.redirect_url||!e.scope||!e.client_secret)return alert("invalid authorization"),window.location.href="/";if(!b.getCookie("user_id"))return alert("please login for authorization and try again"),window.location.href="/login";var t={client_id:e.client_id,user_id:b.getCookie("user_id"),state:e.state,redirect_url:e.redirect_url,scope:e.scope,client_secret:e.client_secret},n="http://localhost:3002/api/auth/token?".concat(O.a.stringify(t));C()({method:"get",url:n}).then(function(e){console.log(e.data)}).catch(function(e){alert(e)})}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(r.a.Component),x=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).returnBool=function(e,t){return!!b.getCookie("user_id")},n.ifFalse=function(e,t,n){if("/login"!==e)return n(),alert("Please login first."),window.location.href="/login"},n.ifTrue=function(e,t,n){if("/login"===e)return alert("You are already signed in."),window.location.href="/"},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(f.a,{path:"/",exact:!0,component:E,returnBool:this.returnBool,ifFalse:this.ifFalse,ifTrue:this.ifTrue}),r.a.createElement(d.a,{path:"/auth",exact:!0,component:_}),r.a.createElement(f.a,{path:"/register",exact:!0,component:k,returnBool:this.returnBool,ifFalse:this.ifFalse,ifTrue:this.ifTrue}),r.a.createElement(f.a,{path:"/login",exact:!0,component:A,returnBool:this.returnBool,ifFalse:this.ifFalse,ifTrue:this.ifTrue}),r.a.createElement(f.a,{path:"/token",exact:!0,component:T,returnBool:this.returnBool,ifFalse:this.ifFalse,ifTrue:this.ifTrue}),r.a.createElement(d.a,{component:B}))}}]),t}(r.a.Component),S=n(66),F=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement(x,null))}}]),t}(r.a.Component),R=(n(62),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.fd1f8256.chunk.js.map
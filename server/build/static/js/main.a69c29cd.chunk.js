(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(56)},30:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),i=n.n(o),c=(n(30),n(2)),l=n(3),u=n(5),s=n(4),h=n(6),p=n(58),m=n(59),f=n(11),d=n.n(f);function b(e,t,n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var r="expires="+a.toGMTString();document.cookie=e+"="+t+";"+r+";path=/"}var g={setCookie:b,getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),a=0;a<n.length;a++){for(var r=n[a];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""},deleteCookie:function(e){b(e,"delete",0)}},O=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sample Service"),r.a.createElement("h2",null,"This is sample service home page."))}}]),t}(r.a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Auth"))}}]),t}(r.a.Component),v=n(12),E=n.n(v),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).onAppnameChange=function(e){n.setState({appname:e.target.value})},n.onRedirectUrlChange=function(e){n.setState({redirect_url:e.target.value})},n.onButtonClick=function(){E()({method:"post",data:{appname:n.state.appname,redirect_url:n.state.redirect_url},url:"http://localhost:3002/api/sign/app"}).then(function(e){alert("App register succeeded.")}).catch(function(e){alert(e)})},n.state={appname:"",redirect_url:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Register Your App"),r.a.createElement("label",null,"App Name"),r.a.createElement("input",{type:"text",onChange:this.onAppnameChange}),r.a.createElement("label",null,"Redirect URL"),r.a.createElement("input",{type:"text",onChange:this.onRedirectUrlChange}),r.a.createElement("button",{onClick:this.onButtonClick},"Create"))}}]),t}(r.a.Component),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).onUsernameChange=function(e){n.setState({username:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onButtonClick=function(){console.log(n.state),E()({method:"post",data:{username:n.state.username,password:n.state.password},url:n.props.url}).then(function(e){g.setCookie("user_id",e.data,3)}).catch(function(e){alert(e)})},n.state={username:"",password:""},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",onChange:this.onUsernameChange}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",onChange:this.onPasswordChange}),r.a.createElement("button",{onClick:this.onButtonClick},"Login"))}}]),t}(r.a.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"To the Sample Service"),r.a.createElement(k,{url:"http://localhost:3002/api/sign/login"}))}}]),t}(r.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))}}]),t}(r.a.Component),B=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).returnBool=function(e,t,n){return!!g.getCookie("user_id")},n.ifFalse=function(e,t,n){"/login"!==e&&(alert("Please login first."),window.location.href="/login")},n.ifTrue=function(e,t,n){"/login"===e&&(alert("You are already signed in."),window.location.href="/")},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/",exact:!0,component:O,returnBool:this.returnBool,ifFalse:this.ifFalse,ifTrue:this.ifTrue}),r.a.createElement(d.a,{path:"/auth",exact:!0,component:j,returnBool:this.returnBool,ifFalse:this.ifFalse,ifTrue:this.ifTrue}),r.a.createElement(d.a,{path:"/register",exact:!0,component:C,returnBool:this.returnBool,ifFalse:this.ifFalse,ifTrue:this.ifTrue}),r.a.createElement(d.a,{path:"/login",exact:!0,component:w,returnBool:this.returnBool,ifFalse:this.ifFalse,ifTrue:this.ifTrue}),r.a.createElement(m.a,{component:y}))}}]),t}(r.a.Component),T=n(57),x=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,null,r.a.createElement(B,null))}}]),t}(r.a.Component),F=(n(54),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.a69c29cd.chunk.js.map
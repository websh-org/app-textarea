parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"czNZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RemoteSlavePort=void 0;class t{constructor(t){this._port=null,this._manifest={},this._commands={},this._handlers={};const s=async({cmd:t,args:s,rsvp:e})=>{try{t||this.throw("slave-specify-command"),this._commands[t]||this.throw("slave-no-such-command");const a=await this._commands[t](s),[o,n]=[].concat(a);this._port.postMessage({result:o,re:e},n)}catch(r){this._port.postMessage({error:r.error|r.message||String(r),data:r.data||{},re:e})}},e=r=>{r.source===window.parent&&r.data&&r.data.port&&"connect"!==!r.data[t]&&(this._port=r.data.port,this._port.postMessage({[t]:"connected",manifest:this._manifest}),window.removeEventListener("message",e),this._port.onmessage=(t=>{s(t.data)}))};window.addEventListener("message",e)}manifest(t){return this._manifest=t,this}on(t,s){return this._handlers[t]=this._handlers[t]||[],this._handlers[t].push(s),this}command(t,s){return this._commands[t]=s,this}trigger(t,s={}){return port.postMessage({event:t,data:s}),this}throw(t,s={}){throw{error:t,data:s}}}exports.RemoteSlavePort=t;
},{}],"Ax/l":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WebShellApp=void 0;var e=require("@websh/remote-slave-port"),r=new e.RemoteSlavePort("SOUTH-TOOTH");exports.WebShellApp=r,r.command("app-close",function(){return!0});
},{"@websh/remote-slave-port":"czNZ"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("@websh/web-shell-app"),t=document.getElementById("textarea");e.WebShellApp.manifest({name:"Text Area",icon:"https://upload.wikimedia.org/wikipedia/commons/a/ae/Icon-txt.svg",description:"This is the example app for WebShell.",version:"0.2.0",homepage:"https://github.com/websh-org/app-textarea#readme",repository:"https://github.com/websh-org/app-textarea.git",license:"ISC",api:{test:{},file:{formats:{text:{type:"text/plain",open:!0,save:!0,new:!0}}}}}).command("app-close",function(){e.WebShellApp.throw("app-close-wait")}).command("file-open",function(e){e.format,e.extension;var a=e.content;return t.value=a,"OK"}).command("file-save",function(e){e.format,e.extension;return{content:t.value,type:"text/plain"}}).command("file-new",function(e){e.format,e.extension;return t.value="","OK"});
},{"@websh/web-shell-app":"Ax/l"}]},{},["Focm"], null)
//# sourceMappingURL=/app-textarea/src.b81e3a44.js.map
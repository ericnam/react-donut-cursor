/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t={418:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,i){for(var c,a,p=o(t),s=1;s<arguments.length;s++){for(var u in c=Object(arguments[s]))r.call(c,u)&&(p[u]=c[u]);if(e){a=e(c);for(var f=0;f<a.length;f++)n.call(c,a[f])&&(p[a[f]]=c[a[f]])}}return p}},408:(t,e,r)=>{var n=r(418);if("function"==typeof Symbol&&Symbol.for){var o=Symbol.for;o("react.element"),o("react.portal"),o("react.fragment"),o("react.strict_mode"),o("react.profiler"),o("react.provider"),o("react.context"),o("react.forward_ref"),o("react.suspense"),o("react.memo"),o("react.lazy")}"function"==typeof Symbol&&Symbol.iterator;function i(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},a={};function p(t,e,r){this.props=t,this.context=e,this.refs=a,this.updater=r||c}function s(){}function u(t,e,r){this.props=t,this.context=e,this.refs=a,this.updater=r||c}p.prototype.isReactComponent={},p.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(i(85));this.updater.enqueueSetState(this,t,e,"setState")},p.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},s.prototype=p.prototype;var f=u.prototype=new s;f.constructor=u,n(f,p.prototype),f.isPureReactComponent=!0;Object.prototype.hasOwnProperty},294:(t,e,r)=>{r(408)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}(()=>{function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function e(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r(294);e(e({},{color:"black",size:10,img:null,transition:0}),{},{size:15,transition:50}),e({},{color:"black",size:10,img:null,transition:0})})()})();
webpackJsonp([2],{310:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(83),a=n(o),i=r(8),s=n(i),u=r(467),c=n(u),f=r(474),l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(f),d=r(141);e.default={namespace:"users",state:{list:[],total:null,page:null},reducers:{save:function(t,e){var r=e.payload,n=r.data,o=r.total,a=r.page;return(0,s.default)({},t,{list:n,total:o,page:a})}},effects:{fetch:a.default.mark(function t(e,r){var n,o,i,s=e.payload.page,u=void 0===s?1:s,c=r.call,f=r.put,d=r.select;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(function(t){return t.users.list});case 2:return n=t.sent,t.next=5,c(l.fetch,{page:u});case 5:return o=t.sent,i=o.data,t.next=9,f({type:"save",payload:{data:n?i.concat(n):i,page:u}});case 9:case"end":return t.stop()}},t,this)}),remove:a.default.mark(function t(e,r){var n=e.payload,o=r.call,i=r.put;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(l.remove,n);case 2:return t.next=4,i({type:"reload"});case 4:case"end":return t.stop()}},t,this)}),patch:a.default.mark(function t(e,r){var n=e.payload,o=n.id,i=n.values,s=r.call,u=r.put;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(l.patch,o,i);case 2:return t.next=4,u({type:"reload"});case 4:case"end":return t.stop()}},t,this)}),create:a.default.mark(function t(e,r){var n=e.payload,o=r.call,i=r.put;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(l.create,n);case 2:return t.next=4,i({type:"reload"});case 4:case"end":return t.stop()}},t,this)}),reload:a.default.mark(function t(e,r){var n,o=r.put,i=r.select;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(function(t){return t.users.page});case 2:return n=t.sent,t.next=5,o({type:"fetch",payload:{page:n}});case 5:case"end":return t.stop()}},t,this)})},subscriptions:{setup:function(t){var e=t.dispatch;return t.history.listen(function(t){var r=t.pathname,n=t.search,o=c.default.parse(n);r==="/"+d.PREFIX+"/users"&&e({type:"fetch",payload:o})})}}},t.exports=e.default},330:function(t,e,r){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,s,u=n(t),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var f in r)a.call(r,f)&&(u[f]=r[f]);if(o){s=o(r);for(var l=0;l<s.length;l++)i.call(r,s[l])&&(u[s[l]]=r[s[l]])}}return u}},467:function(t,e,r){"use strict";function n(t){switch(t.arrayFormat){case"index":return function(e,r,n){return null===r?[a(e,t),"[",n,"]"].join(""):[a(e,t),"[",a(n,t),"]=",a(r,t)].join("")};case"bracket":return function(e,r){return null===r?a(e,t):[a(e,t),"[]=",a(r,t)].join("")};default:return function(e,r){return null===r?a(e,t):[a(e,t),"=",a(r,t)].join("")}}}function o(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e)return void(n[t]=r);void 0===n[t]&&(n[t]={}),n[t][e[1]]=r};case"bracket":return function(t,r,n){return e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0===n[t]?void(n[t]=[r]):void(n[t]=[].concat(n[t],r)):void(n[t]=r)};default:return function(t,e,r){if(void 0===r[t])return void(r[t]=e);r[t]=[].concat(r[t],e)}}}function a(t,e){return e.encode?e.strict?s(t):encodeURIComponent(t):t}function i(t){return Array.isArray(t)?t.sort():"object"==typeof t?i(Object.keys(t)).sort(function(t,e){return Number(t)-Number(e)}).map(function(e){return t[e]}):t}var s=r(468),u=r(330),c=r(469);e.extract=function(t){var e=t.indexOf("?");return-1===e?"":t.slice(e+1)},e.parse=function(t,e){e=u({arrayFormat:"none"},e);var r=o(e),n=Object.create(null);return"string"!=typeof t?n:(t=t.trim().replace(/^[?#&]/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),o=e.shift(),a=e.length>0?e.join("="):void 0;a=void 0===a?null:c(a),r(c(o),a,n)}),Object.keys(n).sort().reduce(function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=i(r):t[e]=r,t},Object.create(null))):n},e.stringify=function(t,e){e=u({encode:!0,strict:!0,arrayFormat:"none"},e);var r=n(e);return t?Object.keys(t).sort().map(function(n){var o=t[n];if(void 0===o)return"";if(null===o)return a(n,e);if(Array.isArray(o)){var i=[];return o.slice().forEach(function(t){void 0!==t&&i.push(r(n,t,i.length))}),i.join("&")}return a(n,e)+"="+a(o,e)}).filter(function(t){return t.length>0}).join("&"):""}},468:function(t,e,r){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}},469:function(t,e,r){"use strict";function n(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),o=t.slice(e);return Array.prototype.concat.call([],n(r),n(o))}function o(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(i),r=1;r<e.length;r++)t=n(e,r).join(""),e=t.match(i);return t}}function a(t){for(var e={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=s.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch(t){var n=o(r[0]);n!==r[0]&&(e[r[0]]=n)}r=s.exec(t)}e["%C2"]="\ufffd";for(var a=Object.keys(e),i=0;i<a.length;i++){var u=a[i];t=t.replace(new RegExp(u,"g"),e[u])}return t}var i=new RegExp("%[a-f0-9]{2}","gi"),s=new RegExp("(%[a-f0-9]{2})+","gi");t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return a(t)}}},474:function(t,e,r){"use strict";function n(t){var e=t.page;return(0,a.default)("https://cnodejs.org/api/v1/topics?page="+e+"&limit="+i.PAGE_SIZE)}Object.defineProperty(e,"__esModule",{value:!0}),e.fetch=n;var o=r(475),a=function(t){return t&&t.__esModule?t:{default:t}}(o),i=r(141)},475:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.response=t,e}Object.defineProperty(e,"__esModule",{value:!0});var a=r(83),i=n(a),s=r(476),u=n(s),c=r(477),f=n(c);e.default=function(){function t(t,r){return e.apply(this,arguments)}var e=(0,u.default)(i.default.mark(function t(e,r){var n,a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.default)(e,r);case 2:return n=t.sent,o(n),t.next=6,n.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}},t,this)}));return t}(),t.exports=e.default},476:function(t,e,r){"use strict";e.__esModule=!0;var n=r(84),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(a,i){try{var s=e[a](i),u=s.value}catch(t){return void r(t)}if(!s.done)return o.default.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}},477:function(t,e,r){t.exports=r(478)},478:function(t,e,r){r(479),t.exports=self.fetch.bind(self)},479:function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return v.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function a(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function i(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function s(t){var e=new FileReader,r=i(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=i(e);return e.readAsText(t),r}function c(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(v.arrayBuffer&&v.blob&&w(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=a(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?a(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var t=a(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(t){var e=t.toUpperCase();return x.indexOf(e)>-1?e:t}function p(t,e){e=e||{};var r=e.body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=d(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function h(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function y(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function b(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(v.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&m.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=r(n)},o.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},v.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var x=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},l.call(p.prototype),l.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];b.redirect=function(t,e){if(-1===_.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=p,t.Response=b,t.fetch=function(t,e){return new Promise(function(r,n){var o=new p(t,e),a=new XMLHttpRequest;a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:y(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;r(new b(e,t))},a.onerror=function(){n(new TypeError("Network request failed"))},a.ontimeout=function(){n(new TypeError("Network request failed"))},a.open(o.method,o.url,!0),"include"===o.credentials&&(a.withCredentials=!0),"responseType"in a&&v.blob&&(a.responseType="blob"),o.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),a.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}});
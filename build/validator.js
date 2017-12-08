!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Validator=e():t.Validator=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=69)}([function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(24)("wks"),i=n(26),o=n(1).Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},function(t,e,n){t.exports=!n(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(8),i=n(22);t.exports=n(3)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(12);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={}},function(t,e,n){var r=n(5),i=n(45),o=n(59),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(1),i=n(0),o=n(43),u=n(4),a=function(t,e,n){var c,l,f,s=t&a.F,v=t&a.G,d=t&a.S,p=t&a.P,y=t&a.B,h=t&a.W,g=v?i:i[e]||(i[e]={}),b=g.prototype,x=v?r:d?r[e]:(r[e]||{}).prototype;v&&(n=e);for(c in n)(l=!s&&x&&void 0!==x[c])&&c in g||(f=l?x[c]:n[c],g[c]=v&&"function"!=typeof x[c]?n[c]:y&&l?o(f,r):h&&x[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):p&&"function"==typeof f?o(Function.call,f):f,p&&((g.virtual||(g.virtual={}))[c]=f,t&a.R&&b&&!b[c]&&u(b,c,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(24)("keys"),i=n(26);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(46),i=n(9);t.exports=function(t){return r(i(t))}},function(t,e,n){t.exports={default:n(37),__esModule:!0}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(12),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){"use strict";var r=n(49),i=n(10),o=n(55),u=n(4),a=n(6),c=n(7),l=n(47),f=n(23),s=n(52),v=n(2)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,y,h,g,b){l(n,e,y);var x,m,w,O=function(t){if(!d&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",j="values"==h,_=!1,k=t.prototype,A=k[v]||k["@@iterator"]||h&&k[h],M=A||O(h),T=h?j?O("entries"):M:void 0,L="Array"==e?k.entries||A:A;if(L&&(w=s(L.call(new t)))!==Object.prototype&&w.next&&(f(w,S,!0),r||a(w,v)||u(w,v,p)),j&&A&&"values"!==A.name&&(_=!0,M=function(){return A.call(this)}),r&&!b||!d&&!_&&k[v]||u(k,v,M),c[e]=M,c[S]=p,h)if(x={values:j?M:O("values"),keys:g?M:O("keys"),entries:T},b)for(m in x)m in k||o(k,m,x[m]);else i(i.P+i.F*(d||_),e,x);return x}},function(t,e,n){var r=n(53),i=n(19);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(8).f,i=n(6),o=n(2)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(1),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(31),o=r(i),u=n(32),a=r(u),c=n(33),l=r(c),f=n(34),s=r(f),v=n(35),d=r(v),p=n(68),y=n(30),h=n(28),g=n(29),b=function(t,e){if(p.isFunction(t))return t.apply(null,e);if(p.isObject(t)){var n=null;return t.pattern?n=t.pattern.test(new String(e[0])):p.isFunction(t.valid)&&(n=t.valid.apply(null,e)),!0===n||t.message}},x=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"other";return!0===e||void 0===e?(0,d.default)({},t,{valid:!0,message:null,type:n}):(0,d.default)({},t,{valid:!1,message:e,type:n})},m={rules:{},combineRules:[]},w=function(){function t(e){(0,l.default)(this,t),p.isObject(e),this.rules={},this.combineRules={},this.initRules(e)}return(0,s.default)(t,[{key:"initRules",value:function(t){var e={};p.extend(!0,e,m,t);var n=(0,a.default)(y);n.unshift("required");for(var r in e.rules){var i=e.rules[r];p.isObject(i)?p.isArray(i.valids):delete e.rules[r]}var u=!0,c=!1,l=void 0;try{for(var f,s=(0,o.default)(n);!(u=(f=s.next()).done);u=!0){var v=f.value,d=t[v];if(p.isArray(d)){var h=!0,g=!1,b=void 0;try{for(var x,w=(0,o.default)(d);!(h=(x=w.next()).done);h=!0){var O=x.value,S=e.rules[O];p.isObject(S)||(S=e.rules[O]={}),"required"==v?S.required=!0:S.type=v}}catch(t){g=!0,b=t}finally{try{!h&&w.return&&w.return()}finally{if(g)throw b}}}}}catch(t){c=!0,l=t}finally{try{!u&&s.return&&s.return()}finally{if(c)throw l}}this.rules=e.rules,this.initCombineRules(e.combineRules)}},{key:"updateRule",value:function(t){this.initRules(t||{})}},{key:"initCombineRules",value:function(t){var e={},n=!0,r=!1,i=void 0;try{for(var u,a=(0,o.default)(t);!(n=(u=a.next()).done);n=!0){var c=u.value,l="";c.parentRef&&(l=c.parentRef+".");var f=!0,s=!1,v=void 0;try{for(var d,y=(0,o.default)(c.refs);!(f=(d=y.next()).done);f=!0){var h=d.value,g=l+h;p.isArray(e[g])?e[g].push(c):e[g]=[c]}}catch(t){s=!0,v=t}finally{try{!f&&y.return&&y.return()}finally{if(s)throw v}}}}catch(t){r=!0,i=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}this.combineRules=e}},{key:"valid",value:function(t,e,n){var r=[],i=this.validData(t,function(t){for(var o in t)r.indexOf(o)>-1&&r.splice(r.indexOf(o),1);p.extend(i,t),n&&n.call(this,t),e&&0==r.length&&e.call(this,i)});for(var o in i)i[o].loading&&r.push(o);return i}},{key:"validData",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],i={};if(""!=n&&p.extend(i,this.validField(n,r,e)),void 0==r&&(r=t),p.isArray(t))for(var o=0;o<t.length;o++){var u=n+"["+o+"]";p.extend(i,this.validData(t[o],e,u,r))}else if(p.isObject(t))for(var a in t){var c=n+(""==n?"":".")+a;p.extend(i,this.validData(t[a],e,c,r))}return i}},{key:"getConfig",value:function(t){var e=t;return t.indexOf("[")>-1&&!this.rules[t]&&(e=t.replace(/\[\w+\]/,"[]")),this.rules[e]}},{key:"setConfig",value:function(t,e){var n=t;this.rules[n]=p.extend(!0,this.rules[n],e)}},{key:"validField",value:function(t,e,n){if(p.isNull(t))return x(t);var r=t,i=p.getKeyValue(e,t);t.indexOf("[")>-1&&!this.rules[t]&&(r=t.replace(/\[\w+\]/,"[]"));var o=e,u="";t.lastIndexOf(".")>-1&&(u=t.substr(0,t.lastIndexOf(".")),o=p.getKeyValue(e,u));var a=this.rules[r];if(void 0==a){return this.combineRules[r]?this.combineRulesValid(r,i,o,u):x(t,!0,"base")}var c=this.validFieldBase(a,i,o);if(!0!==c)return x(t,c,"base");c=this.combineRulesValid(r,i,o,u);var l=x(t,void 0,"base");return!0===c&&p.isFunction(n)&&p.isFunction(a.validAsync)&&(a.validAsync.call(null,i,function(e){var r=x(t,e,"async");r[t].loading=!1,n(r)},o,e),l[t].loading=!0),p.extend(l,c)}},{key:"validFieldBase",value:function(t,e,n){if(t){var r=b(h.required,[e]);if(t.required){if(!0!==r)return r}else if(!0!==r)return!0;if(t.type&&!0!==(r=b(y[t.type],[e])))return r;var i=(0,a.default)(h);i.shift();var u=!0,c=!1,l=void 0;try{for(var f,s=(0,o.default)(i);!(u=(f=s.next()).done);u=!0){var v=f.value;if(!p.isNull(t[v])){var d=b(h[v],[e,t[v]]);if(!0!==d)return d}}}catch(t){c=!0,l=t}finally{try{!u&&s.return&&s.return()}finally{if(c)throw l}}if(!p.isNull(t.valid)&&!0!==(r=b(t.valid,[e,n])))return r}return!0}},{key:"combineRulesValid",value:function(t,e,n,r){var i=this.combineRules,u=i[t];if(!u)return!0;var a={},c=0,l=!0,f=!1,s=void 0;try{for(var v,d=(0,o.default)(u);!(l=(v=d.next()).done);l=!0){var y=v.value,h=[],m=!0,w=!1,O=void 0;try{for(var S,j=(0,o.default)(y.refs);!(m=(S=j.next()).done);m=!0){var _=S.value,k=p.getKeyValue(n,_),A=(y.parentRef&&r?r+".":"")+_;if(1!=this.validFieldBase(this.rules[A],k,n))break;h.push(k)}}catch(t){w=!0,O=t}finally{try{!m&&j.return&&j.return()}finally{if(w)throw O}}if(!(h.length<y.refs.length)){var M=y.valid;if(p.isObject(M)&&p.isString(M.valid)&&(M.valid=g[M.valid],p.isNull(M.valid)))throw Error("不存在命名为"+M+"的验证规则");var T=b(M,h);c++;var L=(y.parentRef&&r?r+".":"")+y.refs[y.refs.length-1],N=x(L,T,"combine");a[L]&&!a[L].valid||p.extend(a,N)}}}catch(t){f=!0,s=t}finally{try{!l&&d.return&&d.return()}finally{if(f)throw s}}return 0==c||a}}]),t}();t.exports=w},function(t,e,n){"use strict";var r={required:{valid:function(t){return null!==t&&void 0!==t&&String(t).length>0},message:"不能为空"},maxLen:function(t,e){return null===e||void 0===e||(!0==(null!==t&&void 0!==t&&String(t).length<=e)||"文字长度不能超过"+e+"个字")},minLen:function(t,e){return null===e||void 0===e||(!0==(null!==t&&void 0!==t&&String(t).length>=e)||"文字长度不能少于"+e+"个字")},max:function(t,e){return null===e||void 0===e||(!0==(null!==t&&void 0!==t&&Number(t)<=e)||"不能大于"+e)},min:function(t,e){return null===e||void 0===e||(!0==(null!==t&&void 0!==t&&Number(t)>=e)||"不能小于"+e)}};t.exports=r},function(t,e,n){"use strict";var r={lessThan:function(t,e){return Number(t)<Number(e)},greaterThan:function(t,e){return Number(t)>Number(e)},equal:function(t,e){return t==e}};t.exports=r},function(t,e,n){"use strict";var r={int:{valid:function(t){return parseInt(t,10)==t},message:"不是正确的整数格式"},number:{valid:function(t){return!isNaN(new Number(t))},message:"不是正确的数字格式"},email:{pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"不是正确的邮箱格式"},url:{pattern:/^((\w+):\/\/)?([A-z0-9]+[_\-]?[A-z0-9]+\.)*[A-z0-9]+\-?[A-z0-9]+\.[A-z]{2,}(\/.*)*\/?$/,message:"不是正确的网址格式"},tel:{pattern:/(^(\+\d{2,3}\/)?\d{3,4}(-)?\d{7,8}(\*\d{2,6})?$)|(^1\d{10}$)/,message:"不是正确的电话号码格式"},mobile:{pattern:/^1\d{10}$/,message:"不是正确的手机号码格式"},globalmobile:{pattern:/^[\+\-0-9a]+$/,message:"不是正确的国际号码格式"}};t.exports=r},function(t,e,n){t.exports={default:n(36),__esModule:!0}},function(t,e,n){t.exports={default:n(38),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(16),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";e.__esModule=!0;var r=n(16),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e,n){return e in t?(0,i.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){n(66),n(65),t.exports=n(61)},function(t,e,n){n(63);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(64),t.exports=n(0).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(15),i=n(58),o=n(57);t.exports=function(t){return function(e,n,u){var a,c=r(e),l=i(c.length),f=o(u,l);if(t&&n!=n){for(;l>f;)if((a=c[f++])!=a)return!0}else for(;l>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(17),i=n(2)("toStringTag"),o="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var r=n(39);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){t.exports=!n(3)&&!n(11)(function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(17);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(50),i=n(22),o=n(23),u={};n(4)(u,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=!0},function(t,e,n){var r=n(5),i=n(51),o=n(19),u=n(13)("IE_PROTO"),a=function(){},c=function(){var t,e=n(18)("iframe"),r=o.length;for(e.style.display="none",n(44).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=c(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(8),i=n(5),o=n(21);t.exports=n(3)?Object.defineProperties:function(t,e){i(t);for(var n,u=o(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(6),i=n(25),o=n(13)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(6),i=n(15),o=n(41)(!1),u=n(13)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),c=0,l=[];for(n in a)n!=u&&r(a,n)&&l.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~o(l,n)||l.push(n));return l}},function(t,e,n){var r=n(10),i=n(0),o=n(11);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",u)}},function(t,e,n){t.exports=n(4)},function(t,e,n){var r=n(14),i=n(9);t.exports=function(t){return function(e,n){var o,u,a=String(i(e)),c=r(n),l=a.length;return c<0||c>=l?t?"":void 0:(o=a.charCodeAt(c),o<55296||o>56319||c+1===l||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):o:t?a.slice(c,c+2):u-56320+(o-55296<<10)+65536)}}},function(t,e,n){var r=n(14),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(14),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(12);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(42),i=n(2)("iterator"),o=n(7);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(5),i=n(60);t.exports=n(0).getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){"use strict";var r=n(40),i=n(48),o=n(7),u=n(15);t.exports=n(20)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(10);r(r.S+r.F*!n(3),"Object",{defineProperty:n(8).f})},function(t,e,n){var r=n(25),i=n(21);n(54)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){"use strict";var r=n(56)(!0);n(20)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(62);for(var r=n(1),i=n(4),o=n(7),u=n(2)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<a.length;c++){var l=a[c],f=r[l],s=f&&f.prototype;s&&!s[u]&&i(s,u,l),o[l]=o.Array}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(r){var i,o,u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(r,a){"object"===u(e)&&void 0!==t?t.exports=a():(i=a,void 0!==(o="function"==typeof i?i.call(e,n,e,t):i)&&(t.exports=o))}("object"==("undefined"==typeof window?"undefined":u(window))?window:void 0===r||u(r),function(){var t={isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isArray:function(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)},isDate:function(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)},isNumber:function(t){return t instanceof Number||"[object Number]"===Object.prototype.toString.call(t)},isString:function(t){return t instanceof String||"[object String]"===Object.prototype.toString.call(t)},isBoolean:function(t){return"boolean"==typeof t},isFunction:function(t){return"function"==typeof t},isNull:function(t){return void 0===t||null===t},isPlainObject:function(t){if(t&&"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object&&!hasOwnProperty.call(t,"constructor")){var e;for(e in t);return void 0===e||hasOwnProperty.call(t,e)}return!1},extend:function(){var t,e,n,r,i,o,a=arguments[0]||{},c=1,l=arguments.length,f=!1;for("boolean"==typeof a&&(f=a,a=arguments[1]||{},c=2),"object"===(void 0===a?"undefined":u(a))||this.isFunction(a)||(a={}),l===c&&(a=this,--c);c<l;c++)if(null!=(t=arguments[c]))for(e in t)n=a[e],r=t[e],a!==r&&(f&&r&&(this.isPlainObject(r)||(i=this.isArray(r)))?(i?(i=!1,o=n&&this.isArray(n)?n:[]):o=n&&this.isPlainObject(n)?n:{},a[e]=this.extend(f,o,r)):void 0!==r&&(a[e]=r));return a},freeze:function(t){var e=this,n=this;return Object.freeze(t),Object.keys(t).forEach(function(r,i){n.isObject(t[r])&&e.freeze(t[r])}),t},copy:function(t){var e=null;if(this.isObject(t)){e={};for(var n in t)e[n]=this.copy(t[n])}else if(this.isArray(t)){e=[];var r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done);r=!0){var c=u.value;e.push(this.copy(c))}}catch(t){i=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}}else e=t;return e},getKeyValue:function(t,e){if(!this.isObject(t))return null;var n=null;if(this.isArray(e)?n=e:this.isString(e)&&(n=e.split(".")),null==n||0==n.length)return null;var r=null,i=n.shift(),o=i.match(new RegExp("^(\\w+)\\[(\\d+)\\]$"));if(o){i=o[1];var u=o[2];r=t[i],this.isArray(r)&&r.length>u&&(r=r[u])}else r=t[i];return n.length>0?this.getKeyValue(r,n):r},setKeyValue:function(t,e,n,r){if(!this.isObject(t))return!1;var i=null;if(this.isArray(e)?i=e:this.isString(e)&&(i=e.split("."),r=t),null==i||0==i.length)return!1;var o=null,u=0,a=i.shift(),c=a.match(new RegExp("^(\\w+)\\[(\\d+)\\]$"));if(c){if(a=c[1],u=c[2],o=t[a],this.isArray(o)&&o.length>u){if(i.length>0)return this.setKeyValue(o[u],i,n,r);o[u]=n}}else{if(i.length>0)return this.setKeyValue(t[a],i,n,r);t[a]=n}return r},toArray:function(t,e,n){var r="";if(!this.isObject(t))return[];this.isString(n)&&(r=n);var i=[];for(var o in t){var u=t[o],a={};this.isObject(u)?a=u:a[r]=u,e&&(a[e]=o),i.push(a)}return i},toObject:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={},i=0;i<t.length;i++){var o=t[i];this.isObject(o)?"count"==e?r[i]=o:(r[o[e]]=o,n&&(r[o[e]].count=i)):r[o]=o}return r},saveLocal:function(t,e){return!!(window.localStorage&&JSON&&t&&e)&&("object"==(void 0===e?"undefined":u(e))&&(e=JSON.stringify(e)),window.localStorage[t]=e,!0)},getLocal:function(t,e){if(window.localStorage&&JSON&&t){var n=window.localStorage[t];if(!e||"json"!=e||void 0===n)return n;try{return JSON.parse(n)}catch(t){return""}}return null},getLocal2Json:function(t){if(window.localStorage&&JSON&&t){var e=window.localStorage[t];if(this.isNull(e))return e;try{return JSON.parse(e)}catch(t){return""}}return null},removeLocal:function(t){return window.localStorage&&JSON&&t&&(window.localStorage[t]=null),null},saveCookie:function(t,e,n,r){var i=!!navigator.cookieEnabled;if(t&&i){r=r||"/","object"==(void 0===e?"undefined":u(e))&&(e=JSON.stringify(e));var o=void 0;return n&&(o=new Date,o.setTime(o.getTime()+1e3*n)),document.cookie=t+"="+escape(e)+(n?";expires="+o.toGMTString():"")+";path="+r,!0}return!1},getCookie:function(t){var e=!!navigator.cookieEnabled;if(t&&e){var n=document.cookie.match(new RegExp("(^| )"+t+"=([^;]*)(;|$)"));if(null!==n)return unescape(n[2])}return null},clearCookie:function(){var t=document.cookie.match(/[^ =;]+(?=\=)/g);if(t)for(var e=t.length;e--;)document.cookie=t[e]+"=0;expires="+new Date(0).toUTCString()},removeCookie:function(t,e){var n=!!navigator.cookieEnabled;if(t&&n){var r=new Date;e=e||"/",r.setTime(r.getTime()-1);var i=this.getCookie(t);return null!==i&&(document.cookie=t+"="+i+";expires="+r.toGMTString()+";path="+e),!0}return!1},uuid:function(){var t=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}};return t.valueForKeypath=t.getKeyValue,t.setValueForKeypath=t.setKeyValue,t})}).call(e,n(67))},function(t,e,n){t.exports=n(27)}])});
// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).allocUnsafe=r()}(this,(function(){"use strict";var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(t){return"number"==typeof t}function i(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function o(t,r,e){var n=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=e?t+i(o):i(o)+t,n&&(t="-"+t)),t}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function f(t){var r,e,i;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,i=parseInt(e,10),!isFinite(i)){if(!n(e))throw new Error("invalid integer. Value: "+e);i=0}return i<0&&("u"===t.specifier||10!==r)&&(i=4294967295+i+1),i<0?(e=(-i).toString(r),t.precision&&(e=o(e,t.precision,t.padRight)),e="-"+e):(e=i.toString(r),i||t.precision?t.precision&&(e=o(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===u.call(t.specifier)?u.call(e):a.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var s=Math.abs,c=String.prototype.toLowerCase,h=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function m(t){var r,e,i=parseFloat(t.arg);if(!isFinite(i)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+e);i=t.arg}switch(t.specifier){case"e":case"E":e=i.toExponential(t.precision);break;case"f":case"F":e=i.toFixed(t.precision);break;case"g":case"G":s(i)<1e-4?((r=t.precision)>0&&(r-=1),e=i.toExponential(r)):e=i.toPrecision(t.precision),t.alternate||(e=l.call(e,b,"$1e"),e=l.call(e,v,"e"),e=l.call(e,w,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=l.call(e,p,"e+0$1"),e=l.call(e,g,"e-0$1"),t.alternate&&(e=l.call(e,y,"$1."),e=l.call(e,d,"$1.e")),i>=0&&t.sign&&(e=t.sign+e),e=t.specifier===h.call(t.specifier)?h.call(e):c.call(e)}function E(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}var _=String.fromCharCode,A=isNaN,R=Array.isArray;function T(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function P(t){var r,e,n,i,a,u,s,c,h,l,p,g,y;if(!R(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",s=1,c=0;c<t.length;c++)if(n=t[c],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),e=n.flags,h=0;h<e.length;h++)switch(i=e.charAt(h)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,A(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,p=n.width,g=n.padRight,y=void 0,(y=p-l.length)<0?l:l=g?l+E(y):E(y)+l)),u+=n.arg||"",s+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function B(t){var r,e,n,i;for(e=[],i=0,n=S.exec(t);n;)(r=t.slice(i,S.lastIndex-n[0].length)).length&&e.push(r),e.push(U(n)),i=S.lastIndex,n=S.exec(t);return(r=t.slice(i)).length&&e.push(r),e}function I(t){var r,e;if("string"!=typeof t)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[B(t)],e=1;e<arguments.length;e++)r.push(arguments[e]);return P.apply(null,r)}var O,Y=Object.prototype,C=Y.toString,j=Y.__defineGetter__,x=Y.__defineSetter__,L=Y.__lookupGetter__,M=Y.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(L.call(t,r)||M.call(t,r)?(n=t.__proto__,t.__proto__=Y,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&j&&j.call(t,r,e.get),a&&x&&x.call(t,r,e.set),t};var k=O;function D(t,r,e){k(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function N(t){return"boolean"==typeof t}var F="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function V(){return F&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var $=Object.prototype.hasOwnProperty;var G,Z="function"==typeof Symbol?Symbol:void 0,W="function"==typeof Z?Z.toStringTag:"";G=V()?function(t){var r,e,n,i,o;if(null==t)return z.call(t);e=t[W],o=W,r=null!=(i=t)&&$.call(i,o);try{t[W]=void 0}catch(r){return z.call(t)}return n=z.call(t),r?t[W]=e:delete t[W],n}:function(t){return z.call(t)};var X=G,K=Boolean,q=Boolean.prototype.toString;var J=V();function H(t){return"object"==typeof t&&(t instanceof K||(J?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===X(t)))}function Q(t){return N(t)||H(t)}D(Q,"isPrimitive",N),D(Q,"isObject",H);var tt="object"==typeof self?self:null,rt="object"==typeof window?window:null,et="object"==typeof globalThis?globalThis:null;var nt=function(t){if(arguments.length){if(!N(t))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(et)return et;if(tt)return tt;if(rt)return rt;throw new Error("unexpected error. Unable to resolve global object.")}(),it=nt.document&&nt.document.childNodes,ot=Int8Array;function at(){return/^\s*function\s*([^(]*)/i}var ut,ft=/^\s*function\s*([^(]*)/i;D(at,"REGEXP",ft),ut=Array.isArray?Array.isArray:function(t){return"[object Array]"===X(t)};var st=ut;function ct(t){return null!==t&&"object"==typeof t}var ht=function(t){if("function"!=typeof t)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!st(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(ct);function lt(t){var r,e,n,i;if(("Object"===(e=X(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ft.exec(n.toString()))return r[1]}return ct(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}D(ct,"isObjectLikeArray",ht);var pt="function"==typeof t||"object"==typeof ot||"function"==typeof it?function(t){return lt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?lt(t).toLowerCase():r};function gt(t){if(t.__esModule)return t;var r=t.default;if("function"==typeof r){var e=function t(){return this instanceof t?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var yt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},dt=[],wt=[],vt="undefined"!=typeof Uint8Array?Uint8Array:Array,bt=!1;function mt(){bt=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0;r<64;++r)dt[r]=t[r],wt[t.charCodeAt(r)]=r;wt["-".charCodeAt(0)]=62,wt["_".charCodeAt(0)]=63}function Et(t,r,e){for(var n,i,o=[],a=r;a<e;a+=3)n=(t[a]<<16)+(t[a+1]<<8)+t[a+2],o.push(dt[(i=n)>>18&63]+dt[i>>12&63]+dt[i>>6&63]+dt[63&i]);return o.join("")}function _t(t){var r;bt||mt();for(var e=t.length,n=e%3,i="",o=[],a=16383,u=0,f=e-n;u<f;u+=a)o.push(Et(t,u,u+a>f?f:u+a));return 1===n?(r=t[e-1],i+=dt[r>>2],i+=dt[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=dt[r>>10],i+=dt[r>>4&63],i+=dt[r<<2&63],i+="="),o.push(i),o.join("")}function At(t,r,e,n,i){var o,a,u=8*i-n-1,f=(1<<u)-1,s=f>>1,c=-7,h=e?i-1:0,l=e?-1:1,p=t[r+h];for(h+=l,o=p&(1<<-c)-1,p>>=-c,c+=u;c>0;o=256*o+t[r+h],h+=l,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=n;c>0;a=256*a+t[r+h],h+=l,c-=8);if(0===o)o=1-s;else{if(o===f)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),o-=s}return(p?-1:1)*a*Math.pow(2,o-n)}function Rt(t,r,e,n,i,o){var a,u,f,s=8*o-i-1,c=(1<<s)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,a=c):(a=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-a))<1&&(a--,f*=2),(r+=a+h>=1?l/f:l*Math.pow(2,1-h))*f>=2&&(a++,f/=2),a+h>=c?(u=0,a=c):a+h>=1?(u=(r*f-1)*Math.pow(2,i),a+=h):(u=r*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;t[e+p]=255&u,p+=g,u/=256,i-=8);for(a=a<<i|u,s+=i;s>0;t[e+p]=255&a,p+=g,a/=256,s-=8);t[e+p-g]|=128*y}var Tt={}.toString,Pt=Array.isArray||function(t){return"[object Array]"==Tt.call(t)};It.TYPED_ARRAY_SUPPORT=void 0===yt.TYPED_ARRAY_SUPPORT||yt.TYPED_ARRAY_SUPPORT;var St=Ut();function Ut(){return It.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function Bt(t,r){if(Ut()<r)throw new RangeError("Invalid typed array length");return It.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=It.prototype:(null===t&&(t=new It(r)),t.length=r),t}function It(t,r,e){if(!(It.TYPED_ARRAY_SUPPORT||this instanceof It))return new It(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return Ct(this,t)}return Ot(this,t,r,e)}function Ot(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);It.TYPED_ARRAY_SUPPORT?(t=r).__proto__=It.prototype:t=jt(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!It.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|Mt(r,e);t=Bt(t,n);var i=t.write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(Lt(r)){var e=0|xt(r.length);return 0===(t=Bt(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?Bt(t,0):jt(t,r);if("Buffer"===r.type&&Pt(r.data))return jt(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function Yt(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function Ct(t,r){if(Yt(r),t=Bt(t,r<0?0:0|xt(r)),!It.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function jt(t,r){var e=r.length<0?0:0|xt(r.length);t=Bt(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function xt(t){if(t>=Ut())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ut().toString(16)+" bytes");return 0|t}function Lt(t){return!(null==t||!t._isBuffer)}function Mt(t,r){if(Lt(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return cr(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return hr(t).length;default:if(n)return cr(t).length;r=(""+r).toLowerCase(),n=!0}}function kt(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return Qt(this,r,e);case"utf8":case"utf-8":return Kt(this,r,e);case"ascii":return Jt(this,r,e);case"latin1":case"binary":return Ht(this,r,e);case"base64":return Xt(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return tr(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function Dt(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function Nt(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=It.from(r,n)),Lt(r))return 0===r.length?-1:Ft(t,r,e,n,i);if("number"==typeof r)return r&=255,It.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):Ft(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function Ft(t,r,e,n,i){var o,a=1,u=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;a=2,u/=2,f/=2,e/=2}function s(t,r){return 1===a?t[r]:t.readUInt16BE(r*a)}if(i){var c=-1;for(o=e;o<u;o++)if(s(t,o)===s(r,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===f)return c*a}else-1!==c&&(o-=o-c),c=-1}else for(e+f>u&&(e=u-f),o=e;o>=0;o--){for(var h=!0,l=0;l<f;l++)if(s(t,o+l)!==s(r,l)){h=!1;break}if(h)return o}return-1}function Vt(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;a<n;++a){var u=parseInt(r.substr(2*a,2),16);if(isNaN(u))return a;t[e+a]=u}return a}function zt(t,r,e,n){return lr(cr(r,t.length-e),t,e,n)}function $t(t,r,e,n){return lr(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function Gt(t,r,e,n){return $t(t,r,e,n)}function Zt(t,r,e,n){return lr(hr(r),t,e,n)}function Wt(t,r,e,n){return lr(function(t,r){for(var e,n,i,o=[],a=0;a<t.length&&!((r-=2)<0);++a)n=(e=t.charCodeAt(a))>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function Xt(t,r,e){return 0===r&&e===t.length?_t(t):_t(t.slice(r,e))}function Kt(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,a,u,f,s=t[i],c=null,h=s>239?4:s>223?3:s>191?2:1;if(i+h<=e)switch(h){case 1:s<128&&(c=s);break;case 2:128==(192&(o=t[i+1]))&&(f=(31&s)<<6|63&o)>127&&(c=f);break;case 3:o=t[i+1],a=t[i+2],128==(192&o)&&128==(192&a)&&(f=(15&s)<<12|(63&o)<<6|63&a)>2047&&(f<55296||f>57343)&&(c=f);break;case 4:o=t[i+1],a=t[i+2],u=t[i+3],128==(192&o)&&128==(192&a)&&128==(192&u)&&(f=(15&s)<<18|(63&o)<<12|(63&a)<<6|63&u)>65535&&f<1114112&&(c=f)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),i+=h}return function(t){var r=t.length;if(r<=qt)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=qt));return e}(n)}It.poolSize=8192,It._augment=function(t){return t.__proto__=It.prototype,t},It.from=function(t,r,e){return Ot(null,t,r,e)},It.TYPED_ARRAY_SUPPORT&&(It.prototype.__proto__=Uint8Array.prototype,It.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&It[Symbol.species]),It.alloc=function(t,r,e){return function(t,r,e,n){return Yt(r),r<=0?Bt(t,r):void 0!==e?"string"==typeof n?Bt(t,r).fill(e,n):Bt(t,r).fill(e):Bt(t,r)}(null,t,r,e)},It.allocUnsafe=function(t){return Ct(null,t)},It.allocUnsafeSlow=function(t){return Ct(null,t)},It.isBuffer=pr,It.compare=function(t,r){if(!Lt(t)||!Lt(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},It.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},It.concat=function(t,r){if(!Pt(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return It.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=It.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!Lt(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},It.byteLength=Mt,It.prototype._isBuffer=!0,It.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)Dt(this,r,r+1);return this},It.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)Dt(this,r,r+3),Dt(this,r+1,r+2);return this},It.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)Dt(this,r,r+7),Dt(this,r+1,r+6),Dt(this,r+2,r+5),Dt(this,r+3,r+4);return this},It.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?Kt(this,0,t):kt.apply(this,arguments)},It.prototype.equals=function(t){if(!Lt(t))throw new TypeError("Argument must be a Buffer");return this===t||0===It.compare(this,t)},It.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},It.prototype.compare=function(t,r,e,n,i){if(!Lt(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),a=(e>>>=0)-(r>>>=0),u=Math.min(o,a),f=this.slice(n,i),s=t.slice(r,e),c=0;c<u;++c)if(f[c]!==s[c]){o=f[c],a=s[c];break}return o<a?-1:a<o?1:0},It.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},It.prototype.indexOf=function(t,r,e){return Nt(this,t,r,e,!0)},It.prototype.lastIndexOf=function(t,r,e){return Nt(this,t,r,e,!1)},It.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return Vt(this,t,r,e);case"utf8":case"utf-8":return zt(this,t,r,e);case"ascii":return $t(this,t,r,e);case"latin1":case"binary":return Gt(this,t,r,e);case"base64":return Zt(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Wt(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},It.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var qt=4096;function Jt(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function Ht(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function Qt(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=sr(t[o]);return i}function tr(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function rr(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function er(t,r,e,n,i,o){if(!Lt(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function nr(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function ir(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function or(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function ar(t,r,e,n,i){return i||or(t,0,e,4),Rt(t,r,e,n,23,4),e+4}function ur(t,r,e,n,i){return i||or(t,0,e,8),Rt(t,r,e,n,52,8),e+8}It.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),It.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=It.prototype;else{var i=r-t;e=new It(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},It.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||rr(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},It.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||rr(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},It.prototype.readUInt8=function(t,r){return r||rr(t,1,this.length),this[t]},It.prototype.readUInt16LE=function(t,r){return r||rr(t,2,this.length),this[t]|this[t+1]<<8},It.prototype.readUInt16BE=function(t,r){return r||rr(t,2,this.length),this[t]<<8|this[t+1]},It.prototype.readUInt32LE=function(t,r){return r||rr(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},It.prototype.readUInt32BE=function(t,r){return r||rr(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},It.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||rr(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},It.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||rr(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},It.prototype.readInt8=function(t,r){return r||rr(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},It.prototype.readInt16LE=function(t,r){r||rr(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},It.prototype.readInt16BE=function(t,r){r||rr(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},It.prototype.readInt32LE=function(t,r){return r||rr(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},It.prototype.readInt32BE=function(t,r){return r||rr(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},It.prototype.readFloatLE=function(t,r){return r||rr(t,4,this.length),At(this,t,!0,23,4)},It.prototype.readFloatBE=function(t,r){return r||rr(t,4,this.length),At(this,t,!1,23,4)},It.prototype.readDoubleLE=function(t,r){return r||rr(t,8,this.length),At(this,t,!0,52,8)},It.prototype.readDoubleBE=function(t,r){return r||rr(t,8,this.length),At(this,t,!1,52,8)},It.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||er(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},It.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||er(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},It.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||er(this,t,r,1,255,0),It.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},It.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||er(this,t,r,2,65535,0),It.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):nr(this,t,r,!0),r+2},It.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||er(this,t,r,2,65535,0),It.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):nr(this,t,r,!1),r+2},It.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||er(this,t,r,4,4294967295,0),It.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):ir(this,t,r,!0),r+4},It.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||er(this,t,r,4,4294967295,0),It.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):ir(this,t,r,!1),r+4},It.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);er(this,t,r,e,i-1,-i)}var o=0,a=1,u=0;for(this[r]=255&t;++o<e&&(a*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/a>>0)-u&255;return r+e},It.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);er(this,t,r,e,i-1,-i)}var o=e-1,a=1,u=0;for(this[r+o]=255&t;--o>=0&&(a*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/a>>0)-u&255;return r+e},It.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||er(this,t,r,1,127,-128),It.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},It.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||er(this,t,r,2,32767,-32768),It.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):nr(this,t,r,!0),r+2},It.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||er(this,t,r,2,32767,-32768),It.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):nr(this,t,r,!1),r+2},It.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||er(this,t,r,4,2147483647,-2147483648),It.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):ir(this,t,r,!0),r+4},It.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||er(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),It.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):ir(this,t,r,!1),r+4},It.prototype.writeFloatLE=function(t,r,e){return ar(this,t,r,!0,e)},It.prototype.writeFloatBE=function(t,r,e){return ar(this,t,r,!1,e)},It.prototype.writeDoubleLE=function(t,r,e){return ur(this,t,r,!0,e)},It.prototype.writeDoubleBE=function(t,r,e){return ur(this,t,r,!1,e)},It.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!It.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},It.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!It.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var a=Lt(t)?t:cr(new It(t,n).toString()),u=a.length;for(o=0;o<e-r;++o)this[o+r]=a[o%u]}return this};var fr=/[^+\/0-9A-Za-z-_]/g;function sr(t){return t<16?"0"+t.toString(16):t.toString(16)}function cr(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],a=0;a<n;++a){if((e=t.charCodeAt(a))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function hr(t){return function(t){var r,e,n,i,o,a;bt||mt();var u=t.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o="="===t[u-2]?2:"="===t[u-1]?1:0,a=new vt(3*u/4-o),n=o>0?u-4:u;var f=0;for(r=0,e=0;r<n;r+=4,e+=3)i=wt[t.charCodeAt(r)]<<18|wt[t.charCodeAt(r+1)]<<12|wt[t.charCodeAt(r+2)]<<6|wt[t.charCodeAt(r+3)],a[f++]=i>>16&255,a[f++]=i>>8&255,a[f++]=255&i;return 2===o?(i=wt[t.charCodeAt(r)]<<2|wt[t.charCodeAt(r+1)]>>4,a[f++]=255&i):1===o&&(i=wt[t.charCodeAt(r)]<<10|wt[t.charCodeAt(r+1)]<<4|wt[t.charCodeAt(r+2)]>>2,a[f++]=i>>8&255,a[f++]=255&i),a}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(fr,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function lr(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function pr(t){return null!=t&&(!!t._isBuffer||gr(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&gr(t.slice(0,0))}(t))}function gr(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}gt(Object.freeze({__proto__:null,Buffer:It,INSPECT_MAX_BYTES:50,SlowBuffer:function(t){return+t!=t&&(t=0),It.alloc(+t)},isBuffer:pr,kMaxLength:St})).Buffer;var yr,dr=function(){throw new Error("not implemented")},wr=(yr=dr.allocUnsafe,"function"===pt(yr));function vr(t){return"number"==typeof t}var br=Number,mr=br.prototype.toString;var Er=V();function _r(t){return"object"==typeof t&&(t instanceof br||(Er?function(t){try{return mr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===X(t)))}function Ar(t){return vr(t)||_r(t)}D(Ar,"isPrimitive",vr),D(Ar,"isObject",_r);var Rr=Number.POSITIVE_INFINITY,Tr=br.NEGATIVE_INFINITY,Pr=Math.floor;function Sr(t){return t<Rr&&t>Tr&&Pr(r=t)===r;var r}function Ur(t){return vr(t)&&Sr(t)}function Br(t){return _r(t)&&Sr(t.valueOf())}function Ir(t){return Ur(t)||Br(t)}function Or(t){return Ur(t)&&t>=0}function Yr(t){return Br(t)&&t.valueOf()>=0}function Cr(t){return Or(t)||Yr(t)}function jr(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}return D(Ir,"isPrimitive",Ur),D(Ir,"isObject",Br),D(Cr,"isPrimitive",Or),D(Cr,"isObject",Yr),wr?function(t){if(!Cr(t))throw new TypeError(jr("0GF2K",t));return dr.allocUnsafe(t)}:function(t){if(!Cr(t))throw new TypeError(jr("0GF2K",t));return new dr(t)}}));
//# sourceMappingURL=browser.js.map
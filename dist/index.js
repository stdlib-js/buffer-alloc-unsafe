"use strict";var a=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var t=a(function(I,n){
var f=require('@stdlib/assert-is-function/dist'),c=require('@stdlib/buffer-ctor/dist'),q=f(c.allocUnsafe);n.exports=q
});var o=a(function(M,u){
var g=require('@stdlib/assert-is-nonnegative-integer/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),U=require('@stdlib/buffer-ctor/dist');function m(r){if(!g(r))throw new TypeError(p('0GF2K',r));return U.allocUnsafe(r)}u.exports=m
});var l=a(function(T,s){
var w=require('@stdlib/assert-is-nonnegative-integer/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),x=require('@stdlib/buffer-ctor/dist');function N(r){if(!w(r))throw new TypeError(d('0GF2K',r));return new x(r)}s.exports=N
});var h=t(),y=o(),B=l(),i;h?i=y:i=B;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

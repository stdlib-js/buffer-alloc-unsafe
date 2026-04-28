"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=a(function(E,n){
var v=require('@stdlib/assert-is-function/dist'),f=require('@stdlib/buffer-ctor/dist'),c=v(f.allocUnsafe);n.exports=c
});var o=a(function(I,u){
var q=require('@stdlib/assert-is-nonnegative-integer/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),p=require('@stdlib/buffer-ctor/dist');function U(r){if(!q(r))throw new TypeError(g('0GF2K',r));return p.allocUnsafe(r)}u.exports=U
});var l=a(function(M,s){
var m=require('@stdlib/assert-is-nonnegative-integer/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist'),d=require('@stdlib/buffer-ctor/dist');function x(r){if(!m(r))throw new TypeError(w('0GF2K',r));return new d(r)}s.exports=x
});var N=t(),h=o(),y=l(),i;N?i=h:i=y;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

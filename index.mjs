// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-ctor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var n=t(e.allocUnsafe)?function(t){if(!r(t))throw new TypeError(s("0862V",t));return e.allocUnsafe(t)}:function(t){if(!r(t))throw new TypeError(s("0862V",t));return new e(t)};export{n as default};
//# sourceMappingURL=index.mjs.map

<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# alloc

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Allocate a [buffer][@stdlib/buffer/ctor] having a specified number of bytes.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import allocUnsafe from 'https://cdn.jsdelivr.net/gh/stdlib-js/buffer-alloc-unsafe@esm/index.mjs';
```

#### allocUnsafe( size )

**Unsafely** allocates a [buffer][@stdlib/buffer/ctor] having a specified number of bytes.

```javascript
var buf = allocUnsafe( 10 );
// returns <Buffer>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The underlying memory of returned [`Buffer`][@stdlib/buffer/ctor] instances is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
-   When the `size` is less than half the pool size (specified on the [`Buffer`][@stdlib/buffer/ctor] constructor in modern Node.js environments), memory is allocated from the [`Buffer`][@stdlib/buffer/ctor] pool for faster allocation of new [`Buffer`][@stdlib/buffer/ctor] instances.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import allocUnsafe from 'https://cdn.jsdelivr.net/gh/stdlib-js/buffer-alloc-unsafe@esm/index.mjs';

var buf;
var i;

// Repeatedly unsafely allocate memory and inspect the buffer contents...
for ( i = 0; i < 100; i++ ) {
    buf = allocUnsafe( 100 );
    console.log( buf.toString() );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/buffer-ctor`][@stdlib/buffer/ctor]</span><span class="delimiter">: </span><span class="description">Buffer.</span>
-   <span class="package-name">[`@stdlib/buffer-from-array`][@stdlib/buffer/from-array]</span><span class="delimiter">: </span><span class="description">allocate a buffer using an octet array.</span>
-   <span class="package-name">[`@stdlib/buffer-from-arraybuffer`][@stdlib/buffer/from-arraybuffer]</span><span class="delimiter">: </span><span class="description">allocate a buffer from an ArrayBuffer.</span>
-   <span class="package-name">[`@stdlib/buffer-from-buffer`][@stdlib/buffer/from-buffer]</span><span class="delimiter">: </span><span class="description">copy buffer data to a new Buffer instance.</span>
-   <span class="package-name">[`@stdlib/buffer-from-string`][@stdlib/buffer/from-string]</span><span class="delimiter">: </span><span class="description">allocate a buffer containing a provided string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/buffer-alloc-unsafe.svg
[npm-url]: https://npmjs.org/package/@stdlib/buffer-alloc-unsafe

[test-image]: https://github.com/stdlib-js/buffer-alloc-unsafe/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/buffer-alloc-unsafe/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/buffer-alloc-unsafe/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/buffer-alloc-unsafe?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/buffer-alloc-unsafe.svg
[dependencies-url]: https://david-dm.org/stdlib-js/buffer-alloc-unsafe/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/buffer-alloc-unsafe/tree/deno
[deno-readme]: https://github.com/stdlib-js/buffer-alloc-unsafe/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/buffer-alloc-unsafe/tree/umd
[umd-readme]: https://github.com/stdlib-js/buffer-alloc-unsafe/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/buffer-alloc-unsafe/tree/esm
[esm-readme]: https://github.com/stdlib-js/buffer-alloc-unsafe/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/buffer-alloc-unsafe/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/buffer-alloc-unsafe/main/LICENSE

<!-- <related-links> -->

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor/tree/esm

[@stdlib/buffer/from-array]: https://github.com/stdlib-js/buffer-from-array/tree/esm

[@stdlib/buffer/from-arraybuffer]: https://github.com/stdlib-js/buffer-from-arraybuffer/tree/esm

[@stdlib/buffer/from-buffer]: https://github.com/stdlib-js/buffer-from-buffer/tree/esm

[@stdlib/buffer/from-string]: https://github.com/stdlib-js/buffer-from-string/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->

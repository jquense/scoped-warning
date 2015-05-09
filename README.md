
scoped-warning
====================

A version of React's `warning()` function that adds a "scope" to warnsings. As with the original, setting `NODE_ENV` to `"production"` sets the warning to a noop, eliminating them completely.

```js
var scopedWarning = require('scoped-warning')

var pathWarning = scopedWarning('path')

pathInvariant(false, "failed!") // warns '[path] Invariant Violation: failed!'

scopedWarning('my-module')(false, "failed!") // warns '[my-module] Invariant Violation: failed!'
```
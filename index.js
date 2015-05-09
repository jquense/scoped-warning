/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';
var cache = Object.create(null)

/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.

 */
'use strict';
var warning = function(){}
  , w = function(){};

if ( 'production' !== process.env.NODE_ENV ) {
  w = function(scope, condition, format ) {
    var args = []
      , len = arguments.length;

    for (var idx = 2; idx < len; idx++ ) 
      args.push(arguments[idx]);
    
    if (format === undefined) {
      throw new Error(
        '[' + scope + '] `warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (!condition) {
      var argIndex = 0;
      console.warn('[' + scope + '] Warning: ' + format.replace(/%s/g, function()  { return args[argIndex++] }));
    }
  };

  warning = function(scope) {
    if (cache[scope]) return cache[scope]
    return cache[scope] = w.bind(null, scope)
  };
}

module.exports = warning;


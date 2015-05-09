var assert = require('assert')
  , warning = require('./index')

var msg = ''

console.warn = function(w){
  msg = w
}

warning('module')(false, 'Error')

assert.equal(msg, '[module] Warning: Error')

warning('awesome')(false, 'Error')

assert.equal(msg, '[awesome] Warning: Error')


var i = warning('scoped')

i(false, 'Error')

assert.equal(msg, '[scoped] Warning: Error')

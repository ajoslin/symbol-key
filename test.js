'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('real symbol', function (t) {
  var Symbol = require('./')

  t.equal(Symbol, global.Symbol, 'is reference to global symbol')
  t.equal(typeof Symbol('foo'), 'symbol')
  t.end()
})

test('fake symbol', function (t) {
  var Symbol = proxyquire('./', {
    'global/window': {
      Symbol: undefined
    }
  })

  var obj = {}
  var symbol = Symbol('foo')
  var symbol2 = Symbol('foo')

  obj[symbol] = 1
  obj[symbol2] = 2

  t.notEqual(symbol, symbol2, 'prevents duplicates')
  t.equal(obj[symbol], 1)
  t.equal(obj[symbol2], 2)

  t.end()
})

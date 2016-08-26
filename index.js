'use strict'

var global = require('global/window')
var nextId = 0

var SymbolKey = module.exports = global.Symbol || fakeSymbol

SymbolKey.polyfill = fakeSymbol

function fakeSymbol (name) {
  return '[' + name + ']_' + (nextId++)
}

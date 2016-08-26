# symbol-key [![Build Status](https://travis-ci.org/ajoslin/symbol-key.svg?branch=master)](https://travis-ci.org/ajoslin/symbol-key)

> Symbol or a string. Nothing else.


## Install

```
$ npm install --save symbol-key
```

## Usage

```js
var Symbol = require('symbol-key')
var symbol = Symbol('my_symbol')

var myObj = {}
myObj[symbol] = 1
```

## API

#### `Symbol(name)` -> `Symbol|string`

Returns a symbol, or a string if symbols aren't supported.

If symbols aren't supported, the returned string is guaranteed to be unique.

## License

MIT © [Andrew Joslin](http://ajoslin.com)

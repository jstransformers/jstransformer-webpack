# jstransformer-webpack

[Webpack](http://webpack.github.io) support for [JSTransformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-webpack/master.svg)](https://travis-ci.org/jstransformers/jstransformer-webpack)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-webpack/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-webpack?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-webpack/master.svg)](http://david-dm.org/jstransformers/jstransformer-webpack)
[![NPM version](https://img.shields.io/npm/v/jstransformer-webpack.svg)](https://www.npmjs.org/package/jstransformer-webpack)

## Installation

    npm install jstransformer-webpack

## API

```js
var webpack = require('jstransformer')(require('jstransformer-webpack'))

var options = {
  output: {
  	path: 'out',
  	filename: 'bundle.js'
  }
};
webpack.renderFileAsync('entry.js', options, function(err, data) {
  // out/bundle.js is now compiled.

  data.body
  //=> stats from http://webpack.github.io/docs/node.js-api.html
});
```

## License

MIT

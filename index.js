'use strict';

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var Promise = require('promise');
var merge = require('merge');

exports.name = 'webpack';
exports.outputFormat = 'json';

exports.renderFileAsync = function (filename, options, locals) {
  // Parse the file path.
  var file = path.parse(filename);

  // Construct the options array, cleansing the values.
  options = options || {};
  options.context = options.context || file.dir;
  options.context = fs.realpathSync(options.context);
  options.entry = options.entry || './' + file.base;

  // Merge locals into options.
  if (locals) {
    options = merge(options, locals);
  }

  // Create the promise which compiles with Webpack.
  return new Promise(function (resolve, reject) {
    // Compile with Webpack.
    webpack(options, function(error, stats) {
      // Check for hard compilation errors.
      if (error) {
        return reject(error);
      }

      // Check the soft compilation errors.
      stats = stats.toJson();
      if (stats.errors.length > 0) {
        return reject(stats.errors);
      }

      resolve(stats);
    });
  });
};
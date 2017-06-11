'use strict'

const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const merge = require('merge')

exports.name = 'webpack'
exports.outputFormat = 'json'

exports.renderFileAsync = function (filename, options, locals) {
  // Create the promise which compiles with Webpack.
  return new Promise((resolve, reject) => {
    // Parse the file path.
    const file = path.parse(filename)

    // Construct the options array, cleansing the values.
    options = options || {}
    options.context = options.context || file.dir
    options.context = fs.realpathSync(options.context)
    options.entry = options.entry || './' + file.base

    // Merge locals into options.
    if (locals) {
      options = merge(options, locals)
    }

    // Compile with Webpack.
    webpack(options, (error, stats) => {
      // Check for hard compilation errors.
      if (error) {
        return reject(error)
      }

      // Check the soft compilation errors.
      stats = stats.toJson()
      if (stats.errors.length > 0) {
        return reject(stats.errors)
      }

      return resolve(JSON.stringify(stats))
    })
  })
}

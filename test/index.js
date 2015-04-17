'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var test = require('testit');
var process = require('child_process');
var transform = require('../');

var filename = 'test/input.js';
var options = {
  output: {
    path: 'test/build',
    filename: 'index.js'
  }
};
var expected = {
  salutation: 'Hello',
  seperator: ' ',
  name: 'World!'
};

function assertEqual(output, expected) {
  console.log('   Output:\t'   + JSON.stringify(output));
  console.log('   Expected:\t' + JSON.stringify(expected));
  assert.deepEqual(output, expected);
}

test(transform.name, function (done) {
  // Compile using the Transform.
  transform.renderFileAsync(filename, options).then(function (res) {
    // Run the output file to test it.
    process.exec('node test/build', function (error, stdout, stderr) {
      if (error) {
        return done(error);
      }

      assertEqual(JSON.parse(stdout), expected);
      done();
    });
  }, function (err) {
    done(err);
  });
});

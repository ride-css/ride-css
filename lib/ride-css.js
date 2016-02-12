// copyright 2015 - this year @ Paolo Roth <iamoctod@gmail.com>
// MIT licenced

// getting dependencies
// getting path
var path = require('path');
// getting stylus
var stylus = require('stylus');

// getting package.json
var packageJSON = require(path.join(__dirname, '../package.json'));

// exporting the plugin
module.exports = exportsPlugin;
// exporting version
module.exports.version = packageJSON.version;
// exporting stylus path
module.exports.path = __dirname;

// creating the plugin function
function exportsPlugin () {
  // naming the function
  return function returnsPlugin ($stylus) {
    // whoot! it's exported!
    $stylus.include(__dirname);
  }
}

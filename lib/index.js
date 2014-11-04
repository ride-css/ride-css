// Ride css. Released under MIT licence.
// https://github.com/ride-css/ride-css/
var path = require('path');

exports = module.exports = plugin;
exports.path = __dirname;
exports.version = require(path.join(__dirname, '../package.json')).version;

function plugin () {
  return function(style){
    style.include(__dirname);
  }
}
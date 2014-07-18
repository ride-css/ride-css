// Ride css. Released under MIT licence.
// https://github.com/OctoD/ride-css/
var stylus = require('stylus')
  , path = require('path')
  , nodes = stylus.nodes
  , utils = stylus.utils;

exports = module.exports = plugin;
exports.path = __dirname;

function plugin {
  return function(style){
    style.include(__dirname);
  }
}
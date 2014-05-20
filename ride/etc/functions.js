// Ride css. Released under MIT licence.
// https://github.com/OctoD/ride-css/
var stylus = require('stylus')
  , nodes = stylus.nodes
  , utils = stylus.utils;

var plugins
  , _parseInt
  , _parseFloat;

// parseint function
_parseInt = function (param) {
  return parseInt(param.val);
}
// parsefloat function
_parseFloat = function (param) {
  return parseFloat(param.val);
}
// building the plugin
plugins = function () {
  return function (style) {
    style.define('parseInt', _parseInt);
    style.define('parseFloat', _parseFloat);
  }
}

// exporting the plugin
module.exports = plugins;
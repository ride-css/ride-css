// Ride css. Released under MIT licence.
// https://github.com/OctoD/ride-css/
var stylus = require('stylus')
  , nodes = stylus.nodes
  , utils = stylus.utils;

var plugins
  , _parseInt
  , _parseFloat
  , _replace;

// parseint function
_parseInt = function (param) {
  return parseInt(param.val);
}
// parsefloat function
_parseFloat = function (param) {
  return parseFloat(param.val);
}
// replace function
_replace = function (str, search, replace) {
  var str = str.clone().val
    , search = search.clone().val
    , replace = replace.clone().val;

  return str.replace(search, replace);
}

// building the plugin
plugins = function () {
  return function (style) {
    style.define('parseInt', _parseInt);
    style.define('parseFloat', _parseFloat);
    style.define('replace', _replace);
  }
}

// exporting the plugin
module.exports = plugins;
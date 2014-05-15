// Ride css. Released under MIT licence.
// https://github.com/OctoD/ride-css/
var plugins
  , _parseInt
  , _parseFloat;

// parseint function
_parseInt = function (number) {
  return parseInt(number.val);
}
// parsefloat function
_parseFloat = function (number) {
  return parseFloat(number.val);
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
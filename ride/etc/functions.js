var plugins,
  _parseInt,
  _parseFloat;

// parseint function
_parseInt = function (number) {
  return parseInt(number.val);
}
// parsefloat function
_parseFloat = function (number) {
  return parseFloat(number.val);
}

plugins = function () {
  return function (style) {
    style.define('parseInt', _parseInt);
    style.define('parseFloat', _parseFloat);
  }
}

module.exports = plugins;
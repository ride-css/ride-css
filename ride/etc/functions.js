var plugins,
  _parseInt,
  intRegexp;

intRegexp = /[a-zA-Z]+/g;

_parseInt = function (number) {
  return parseInt(number.val);
}
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
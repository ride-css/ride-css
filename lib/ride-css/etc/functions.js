// Ride css. Released under MIT licence.
// https://github.com/ride-css/ride-css/
// nodejs requirements
var stylus = require('stylus')
  , nodes = stylus.nodes
  , utils = stylus.utils
  // plugin variables
  , plugins
  , _id
  , _log
  , _parseInt
  , _parseFloat
  , _replace;

// returns a momentary id useful for caching
_id = function () {
  return (new Date).toISOString();
}

// a console log for debugging functions
_log = function () {
  var args = [].slice.call(arguments);

  console.log(args);
}

// parseint function
_parseInt = function (param) {
  return parseInt(param.clone().val);
}
// parsefloat function
_parseFloat = function (param) {
  return parseFloat(param.clone().val);
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
    style.define('id', _id);
    style.define('log', _log);
    style.define('parseInt', _parseInt);
    style.define('parse-int', _parseInt);
    style.define('parseFloat', _parseFloat);
    style.define('replace', _replace);
    style.define('toArray', function () {
      var vals = [].slice.call(arguments)
        , array = [];

      vals.forEach(function (value) {
        array.push(value.val);
      });
      return array;
    });
  }
}

// exporting the plugin
module.exports = plugins;
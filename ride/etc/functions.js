// Ride css. Released under MIT licence.
// https://github.com/OctoD/ride-css/
// nodejs requirements
var stylus = require('stylus')
  , nodes = stylus.nodes
  , utils = stylus.utils
  , ride = require('ride-css')
  // plugin variables
  , plugins
  , _columnWidth
  , _id
  , _log
  , _parseInt
  , _parseFloat
  , _replace;

console.log()

// calculates the column width
_columnWidth = function (columns, column, gutter) {
  var width = Math.round(((100 / columns) * column) * 10000) / 10000;

  return (new nodes.String(width)).toJSON().val;
}

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
    style.define('columnWidth', _columnWidth);
    style.define('getGrid', function (width, columns, gutter, padding) {
      var mygrid = ride.grid(width.val, columns.val, gutter.val.split(','), padding.val.split(','));
      return utils.coerceObject(mygrid, {});
    });
    style.define('id', _id);
    style.define('log', _log);
    style.define('parseInt', _parseInt);
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
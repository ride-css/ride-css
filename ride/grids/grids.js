// Ride css. Released under MIT licence.
// https://github.com/OctoD/ride-css/
var ride = require('ride-css')
  , stylus = require('stylus')
  , nodes = stylus.nodes
  , utils = stylus.utils;

// exporting
module.exports = function () {
  return function (style) {
    style.define('getGrid', function (width, columns, gutter, padding) {
      var mygrid;

      mygrid = ride.grid(width.clone().val, columns.clone().val, gutter.clone().val.split(' '), padding.clone().val.split(' '));

      return utils.coerceObject(mygrid, {});
    });
  }
}
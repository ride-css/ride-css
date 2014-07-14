// Ride css. Released under MIT licence.
// https://github.com/OctoD/ride-css/
var ride = require('ride-css')
  , stylus = require('stylus')
  , nodes = stylus.nodes
  , utils = stylus.utils;

module.exports = function () {
  return function (style) {
    style.define('getTypography', function (fontSize, lineHeight) {
      var typography
        , fontSize = fontSize.clone().val.split(' ');

      typography = ride.typography(fontSize.length ? fontSize : [1], lineHeight ? lineHeight.clone().val : undefined);

      return utils.coerceObject(typography, {});
    });
  }
}
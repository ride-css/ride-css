// Ride css. Released under MIT licence.
// https://github.com/OctoD/ride-css/
var stylus = require('stylus')
  , nodes = stylus.nodes
  , utils = stylus.utils
  , ride = require('ride-css');

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
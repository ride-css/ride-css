// Ride css. Released under MIT licence.
// https://github.com/OctoD/ride-css/
var calculateTypography
  , getFontSize
  , getHeadings
  , getLineHeight
  , getParagraph
  , setLineHeightCalculation
  , stylus = require('stylus')
  , nodes = stylus.nodes
  , utils = stylus.utils; 

// constructor object
function Typography (fontSize, lineHeight) {
  this.fontSize = fontSize;
  this.lineHeight = lineHeight;
}
// constructor for the returning object of the calculateTypography function
function TypographyObject (value, lineHeight, margin) {
  this.fontSize = parseFloat(value);
  this.lineHeight = parseFloat(lineHeight);
  this.margin = parseFloat(margin);
}

// the function wich will calculate the font-size, line-height and margin
calculateTypography = function (fontSizeArray, boolAddMargin) {
  var self = this;

  fontSizeArray = fontSizeArray.map(function (value, offset) {
    var lineHeight = self.lineHeight / value
      , margin = 0;

    if (boolAddMargin) {
      margin = lineHeight - value;
    }

    return new TypographyObject (value, lineHeight, margin);
  });

  return fontSizeArray;
}

getFontSize = function () {
  return this.fontSize;
}

getHeadings = function (boolAddMargin) {
  return this.calculateTypography(this.fontSize, boolAddMargin);
}

getLineHeight = function () {
  return this.lineHeight;
}

getParagraph = function () {
  return this.calculateTypography(this.fontSize, true);
}

setLineHeightCalculation = function (lineHeight) {
  this.lineHeight = formula.call(this, this.fontSize);
  return this;
}

Typography.prototype = {
  calculateTypography: calculateTypography,
  getFontSize: getFontSize,
  getHeadings: getHeadings,
  getLineHeight: getLineHeight,
  getParagraph: getParagraph,
  lineHeightFormula: setLineHeightCalculation
}

module.exports = function () {
  return function (style) {
    style.define('getTypography', function (fontSize, lineHeight, forceMargin) {
      var typography
        , fontSize = fontSize.clone().val.split(' ');

      fontSize = (Object.prototype.toString.call(fontSize) === '[object Array]') ? fontSize : [fontSize];

      typography = new Typography(fontSize.length ? fontSize : [1], lineHeight ? lineHeight.clone().val : undefined, forceMargin);

      return utils.coerceObject({
        headings: typography.getHeadings(),
        paragraph: typography.getParagraph()
      }, {});
    });
  }
}
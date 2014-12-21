// Ride css. Released under MIT licence.
// https://github.com/ride-css/ride-css/
var calcColumn
  , calcFloat
  , getColumns
  , getFloats
  , subtGutter
  , stylus = require('stylus')
  , nodes = stylus.nodes
  , utils = stylus.utils;

// grid constructor
function GridWidth (width, columns, gutter) {
  this.columns = columns;
  this.gutter = gutter;
  this.minColumn = width/columns;
  this.subtractPatternArray = [[0, 0], [1, 1], [1, 1], [1, 3]];
  this.width = width;
}

// calculates the column
calcColumn = function (column) {
  return (this.minColumn * column) - this.calcGutter();
}

// calculates the float
calcFloat = function (column) {
  var _gutter = this.calcGutter()
    , _width = this.calcColumn(column)

  return _width + (_gutter /2)*3;
}

// calculates a list of columns
getColumns = function () {
  var cols = []
    , index = 0
    , self = this
    , subtracted = self.calcGutter();

  while (index < self.columns - 1) {
    cols.push(self.calcColumn(index + 1));
    index++;
  }
  cols.push(self.width - subtracted);
  return cols;
}

// calculates a list of columns
getFloats = function () {
  var floats = []
    , index = 1
    , self = this;

  while (index < self.columns) {
    floats.push(self.calcFloat(index, self.gutter));
    index++;
  }
  return floats;
}

// calculates "how much width" should be subtracted from the column
subtGutter = function (gutter) {
  var length = gutter.length
    , subtractPatternArray = this.subtractPatternArray
    , subtractValue = 0;

  subtractPatternArray = subtractPatternArray[length - 1];
  subtractPatternArray.forEach(function (value) {
    subtractValue = subtractValue + parseFloat(gutter[value]);
  });
  return subtractValue;
}

// prototyping
GridWidth.prototype = {
  calcColumn: calcColumn,
  calcFloat: calcFloat, 
  calcGutter: function () {
    return subtGutter.call(this, this.gutter);
  },
  getColumns: getColumns,
  getFloats: getFloats
}

// exporting
module.exports = function () {
  return function (style) {
    style.define('getGrid', function (width, columns, gutter) {
      var mygrid = new GridWidth(width.clone().val, columns.clone().val, gutter.clone().val.split(' '));

      return utils.coerceObject({
        cols: mygrid.getColumns(),
        floats: mygrid.getFloats(),
        instance: mygrid,
        gutter: mygrid.gutter,
        subtractGutter: mygrid.calcGutter()
      }, {});
    });

    // ready to be deprecated
    // style.define('getColumn', function (width, columns, currentColumn, gutter) {
    //   var mygrid = new GridWidth(width.clone().val, columns.clone().val, gutter.clone().val.split(' '));

    //   return utils.coerceObject({
    //     cols: mygrid.calcColumn(currentColumn),
    //     floats: mygrid.getFloats(),
    //     instance: mygrid,
    //     gutter: mygrid.gutter,
    //     subtractGutter: mygrid.calcGutter()
    //   }, {});
    // });

    // style.define('getFloat', function (width, columns, currentColumn, gutter) {
    //   var mygrid = new GridWidth(width.clone().val, columns.clone().val, gutter.clone().val.split(' '));

    //   mygrid.floats = mygrid.instance;
    //   return utils.coerceObject({
    //     cols: mygrid.calcColumn(currentColumn),
    //     floats: mygrid.calcFloat(currentColumn),
    //     instance: mygrid,
    //     gutter: mygrid.gutter,
    //     subtractGutter: mygrid.calcGutter()
    //   }, {});
    // });
  }
}
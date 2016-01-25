// thanks to TJ of visionmedia. Thanks for making stylus, really.

// getting modules
var fs = require('fs');
var stylus = require('stylus');
var rideCss = require('../');

// Read test/cases directory and filter all `.styl` files, then remove
// this extension for each file in the collection and prepare to test.
var cases = fs.readdirSync('test/cases').filter(function (file) {
  // bitwise flip to treat result as truthy.
  return ~file.indexOf('.styl');
}).map(function(file){
  return file.replace('.styl', '');
});

// For each `.styl` and `.css` pair in `test/cases`, compile stylus to css
// and compare actual result to expected css.
describe('Mixin integration', function () {
  // iterating cases
  cases.forEach(function (test) {
    var name = test.replace(/[-.]/g, ' ');
    // testing
    it(name, function () {
      var path = 'test/cases/'+ test +'.styl';
      var styl = fs.readFileSync(path, 'utf8').replace(/\r/g, '');
      var css = fs.readFileSync('test/cases/'+ test +'.css', 'utf8').replace(/\r/g, '').trim();
      var style = stylus(styl).use(rideCss()).set('filename', path).define('url', stylus.url());

      if (~test.indexOf('compress')) style.set('compress', true);

      style.render(function (error, actual) {
        if (error) throw error;
        actual.trim().should.equal(css);
      });
    });
  });
});

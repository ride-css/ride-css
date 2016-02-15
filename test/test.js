// thanks to TJ. Thanks for making stylus, really.

// getting modules
var fs = require('fs');
var fsHelp = require('./fs-help');
var path = require('path');
var stylus = require('stylus');
var rideCss = require('../');

var files = []
var filesFolder = path.join(process.cwd(), './test/cases');
// return
fsHelp.utils.walkSync(filesFolder, files);

// Read test/cases directory and filter all `.styl` files, then remove
// this extension for each file in the collection and prepare to test.
var cases = {};

files.filter(function (file) {
  // bitwise flip to treat result as truthy.
  return ~file.indexOf('.styl');
}).forEach(function(file){
  var css = path.join(__dirname, file.replace('.styl', '.css'));
  var filename = file.replace('.styl', '');
  var styl = path.join(__dirname, file);
  var group = path.dirname(file.split('cases/')[1]).replace('.', 'uncategorized');

  cases[group] = cases[group] || []
  cases[group].push({
    css: fs.readFileSync(css, 'utf8').replace(/\r/g, '').replace(/\s+/g, ''),
    group: group,
    name: path.basename(filename),
    styl: fs.readFileSync(styl, 'utf8').replace(/\r/g, '')
  })
});

// For each `.styl` and `.css` pair in `test/cases`, compile stylus to css
// and compare actual result to expected css.
describe('Mixin integration', function () {
  // iterating cases
  Object.keys(cases).forEach(function (group) {

    describe(group, function () {

      cases[group].forEach(function (test) {
        var name = test.name.replace(/\/+/g, ':').replace('cases:', '').replace(/[-.]/g, ' ');
        // testing
        it(name, function () {
          var style = stylus(test.styl).use(rideCss()).set('filename', test.name).define('url', stylus.url());

          if (~test.styl.indexOf('compress')) style.set('compress', true);

          style.render(function (error, actual) {
            if (error) throw error;
            actual.replace(/\s+/g, '').trim().should.equal(test.css);
          });
        });
      });

    });
  });
});

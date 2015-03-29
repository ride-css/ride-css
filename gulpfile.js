var gulp = require('gulp');
var gulpStylus = require('gulp-stylus');
var ride = require('./lib/index.js');

gulp.task('default',['test'], function() {
    // content
});

gulp.task('test', function() {
    gulp.src('test/**.styl')
    .pipe(gulpStylus({
      use: [ride()]
    }))
    .pipe(gulp.dest(__dirname +'/test'));
});
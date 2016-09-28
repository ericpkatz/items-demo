var gulp = require('gulp');
var inject = require('gulp-inject');
var watch = require('gulp-watch');

gulp.task('default', function(){
  console.log('hello');
});


function _inject(){
  var target = gulp.src('./index.html');
  var sources = gulp.src(['./browser/app.js', './browser/**/*.js']);
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
}

gulp.task('inject', _inject);

gulp.task('watch:inject', ['inject'], function(){
  watch('./browser/**/*.js', function(){
    _inject();
 });
});


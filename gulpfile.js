'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('build', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss', ['build']);
});
const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const webpack = require('gulp-webpack');

gulp.task('default', function() {
    var scss = 'src/scss/*.scss';
    return gulp.src(scss)
    .pipe(watch(scss))
    .pipe(sass())
    .pipe(gulp.dest('dist'));
})
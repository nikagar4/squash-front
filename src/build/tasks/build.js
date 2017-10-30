var gulp = require('gulp');
var runSeq = require('run-sequence');
var fs = require('fs');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

// Main Build
gulp.task('build', cb => {
  return runSeq(['compile:sass']);
});

// sass
gulp.task('compile:sass', () => {
  // paths should be included somewhere
  let path = `./app/static/styles.scss`;
  let includes = [
    `./app/app.scss`,
    `./app/ui/styles.scss`,
    `./app/pages/styles.scss`,
    `./app/static/globals.scss`,
  ];
  return gulp
    .src(path)
    .pipe(
      sass({
        style: 'compossed',
        includePaths: includes,
      }),
    )
    .pipe(minifyCSS())
    .pipe(concat('app.min.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .on('error', sass.logError)
    .pipe(gulp.dest(`./app`));
});

var gulp            = require('gulp');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
var webserver       = require('gulp-webserver');
var autoprefixer    = require('gulp-autoprefixer');


gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('webserver', function() {
  return gulp.src( '.' )
    .pipe(webserver({
      host:             'localhost',
      port:             '1337',
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.{scss,sass}', ['sass']);
})

gulp.task('default', ['sass', 'webserver', 'watch']);


var gulp 			  = require('gulp');
var server   		= require('gulp-webserver');
var less 			  = require('gulp-less');
var ghPages     = require('gulp-gh-pages');
var path        = require("path");


// SERVER
gulp.task('server', function() {
  gulp.src('./dist/')
    .pipe(server({
      host: 'localhost',
      port: 8001,
      livereload: true,
      open: true
    }));
});

// LESS
gulp.task('less', function () {
  return gulp.src('./less/styles.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./assets/css/'));
});

// WATCH
gulp.task('watch', function() {
	gulp.watch('./less/**/*.less', ['less']);
})

// DEPLOY
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', [ 'watch', 'server' ]);

var gulp 			        = require('gulp');
var server   		      = require('gulp-webserver');
var less 			        = require('gulp-less');
var ghPages           = require('gulp-gh-pages');
var path              = require("path");
var nunjucksRender    = require('gulp-nunjucks-render');


// SERVER
gulp.task('server', function() {
  gulp.src('./site/')
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
    .pipe(gulp.dest('./site/assets/css/'));
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('./pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['tpl']
    }))
  // output files in app folder
  .pipe(gulp.dest('site'))
});

// WATCH
gulp.task('watch', function() {
	gulp.watch('./less/**/*.less', ['less']);
  gulp.watch('./pages/**/*.+(html|nunjucks)', ['nunjucks']);
})

// DEPLOY
gulp.task('deploy', function() {
  return gulp.src('./site/**/*')
    .pipe(ghPages());
});

gulp.task('default', [ 'watch', 'server' ]);

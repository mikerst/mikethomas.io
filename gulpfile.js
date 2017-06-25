// Mikethomas.io gulp file
// Annotated partly for my own benefit, partly in case anyone else is reading this.

// Gonna need these things
// NOTE: The 'require' statement tells Node to look into the node_modules folder for each package declared. Once the package is found, we assign its contents to the variable for later use.

// Canne do nought without this..
var gulp = require('gulp');

// Requirements for handling css
var less = require('gulp-less');  // Just feels leaner than sass, others
var autoprefixer = require('gulp-autoprefixer'); // Save time, output better css!
var sourcemaps = require('gulp-sourcemaps'); // Devtools-friendly addition for inspecting niceness
var sourcemaps = require('gulp-sourcemaps'); // Devtools-friendly addition for inspecting niceness
var browserSync = require('browser-sync').create(); // For auto-reloading the browser
// Dealing with errors in the pipeline
var plumber = require('gulp-plumber');

// Basic task syntax for ref
//gulp.task('task-name', function() {
  // Do stuff here
//});


// Task to compile css from less, provide a source map and autoprefix
gulp.task('compile-css', function() {
	return gulp.src('./less/styles.less')
	    .pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./'))
		.pipe(browserSync.reload({
	      stream: true
	    }))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
     port: 1234
  })
})

gulp.task('watch', ['browserSync', 'compile-css'], function(){ 
  gulp.watch('less/*.less', ['compile-css']); 
})


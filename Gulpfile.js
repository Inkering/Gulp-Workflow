// gulpfile.js
// By Dieter Brehm / Inkering on github
// https://github.com/Inkering
"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// create a seperate task for style compilation with scss/sass
gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer())
			.pipe(gulp.dest('./css/'));
});

// Create a default task that runs and watchs:
// * scss compilation
gulp.task('default',function(){
	gulp.watch('sass/**/*.scss',['styles']);
});
// gulpfile.js
// By Dieter Brehm / Inkering on github
// https://github.com/Inkering
"use strict";

// This gulpfile requires:
// * gulp (duh!)
// * gulp-sass
// * gulp-autoprefixer
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// create a seperate task for style compilation
// * compiles sass files
// * applies autoprefixer to them
// * outputs in a standard ./css/
gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer())
			.pipe(gulp.dest('./css/'));
});

// Create a main default task that runs and watchs:
// * scss compilation
gulp.task('default',function(){
	gulp.watch('sass/**/*.scss',['styles']);
});


var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var clean      = require('gulp-clean');
var react      = require('gulp-react');
var browserify = require('gulp-browserify');

var $src = 'src';
var $dst = 'build';

// Các bước build:
//	1) clean: xóa folder $dst
//  2) copy : copy index.html và index.js vào $dst
//	3) react: dịch .jsx thành js

gulp.task('clean', function(){
	return gulp.src( $dst, {read: false} )
			.pipe(plumber())
			.pipe(clean())
	;
});

gulp.task('copy', ['clean'], function(){
	return gulp.src( $src + '/index.html' )
			.pipe(plumber())
			.pipe(gulp.dest( $dst ))
	;
});

gulp.task('react', ['clean'], function(){
	return gulp.src( $src + '/**/*.jsx' )
			.pipe(plumber())
			.pipe(react())
			.pipe(gulp.dest( $dst + '/' ))
	;
});

gulp.task('copy-index-js', ['clean'], function(){
	return gulp.src( $src + '/js/index.js' )
			.pipe(plumber())
			.pipe(gulp.dest( $dst + '/js' ))
	;
});

gulp.task('browserify', ['clean', 'react', 'copy-index-js'], function(){
	return gulp.src( $dst + '/js/index.js' )
			.pipe(plumber())
			.pipe(browserify())
			.pipe(gulp.dest( $dst + '/js' ))
	;
});


gulp.task('default', ['clean', 'copy', 'react', 'copy-index-js', 'browserify']);
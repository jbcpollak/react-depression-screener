'use strict';

var gulp = require('gulp');

var ghPages = require('gulp-gh-pages');

var config = require('../config');

module.exports = gulp.task('publish', ['prod'], function () {

	return gulp.src('./build/**/*')
		.pipe(ghPages());
});

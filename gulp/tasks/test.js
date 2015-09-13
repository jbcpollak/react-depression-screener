'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('test', ['server'], function(done) {

  return runSequence('unit', 'protractor', done);

});
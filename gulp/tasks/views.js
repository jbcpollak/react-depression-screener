'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var browserSync    = require('browser-sync');

// Views task
gulp.task('views', function() {

  // Put our index.html in the dist folder
  gulp.src('app/index.html')
    .pipe(gulp.dest(config.dist.root));

});
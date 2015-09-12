'use strict';

var gulp   = require('gulp');
var Server = require('karma').Server;
var config = require('../config');

gulp.task('unit', ['views'], function(done) {
	new Server({
		configFile: config.test.karma,
		singleRun: true
	}, done).start();

});

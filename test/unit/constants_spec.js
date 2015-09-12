'use strict';

describe('Unit: Constants', function () {

	var constants = require('../../app/js/constants');

	beforeEach(function () {
	});

	it('should exist', function () {
		expect(constants).toBeDefined();
	});

	it('should have an application name', function () {
		expect(constants.appTitle).toEqual('React Depression Screener');
	});

});
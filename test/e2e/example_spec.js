/*global browser, by */

'use strict';

describe('E2E: Questions', function () {

	browser.ignoreSynchronization = true;

	beforeEach(function () {
		browser.get('/');
	});

	it('should route correctly', function () {
		expect(browser.getCurrentUrl()).toMatch('/');
	});

	it('should show question 1', function () {
		var element = browser.findElement(by.css('#question'));
		expect(element.getAttribute("title")).toEqual('Do you have little interest or pleasure in doing things?');
	});

	it('should show go to question 2', function () {
		browser.sleep(200).then(function() {
			var answer2 = browser.findElement(by.css('#answer-2'));
			answer2.click();

			var element = browser.findElement(by.css('#question'));
			expect(element.getAttribute("title")).toEqual('Are you feeling down, depressed, or hopeless?');
		});
	});
});
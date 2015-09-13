react-depression-screener
=====================================

### Demo

* [Live Demo](http://jbcpollak.github.io/react-depression-screener/)

### Build Status

[![Circle CI](https://circleci.com/gh/jbcpollak/react-depression-screener.svg?style=svg)](https://circleci.com/gh/jbcpollak/react-depression-screener)

### Notes

*  This is my first React project!
*  I decided to spend my time touching on all aspects of a robust project, rather than refining one specific aspect. Specifically, I wanted to have:
  1. Correctly functioning code
  2. A robust build system
  3. Proof-of-concept continuous integration
  4. Continuous deployment and a live demo
  5. Proof-of-concept use of a UI framework
  6. Use of the GitHub issues feature to track progress on the stories
*  Because I touched on everything, things like robust unit test coverage and fancy UI design were sacrificed.
*  I used the material-ui React components to dress up the UI a bit. After using this library I started to see how React could be useful.
*  I used a boilerplate template to get started, but it had a lot of bugs that required tweaking.
*  Getting Karma to from cleaner was a HUGE pain. It took probably 1/3 of the time of this project.
*  The integration tests work fine locally, but not on CircleCI. I decided getting them to work wasn't worth the effort.

### Blog posts I read while learning React

*  [Is ReactJS Fast (vs Angular)](http://blog.500tech.com/is-reactjs-fast/)
    Seems like the answer is "no".
*  [Using ReactJS with Angular](http://blog.500tech.com/using-reactjs-with-angularjs)
    (I didn't actually do this)
*  [React Boiler Plate](https://github.com/christianalfoni/react-app-boilerplate)
    I used this to figure out how to use reactify and setup React correctly to work with browserify
*  [Official React Tutorial](http://facebook.github.io/react/docs/tutorial.html)
    With the project organization setup 'professionally', I started working through the tutorial
*  General Stack Overflow Questions, mostly about strange gulp behavior

### TODOs

If this was a real product, this is additional work I would want to complete over time

*   all resource files should be hashcode versioned to protect against browser caching
*   Gulp configuration is more complicated than it needs to be - express? Really?
*   Add a version tag into the HTML
*   Collect JUnit test report and have CircleCI capture and preserve it
*   Re-Enable End-To-End / Integration Tests
*   Organize js files into hierarchies
*   Improved code consistency (naming conventions, organization, etc)

---

### Development

1. Clone this repo from `https://github.com/jbcpollak/react-depression-screener.git`
2. Run `npm install` from the root directory
3. Run `gulp dev` (may require installing Gulp globally `npm install gulp -g`)
4. Your browser will automatically be opened and directed to the browser-sync proxy address
5. To prepare assets for production, run the `gulp prod` task (Note: the production task does not fire up the express server, and won't provide you with browser-sync's live reloading. Simply use `gulp dev` during development. More information below)

Now that `gulp dev` is running, the server is up as well and serving files from the `/build` directory. Any changes in the `/app` directory will be automatically processed by Gulp and the changes will be injected to any open browsers pointed at the proxy address.

---

### Left over notes about testing from the Boilerplate Template I used

These might be useful debugging the E2E tests.

### Testing

This boilerplate also includes a simple framework for unit and end-to-end (e2e) testing via [Karma](http://karma-runner.github.io/) and [Jasmine](http://jasmine.github.io/). In order to test AngularJS modules, the [angular.mocks](https://docs.angularjs.org/api/ngMock/object/angular.mock) module is used.

All of the tests can be run at once with the command `gulp test`. However, the tests are broken up into two main categories:

##### End-to-End (e2e) Tests

e2e tests, as hinted at by the name, consist of tests that involve multiple modules or require interaction between modules, similar to integration tests. These tests are carried out using the Angular library [Protractor](https://github.com/angular/protractor), which also utilizes Jasmine. The goal is to ensure that the flow of your application is performing as designed from start to finish.

In this boilerplate, two end-to-end test examples are provided:

- `routes_spec.js`, which tests the functionality of our AngularJS routing
- `example_spec.js`, which tests the functionality of the example route, controller, and view

More examples can be seen at the above link for Protractor.

All e2e tests are run with `gulp protractor`. The command `npm run-script preprotractor` should be run once before running any Protractor tests (in order to update the webdrivers used by Selenium).

**Notes:**

- before running the Protractor tests, the application server must be running (start it with `gulp dev`)
- the Protractor library used for the end-to-end tests may require installing the [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html) beforehand.

##### Unit Tests

Unit tests are used to test a single module (or "unit") at a time in order to ensure that each module performs as intended individually. In AngularJS this could be thought of as a single controller, directive, filter, service, etc. That is how the unit tests are organized in this boilerplate.

An example test is provided for the following types of AngularJS modules:

- `unit/controllers/example_spec.js`
- `unit/services/example_spec.js`
- `unit/constants_spec.js`

All unit tests are run with `gulp unit`. When running unit tests, code coverage is simultaneously calculated and output as an HTML file to the `/coverage` directory.

'use strict';

var $ = require('jquery');

var React = require('react');

var injectTapEventPlugin = require('react-tap-event-plugin');

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Make sure we handle touch events
React.initializeTouchEvents(true);

var App = require('./App.js');

React.render(<App />,
    document.getElementById('content'));
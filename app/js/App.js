'use strict';

var React = require('react');

var QuestionBox = require('./QuestionBox');
var Phq9Results = require('./Phq9Results');

// Make sure we handle touch events
React.initializeTouchEvents(true);


var App = React.createClass({
    getInitialState: function() {
        return {
        };
    },
    doneWithQuestions: function(score) {
        this.setState({
            score: score
        });
    },
    resetScore: function() {
        this.setState({
            score: undefined
        });
    },
    render: function() {
        if (typeof this.state.score === 'undefined') {
            return (
                <div className="app">
                    <QuestionBox doneWithQuestions={this.doneWithQuestions} />
                </div>
            );
        }

        return (
            <div className="app">
                <Phq9Results score={this.state.score} resetScore={this.resetScore} />
            </div>
        );
    }

});

module.exports = App;
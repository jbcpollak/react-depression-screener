'use strict';

var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;

var QuestionBox = require('./QuestionBox');
var Phq9Results = require('./Phq9Results');

var App = React.createClass({
    getInitialState: function() {
        return {
        };
    },
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},

	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},
    componentWillMount: function() {
        ThemeManager.setPalette({
            accent1Color: Colors.deepOrange500
        });
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
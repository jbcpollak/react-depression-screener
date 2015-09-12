/**
 * Created by jpollak on 9/12/15.
 */
'use strict';

var React = require('react');

var questions = require('./Questions');
var AnswerList = require('./AnswerList');


var QuestionBox = React.createClass({
    getInitialState: function() {
        return {};
    },
    nextQuestion: function() {
        this.setState({
            curQuestion: 0,
            question: questions[0]
        });
    },
    componentDidMount: function() {
        this.nextQuestion();
    },
    render: function() {
        if (typeof this.state.curQuestion === 'undefined') {
            return(<div></div>)
        }
        return (
            <div className="questionBox">
                <h1>Question {this.state.curQuestion+1}</h1>
                {this.state.question}
                <AnswerList />
            </div>
        );
    }
});

module.exports = QuestionBox;

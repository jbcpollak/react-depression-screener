/**
 * Created by jpollak on 9/12/15.
 */
'use strict';

var React = require('react');

var questions = require('./Questions');
var AnswerList = require('./AnswerList');
var TherapistList = require('./TherapistList');


var QuestionBox = React.createClass({
    getInitialState: function() {
        return {
            score: 0
        };
    },
    nextQuestion: function() {
        this.setState({
            curQuestion: (typeof this.state.curQuestion === 'undefined') ? 0 : this.state.curQuestion+1
        });
    },
    handleAnswer: function(value) {
        this.setState({
            score: this.state.score + value
        });

        if (this.state.curQuestion+1 < questions.length) {
            this.nextQuestion();
        } else {
            this.props.doneWithQuestions(this.state.score);
        }
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
                <h1>Question <span id="questionId">{this.state.curQuestion+1}</span></h1>
                {questions[this.state.curQuestion]}
                <AnswerList handleAnswer={this.handleAnswer} />
            </div>
        );
    }
});

module.exports = QuestionBox;

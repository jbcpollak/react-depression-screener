/**
 * Created by jpollak on 9/12/15.
 */
'use strict';

var React = require('react');

var mui = require('material-ui');
var Card = mui.Card;
var CardTitle = mui.CardTitle;
var CardText = mui.CardText;
var CardActions = mui.CardActions;

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
            return(<div></div>);
        }

	    var subTitle = "Question " + (this.state.curQuestion+1) + " of " + questions.length;
        return (
            <Card id="questionId">
                <CardTitle title={questions[this.state.curQuestion]} subtitle={subTitle} />
	            <CardActions>
	                <AnswerList handleAnswer={this.handleAnswer} />
                </CardActions>
            </Card>
        );
    }
});

module.exports = QuestionBox;

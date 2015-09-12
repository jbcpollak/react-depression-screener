/**
 * Created by jpollak on 9/12/15.
 */
'use strict';

var React = require('react');

var answers = require('./Answers');

var AnswerList = React.createClass({
	handleClick: function(value) {
		this.props.handleAnswer(value);
	},
	render: function() {
		var answerNodes = answers.map((answer, index) =>
			<ul id={"answer-"+answer.value} key={index} onClick={this.handleClick.bind(this, answer.value)}>
				{answer.text}
			</ul>
		);
		return (
			<div className="answerList">
				{answerNodes}
			</div>
		);
	}
});

module.exports = AnswerList;
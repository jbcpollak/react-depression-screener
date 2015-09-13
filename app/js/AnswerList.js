/**
 * Created by jpollak on 9/12/15.
 */
'use strict';

var React = require('react');
var mui = require('material-ui');
var ListItem = mui.ListItem;
var List = mui.List;

var answers = require('./Answers');

var AnswerList = React.createClass({
	handleClick: function(value) {
		this.props.handleAnswer(value);
	},
	render: function() {
		var answerNodes = answers.map((answer, index) =>
			<ListItem primaryText={answer.text} id={"answer-"+answer.value} key={index} onClick={this.handleClick.bind(this, answer.value)} />
		);
		return (
			<List>
				{answerNodes}
			</List>
		);
	}
});

module.exports = AnswerList;
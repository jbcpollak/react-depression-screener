/**
 * Created by jpollak on 9/12/15.
 */
'use strict';


var React = require('react');

var answers = require('./Answers');

var AnswerList = React.createClass({
	render: function() {
		var answerNodes = answers.map(function (answer) {
			return (
				<ul value={answer.value}>
					{answer.text}
				</ul>
			);
		});
		return (
			<div className="answerList">
				{answerNodes}
			</div>
		);
	}
});

module.exports = AnswerList;
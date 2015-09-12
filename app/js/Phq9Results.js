/**
 * Created by jpollak on 9/12/15.
 */
'use strict';

var React = require('react');

var TherapistList = require('./TherapistList');

var therapists = [
	{name: "Pete Hunt", phoneNumber: "917-555-1212"},
	{name: "Jordan Walke", phoneNumber: "917-555-2131"},
	{name: "Toni Barnett", phoneNumber: "994-131-1061"}
];

function getDiagnosis(score) {

	if (score <= 4) {
		return "None";
	} else if (score <= 9) {
		return "Mild";
	} else if (score <= 14) {
		return "Moderate";
	} else if (score <= 19) {
		return "Moderately Severe";
	} else {
		return "Severe";
	}
}

var Phq9Results = React.createClass({
	getInitialState: function() {
		return {
			therapists: []
		};
	},
	componentDidMount: function() {
		// Wrap with async server call
		this.setState({
			'therapists': therapists
		});
	},
	render: function() {
		var therapistList;

		if (this.props.score >= 10) {
			therapistList = <div className="therapistList">
				<h1>Therapists</h1>
				<TherapistList therapists={this.state.therapists} />
			</div>;
		}

		return (
			<div className="phq9ResultsBox">
				<div className="diagnosis">
					<h1>Score</h1>
					{this.props.score} - {getDiagnosis(this.props.score)}
				</div>
				{therapistList}
				<div classname="retake">
					<button onClick={this.props.resetScore}>Retake Test</button>
				</div>
			</div>
		);

	}
});

module.exports = Phq9Results;
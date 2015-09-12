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
			therapists: [],
			selectedTherapistIdx: undefined
		};
	},
	componentDidMount: function() {
		// Wrap with async server call
		this.setState({
			'therapists': therapists
		});
	},
	selectTherapist: function(value) {
		this.setState({
			selectedTherapistIdx: value
		});
	},
	render: function() {
		var scoreDiv;
		var therapistList;
		var therapistConfirmation;

		if (typeof this.state.selectedTherapistIdx !== 'undefined') {
			therapistConfirmation = <div className="therapistContact">
				<p>Thank you.</p>
				<p>The office of {this.state.therapists[this.state.selectedTherapistIdx].name} will call you to set up an appointment.</p>
			</div>;
		} else {
			scoreDiv = <div className="diagnosis">
				<h1>Score</h1>
				{this.props.score} - {getDiagnosis(this.props.score)}
			</div>;

			if (this.props.score >= 10) {
				therapistList = <div className="therapistList">
					<h1>Therapists</h1>
					<TherapistList therapists={this.state.therapists} selectTherapist={this.selectTherapist} />
				</div>;
			}
		}

		return (
			<div className="phq9ResultsBox">
				{scoreDiv}
				{therapistList}
				{therapistConfirmation}
				<div className="retake">
					<button onClick={this.props.resetScore}>Retake Test</button>
				</div>
			</div>
		);

	}
});

module.exports = Phq9Results;
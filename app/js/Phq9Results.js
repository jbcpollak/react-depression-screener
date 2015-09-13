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
var FlatButton = mui.FlatButton;

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
		var scoreTitle;
		var therapistList;
		var therapistConfirmation;

		if (typeof this.state.selectedTherapistIdx !== 'undefined') {
			therapistConfirmation = <CardText>
				<p>Thank you.</p>
				<p>The office of {this.state.therapists[this.state.selectedTherapistIdx].name} will call you to set up an appointment.</p>
			</CardText>;
		} else {
			var title= "Depression Severity: " + getDiagnosis(this.props.score);
			var subtitle="Score: " + this.props.score + " out of a maximum of 27";
			scoreTitle = <CardTitle title={title} subtitle={subtitle}/>;

			if (this.props.score >= 10) {
				therapistList = <div>
					<CardTitle title="Recommended Therapists">
					</CardTitle>
					<CardText>
						<TherapistList therapists={this.state.therapists} selectTherapist={this.selectTherapist} />
					</CardText>
				</div>;
			}
		}

		return (
			<Card>
				{scoreTitle}
				{therapistList}
				{therapistConfirmation}
				<CardActions>
					<FlatButton onClick={this.props.resetScore} label="Retake Test" primary="true"/>
				</CardActions>
			</Card>
		);

	}
});

module.exports = Phq9Results;
'use strict';

var React = require('react');

var TherapistList = require('./TherapistList');
var QuestionBox = require('./QuestionBox');

var therapists = [
    {name: "Pete Hunt", phoneNumber: "917-555-1212"},
    {name: "Jordan Walke", phoneNumber: "917-555-2131"},
    {name: "Toni Barnett", phoneNumber: "994-131-1061"}
];

var TherapistBox = React.createClass({
    getInitialState: function() {
        return {'therapists': []};
    },
    componentDidMount: function() {
        // Wrap with async server call
        this.setState({
            'therapists': therapists
        });
    },
    render: function() {
        return (
            <div className="therapistBox">
                <h1>Therapists</h1>
                <TherapistList therapists={this.state.therapists} />
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <QuestionBox />
            </div>
        );
    }

});

module.exports = App;
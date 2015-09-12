'use strict';

var React = require('react');

var Therapist = React.createClass({
    render: function() {
        return (
            <div className="therapist">
                <h2 className="therapistName">
                    {this.props.name}
                </h2>
                {this.props.children}
            </div>
        );
    }
});

var TherapistList = React.createClass({
    render: function() {
        var therapistNodes = this.props.therapists.map(function (therapist) {
            return (
                <Therapist name={therapist.name}>
                    {therapist.phoneNumber}
                </Therapist>
            );
        });
        return (
            <div className="therapistList">
                {therapistNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

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
                <CommentForm />
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <TherapistBox />
            </div>
        );
    }

});

module.exports = App;
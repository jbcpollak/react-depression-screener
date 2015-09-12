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

var App = React.createClass({
    render: function() {
        return (
            <div className="therapistBox">
                <h1>Therapists</h1>
                <TherapistList therapists={this.props.therapists} />
                <CommentForm />
            </div>
        );
    }

});

module.exports = App;
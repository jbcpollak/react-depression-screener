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

module.exports = Therapist;
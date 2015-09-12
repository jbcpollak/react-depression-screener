/**
 * Created by jpollak on 9/12/15.
 */
'use strict';

var React = require('react');
var Therapist = require('./Therapist');

var TherapistList = React.createClass({
    render: function() {
        var therapistNodes = this.props.therapists.map((therapist, i) =>
            <Therapist key={i} name={therapist.name} onClick={this.props.selectTherapist.bind(this, i)}>
                {therapist.phoneNumber}
            </Therapist>
        );
        return (
            <div className="therapistList">
                {therapistNodes}
            </div>
        );
    }
});

module.exports = TherapistList;
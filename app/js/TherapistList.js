/**
 * Created by jpollak on 9/12/15.
 */
'use strict';

var React = require('react');
var Therapist = require('./Therapist');
var mui = require('material-ui');
var ListItem = mui.ListItem;
var List = mui.List;

var TherapistList = React.createClass({
    render: function () {
        var therapistNodes = this.props.therapists.map((therapist, i) =>
            <ListItem key={i} primaryText={therapist.name} secondaryText={therapist.phoneNumber} onClick={this.props.selectTherapist.bind(this, i)} />
        );
        return (
            <List>
                {therapistNodes}
            </List>
        )
    }
});

module.exports = TherapistList;
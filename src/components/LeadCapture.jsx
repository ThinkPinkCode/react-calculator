var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameFields.jsx');


var LeadCapture = React.createClass({

    onSubmit: function(e) {
        if (!this.refs.fieldEmail.state.valid){
            alert("Problem with email");
        }
        else {
            //send request to email host or server
            var httpRequestBody = {
                email: this.refs.fieldEmail.state.value,
                firstName: this.refs.fieldName.state.value,
            };
        }

    },


    render: function() {
        return(
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel panel-body">
                        <NameField type="First" ref="fieldName"/>
                        <EmailField ref="fieldEmail"/>
                        <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>

                    </div>
                </div>
            </div>
        );

    }
});

module.exports = LeadCapture;
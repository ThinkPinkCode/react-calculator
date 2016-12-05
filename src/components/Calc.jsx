var React = require('react');
var InputField = require('./InputField.jsx');
var Operation = require('./Operation.jsx');


var Calc = React.createClass({

    onSubmit: function(e) {
        if (!this.refs.input1.state.valid || !this.refs.input2.state.valid){
            alert("Invalid entry. Please make sure your values are numbers!");
        }
        else {
            //send request to email host or server
            var httpRequestBody = {
                email: this.refs.fieldEmail.state.value,
                firstName: this.refs.fieldName.state.value,
            };

        this.refs.input1.clear();
        this.refs.input2.clear();
        }

    },


    render: function() {
        return(
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel panel-body">
                        <Operation type="First" ref="fieldName"/>
                        <br/>
                        <InputField ref="input1"/>
                        <InputField ref="input2"/>
                        <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>

                    </div>
                </div>
            </div>
        );

    }
});

module.exports = Calc;
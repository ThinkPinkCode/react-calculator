var React = require('react');
var InputField = require('./InputField.jsx');
var sumResult;

var Calc = React.createClass({

    addValues: function(){
        console.log(input1.state.value);

    },

    render: function() {
        return(
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel panel-body">
                        <InputField ref="input1"/>
                        <InputField ref="input2"/>
                        <button className="btn btn-primary" onClick={this.addValues}>Add</button>

                    </div>
                </div>
            </div>
        );

    }
});

module.exports = Calc;
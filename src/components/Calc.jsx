var React = require('react');
var InputField = require('./InputField.jsx');
var Result = require('./Result.jsx');

var Calc = React.createClass({

    toAdd: function(e) {

        var valueStorage = {

            value1: this.refs.input1.state.value,
            value2: this.refs.input2.state.value,
        };

            console.log(valueStorage.value1);
            console.log(valueStorage.value2);

            this.refs.input1.clear();
            this.refs.input2.clear();


    },


    render: function() {
        return(
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel panel-body">
                        <InputField ref="input1"/>
                        <InputField ref="input2"/>
                        <button className="btn btn-primary" onClick={this.toAdd}>Add</button>
                        <Result/>

                    </div>
                </div>
            </div>
        );



    }
});

module.exports = Calc;
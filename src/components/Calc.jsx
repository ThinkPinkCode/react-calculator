var React = require('react');
var InputField = require('./InputField.jsx');
var Result = require('./Result.jsx');
//var Operation = require('./Operation.jsx');

var Calc = React.createClass({

    add: function (e) {

        var valueStorage = {

            value1: parseInt(this.refs.input1.state.value),
            value2: parseInt(this.refs.input2.state.value),
        };

        this.refs.result.setState({value:(valueStorage.value1 + valueStorage.value2)})
    },


    subtract: function (e) {

        var valueStorage = {

            value1: parseInt(this.refs.input1.state.value),
            value2: parseInt(this.refs.input2.state.value),
        };

        this.refs.result.setState({value:(valueStorage.value1 - valueStorage.value2)})
    },

    divide: function (e) {

        var valueStorage = {

            value1: parseInt(this.refs.input1.state.value),
            value2: parseInt(this.refs.input2.state.value),
        };

        this.refs.result.setState({value:(valueStorage.value1 / valueStorage.value2)})
    },

    multiply: function (e) {

        var valueStorage = {

            value1: parseInt(this.refs.input1.state.value),
            value2: parseInt(this.refs.input2.state.value),
        };

        this.refs.result.setState({value:(valueStorage.value1 * valueStorage.value2)})
    },




    clear: function(e){
        this.refs.input1.clear();
        this.refs.input2.clear();
        this.refs.result.clear();

    },


    render: function () {
        return (
            <div className="col-sm-6">
                <div className="panel panel-default">
                    <div className="panel panel-body">
                        <InputField ref="input1"/>
                        <InputField ref="input2"/>
                        <button className="btn btn-primary" onClick={this.add}>Add</button>
                        <button className="btn btn-primary" onClick={this.subtract}>Subtract</button>
                        <button className="btn btn-primary" onClick={this.divide}>Divide</button>
                        <button className="btn btn-primary" onClick={this.multiply}>Multiply</button>
                        <button className="btn btn-warning" onClick={this.clear}>Clear</button>
                        <Result ref="result"/>

                    </div>
                </div>
            </div>
        );


    }
});

module.exports = Calc;
var React = require('react');
var InputField = require('./InputField.jsx');
var Result = require('./Result.jsx');

var SimpleCalc = React.createClass({

    onChange: function (e) {

        var value1 = parseInt(this.refs.input1.state.value);
        var value2 = parseInt(this.refs.input2.state.value);

        var mathOp = e.target.value;

        switch (mathOp) {
            case "add":
                this.refs.result.setState({value: (value1 + value2)});
                break;
            case "subtract":
                this.refs.result.setState({value: (value1 - value2)});
                break;
            case "multiply":
                this.refs.result.setState({value: (value1 * value2)});
                break;
            case "divide":
                this.refs.result.setState({value: (value1 / value2)});
                break;
        }

    },

    clear: function (e) {
        this.refs.input1.clear();
        this.refs.input2.clear();
        this.refs.result.clear();

    },


    render: function () {
        return (
            <div className="col-md-offset-3 col-md-6 ">
                <div className="panel panel-default">
                    <div className="panel panel-heading">
                        <h3 className="panel-title text-center">Simple Calculator</h3>
                    </div>

                    <div className="panel panel-body">

                        <InputField ref="input1"/>


                        <InputField ref="input2"/>

                        <div className="btn-group" role="group">
                            <button className="btn btn-primary" onClick={this.onChange} value={"add"}>Add</button>
                            <button className="btn btn-primary" onClick={this.onChange} value={"subtract"}>Subtract
                            </button>
                            <button className="btn btn-primary" onClick={this.onChange} value={"multiply"}>Multiply
                            </button>
                            <button className="btn btn-primary" onClick={this.onChange} value={"divide"}>Divide</button>
                            <button className="btn btn-warning" onClick={this.clear}>Clear</button>
                        </div>



                        <Result ref="result"/>

                    </div>
                </div>
            </div>
        );


    }
});

module.exports = SimpleCalc;
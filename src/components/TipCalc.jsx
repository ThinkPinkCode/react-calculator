var React = require('react');
var InputField = require('./InputField.jsx');
var Result = require('./Result.jsx');

var TipCalc = React.createClass({

    onChange: function (e) {

        var value1= parseInt(this.refs.input1.state.value);
        var mathOp = e.target.value;

        this.refs.result.setState({value: "$"+(value1 * mathOp)});
    },

    clear: function (e) {
        this.refs.input1.clear();
        this.refs.result.clear();
    },


    render: function () {
        return (
            <div className="col-md-offset-3 col-md-6 ">
                <div className="panel panel-default">
                    <div className="panel panel-heading">
                        <h3 className="panel-title text-center">Tip Calculator</h3>
                    </div>

                    <div className="panel panel-body">

                        <InputField ref="input1"/>

                        <div className="btn-group" role="group">
                        <button className="btn btn-primary" onClick={this.onChange} value={".1"}>10%</button>
                        <button className="btn btn-primary" onClick={this.onChange} value={".15"}>15%</button>
                        <button className="btn btn-primary" onClick={this.onChange} value={".2"}>20%</button>
                        <button className="btn btn-primary" onClick={this.onChange} value={".25"}>25%</button>
                        <button className="btn btn-warning" onClick={this.clear}>Clear</button>
                        </div>


                        <Result ref="result"/>

                    </div>
                </div>
            </div>
        );


    }
});

module.exports = TipCalc;
var React = require('react');

var InputField = React.createClass({
    getInitialState: function(){
        return {valid: true, value: ""}
    },

    onChange: function (e) {
        var val = e.target.value;

        this.setState({valid: true, value: val});
    },

    clear: function(){
        this.setState({valid: true, value: ""});
    },

    render: function () {
        var formClass = this.state.valid ? "form-group" : "form-group has-error"; //what to do with this?
        return (
            <div className={formClass}>
                <input className="form-control" onChange={this.onChange} placeholder="Value" value={this.state.value}/>
            </div>

        );
    }
});

module.exports = InputField;
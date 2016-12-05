var React = require('react');


var InputField = React.createClass({
    getInitialState: function(){
        return {value: ""}
    },

    onChange: function(e) {
        var val = e.target.value;

        this.setState({value: val});
    },


    clear: function(){
        this.setState({value: ""});
    },

    render: function () {
        return (
            <div>
                <input className="form-control" onChange={this.onChange} placeholder="Value" value={this.state.value}/>
            </div>

        );
    }
});

module.exports = InputField;
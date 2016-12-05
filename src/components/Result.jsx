var React = require('react');


var Result = React.createClass({
    getInitialState: function(){
        return {value: ""}
    },

    onChange: function(e) {
        var val = e.target.value;

        this.setState({value: val});

        console.log(val);
    },


    clear: function(){
        this.setState({value: ""});
    },

    render: function () {
        return (
            <div className=".well-sm" onChange={this.onChange} placeholder="Result" value={this.state.value}/>

        );
    }
});

module.exports = InputField;
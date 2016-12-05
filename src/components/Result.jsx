var React = require('react');


var Result = React.createClass({
    getInitialState: function(){
        return {value: ""}
    },


    clear: function(){
        this.setState({value: ""});
    },


    render: function () {
        return (
            <div>
                <p>Result: {this.state.value} </p>
            </div>

        );
    }
});



module.exports = Result;
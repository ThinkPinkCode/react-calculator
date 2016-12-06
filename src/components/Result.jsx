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

                <div className="well col-md-4">
                    Result: {this.state.value}
                </div>


        );
    }
});



module.exports = Result;
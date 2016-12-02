var React = require('react');

var EmailField = React.createClass({
    onChange: function(e){

    },

    render: function() {
        return(
            <div className="form-group">
                <input className="form-control" onChange={this.onChange} placeholder="Email"/>
            </div>

        );
    }
});

module.exports = EmailField;
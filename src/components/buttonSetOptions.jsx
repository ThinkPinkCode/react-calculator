var React = require('react');

var buttonSetOptions = React.createClass({
    render: function(){
        return(

            // <div className="btn-group">
            //     <button className="btn btn-primary" onClick={this.onChange} value={"add"}>Add</button>
            //     <button className="btn btn-primary" onClick={this.onChange} value={"subtract"}>Subtract</button>
            //     <button className="btn btn-primary" onClick={this.onChange} value={"multiply"}>Multiply</button>
            //     <button className="btn btn-primary" onClick={this.onChange} value={"divide"}>Divide</button>
            //     <button className="btn btn-warning" onClick={this.clear}>Clear</button>
            // </div>

            <div className="btn-group">
                <button className="btn btn-primary" onClick={this.onChange} value={"add"}>Add</button>
                <button className="btn btn-primary" onClick={this.onChange} value={"subtract"}>Subtract</button>
                <button className="btn btn-primary" onClick={this.onChange} value={"multiply"}>Multiply</button>
                <button className="btn btn-primary" onClick={this.onChange} value={"divide"}>Divide</button>
                <button className="btn btn-warning" onClick={this.clear}>Clear</button>
            </div>

        )
    }

});

module.exports = buttonSetOptions;
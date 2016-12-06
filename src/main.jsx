var React = require('react');
var ReactDOM = require('react-dom');
var SimpleCalc = require('./components/SimpleCalc.jsx');
var TipCalc = require('./components/TipCalc.jsx');

ReactDOM.render(<SimpleCalc/>, document.getElementById('simpleCalc'));
ReactDOM.render(<TipCalc/>, document.getElementById('tipCalc'));


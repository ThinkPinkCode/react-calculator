var React = require('react');
var ReactDOM = require('react-dom');
var SimpleCalc = require('./components/SimpleCalc.jsx');
var TipCalc = require('./components/TipCalc.jsx');
/*TODO: Should I use var or const/let ? Current course uses var, but is const/let better? */

ReactDOM.render(<SimpleCalc/>, document.getElementById('simpleCalc'));
ReactDOM.render(<TipCalc/>, document.getElementById('tipCalc'));

/*General questions:
 TODO: where would Flux or Redux come in?
 TODO: how could this be written using "component will mount" etc? Is that better?
  */

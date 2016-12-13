require("babel-register");
const React = require('react');
const ReactDOM = require('react-dom');
const {App} = require('./components/App.jsx');

function main(){
	ReactDOM.render(React.createElement(App), document.getElementById('app'));
}
main();


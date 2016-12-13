const React = require('react');
const ReactDOM = require('react-dom');
const {App, AppState} = require('./components/App.jsx');

function main(){
	const state = new AppState();
	ReactDOM.render(React.createElement(App, {appState: state}), document.getElementById('app'));
}
main();

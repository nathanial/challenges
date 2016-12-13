import React from 'react';
import _ from 'lodash';
import {observable, autorun, reaction} from 'mobx';
import {observer} from 'mobx-react';
import CodeMirror from 'react-codemirror';

function LED(props){
	const style = {
		width: 20,
		height: 20,
		border: '1px solid black',
		display: 'inline-block',
		margin: 10,
		borderRadius: '50%',
		cursor: 'pointer'
	};

	if(props.on){
		style.background = '#98FB98';
	} else {
		style.background = 'white';
	}

	return (
		<div style={style} {..._.omit(props, 'on')}>
		</div>
	);
}

class Machine {

	@observable leds = [];
	@observable code = '';

	constructor(){
		const json = JSON.parse(localStorage.getItem('machine') || '{}');
		_.defaults(json, {
			leds: [
				{id: 0, on: false},
				{id: 1, on: false},
				{id: 2, on: false},
				{id: 3, on: false},
				{id: 4, on: false},
				{id: 5, on: false},
				{id: 6, on: false},
				{id: 7, on: false}
			],
			code: ''
		});

		this.leds = observable(json.leds);
		this.code = json.code;
	}

	toggleLED = (id) => {
		const led = _.find(this.leds, {id});
		led.on = !led.on;
		this.persist();
	}

	updateCode = (newCode) => {
		this.code = newCode;
		this.persist();
	}

	persist = () => {
		localStorage.setItem('machine', JSON.stringify(this));
	}
}

export class AppState {
	machine = new Machine();
}

@observer
export class App extends React.Component {
	static propTypes = {
		appState: React.PropTypes.object.isRequired
	}

	render(){
		const editorOptions = {
			lineNumbers: true
		};
		const editorStyle = {
			border: '1px solid black'
		};
		const ledPanelStyle = {
			marginTop: 10,
			marginBottom: 20,
			border: '1px solid black',
			display: 'inline-block'
		};
		const appState = this.props.appState;
		return (
			<div>
				<div style={ledPanelStyle}>
					{this._renderLEDs()}
				</div>
				<div style={editorStyle}>
					<CodeMirror value={appState.machine.code}
											onChange={this._updateCode}
											options={editorOptions} />
				</div>
			</div>
		);
	}

	_renderLEDs = () => {
		const machine = this.props.appState.machine;
		return _.map(machine.leds, (led, i) => {
			return <LED key={i} on={led.on} onClick={() => this._onToggleLED(led.id)} />
		});
	}

	_onToggleLED = (id) => {
		this.props.appState.machine.toggleLED(id);
	}

	_updateCode = (newCode) => {
		this.props.appState.machine.updateCode(newCode);
	}
}

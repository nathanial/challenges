import React from 'react';
import _ from 'lodash';
import {observable} from 'mobx';
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
		style.background = 'green';
	} else {
		style.background = 'white';
	}

	return (
		<div style={style} {..._.omit(props, 'on')}>
		</div>
	);
}

export class AppState {
	leds = observable([
		{id: 0, on: false},
		{id: 1, on: false},
		{id: 2, on: false},
		{id: 3, on: false},
		{id: 4, on: false},
		{id: 5, on: false},
		{id: 6, on: false},
		{id: 7, on: false}
	]);
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
		const appState = this.props.appState;
		return (
			<div>
				{this._renderLEDs()}
				<CodeMirror value={appState.code} onChange={this._updateCode} options={editorOptions} />
			</div>
		);
	}

	_renderLEDs = () => {
		return _.map(this.props.appState.leds, (led, i) => {
			return <LED key={i} on={led.on} onClick={() => this._onToggleLED(led)} />
		});
	}

	_onToggleLED = (toggledLED) => {
		toggledLED.on = !toggledLED.on;
	}
}

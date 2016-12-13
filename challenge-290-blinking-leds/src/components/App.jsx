const React = require('react');
const _ = require('lodash');

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

class App extends React.Component {

	state = {
		leds: [
			{id: 0, on: false},
			{id: 1, on: false},
			{id: 2, on: false},
			{id: 3, on: false},
			{id: 4, on: false},
			{id: 5, on: false},
			{id: 6, on: false},
			{id: 7, on: false}
		]
	}


	render(){
		return (
			<div>
				{this._renderLEDs()}
			</div>
		);
	}
	
	_renderLEDs = () => {
		return _.map(this.state.leds, (led, i) => {
			return <LED key={i} on={led.on} onClick={() => this._onToggleLED(led)} />
		});
	}

	_onToggleLED = (toggledLED) => {
		const newLEDS = _.map(this.state.leds,  led => {
			if(toggledLED.id === led.id){
				return {id: led.id, on: !led.on};
			}
			return led;
		});
		this.setState({
			leds: newLEDS
		});
	}
}

module.exports = {
	App
};
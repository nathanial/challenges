import React from 'react';
import _ from 'lodash';
import {buttonStyle} from './style';

export default class Button extends React.Component {

	state = {
		mouseDown: false,
		mouseOver: false
	}

	render(){
		const style = _.extend({}, buttonStyle, this.props.style || {});
		style.cursor = "default";
		if(this.state.mouseDown){
			style.background = 'linear-gradient(to bottom, #E6E6E6 0%,#f0f0f0 50%,#E6E6E6 100%)'
		}
		return (
			<div style={style}
						onMouseOver={this._onMouseOver}
						onMouseOut={this._onMouseOut}
						onMouseDown={this._onMouseDown}
						onMouseUp={this._onMouseUp}>
				{this.props.children}
			</div>
		);
	}

	componentDidMount = () => {
		document.addEventListener('mouseup', () => {
			if(this.state.mouseDown){
				this.setState({
					mouseDown: false
				});
			}
		});
	}

	_onMouseOver = () => {
		this.setState({
			mouseOver: true
		});
	}

	_onMouseOut = () => {
		this.setState({
			mouseOver: false
		});
	}

	_onMouseDown = () => {
		this.setState({
			mouseDown: true
		});
	}

	_onMouseUp = () => {
		this.setState({
			mouseDown: false
		});
	}
}

import React from 'react';
import _ from 'lodash';
import {buttonStyle} from './style';

export class Option extends React.Component {

	static propTypes = {
		label: React.PropTypes.any.isRequired,
		value: React.PropTypes.any.isRequired
	}

	state = {
		hover: false
	}

	render(){
		const optionStyle = {
			padding: 10,
			cursor: 'default'
		};
		if(this.state.hover){
			optionStyle.background = '#eee';
		}
		return (
			<div onMouseOver={this._onMouseOver}
					onMouseOut={this._onMouseOut}
					style={optionStyle}
					{..._.omit(this.props, 'label', 'value')}>
				{this.props.label}
			</div>
		);
	}

	_onMouseOver = () => {
		this.setState({
			hover: true
		});
	}

	_onMouseOut = () => {
		this.setState({
			hover: false
		});
	}

}


export class Select extends React.Component {

	static propTypes = {
		value: React.PropTypes.any.isRequired,
		options: React.PropTypes.array.isRequired,
		onChange: React.PropTypes.func.isRequired
	}

	state = {
		open: false
	};

	render(){
		const style = _.defaults({
			margin: '0 7px',
			width: 125,
			height: 25,
			fontSize: 13,
			textAlign: 'left',
			paddingLeft: 8,
		}, buttonStyle);
		if(this.state.open){
			style.background = 'white';
		}
		const selectorStyle = {
			position: 'absolute',
			right: 7,
			top: 3,
			color: '#a1a1a1',
			fontSize: 11
		};
		const selectorIconStyle = {
			display: 'block',
			height: 9
		};
		const selectedStyle = {
			textOverflow: 'ellipsis',
			width: '100px',
			overflow: 'hidden',
			height: '25px',
			whiteSpace: 'nowrap'
		};
		_.extend(style, this.props.style || {});
		return (
			<div style={style} >
				<div onClick={this._onClicked} style={{height: 25}}>
					{_.map(this.props.options, option => {
						const optionStyle = {};
						if(option === this.props.value){
							return <div style={selectedStyle} key={option}>{option}</div>;
						}
					})}
				</div>
				<div style={selectorStyle} onClick={this._onClicked}>
					<i style={selectorIconStyle} className="fa fa-caret-up" ></i>
					<i style={selectorIconStyle} className="fa fa-caret-down"></i>
				</div>
				{this._renderFlyout()}
			</div>
		);
	}

	_renderFlyout = () => {
		if(!this.state.open){
			return;
		}
		const style = {
			position: 'absolute',
			left: -1,
			top: 25,
			width: 200,
			border: '1px solid #c2c2c2',
			background: 'white'
		};
		return (
			<div style={style}>
				{_.map(this.props.options, option => {
					return (
						<Option key={option}
										value={option}
										label={option}
										onClick={() => this._onOptionClick(option)} />
					);
				})}
			</div>
		);
	}

	_onClicked = () => {
		this.setState({
			open: !this.state.open
		});
	}

	_onOptionClick = (fontFamily) => {
		this.props.onChange(fontFamily);
		this.setState({open: false});
	}
}

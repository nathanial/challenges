import React from 'react';
import _ from 'lodash';


const fontFamilies = [
	'Georgia',
	'Arial',
	'Cantarell',
	'DejuVu Sans Mono'
];

class Option extends React.Component {

	static propTypes = {
		label: React.PropTypes.string.isRequired
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

export default class FontFamilySelect extends React.Component {

	static propTypes = {
		value: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func.isRequired
	}

	state = {
		open: false
	}

	render(){
		const style = {
			position: 'relative',
			width: 125,
			height: 25,
			background: 'linear-gradient(to top, #f0f0f0, #f7f7f7)',
			border: '1px solid #c2c2c2',
			color: '#636363',
			fontSize: 13,
			textAlign: 'left',
			paddingLeft: 8,
			verticalAlign: 'middle',
			lineHeight: '25px',
			transition: 'background 0.2s ease-in-out'
		};
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
		console.log("RENDER IT", this.props.value);
		return (
			<div style={style} >
				<div onClick={this._onClicked} style={{height: 25}}>
					{_.map(fontFamilies, fontFamily => {
						const optionStyle = {};
						if(fontFamily === this.props.value){
							return <div style={selectedStyle} key={fontFamily}>{fontFamily}</div>;
						}
					})}
				</div>
				<div style={selectorStyle}>
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
				{_.map(fontFamilies, fontFamily => {
					return <Option key={fontFamily} value={fontFamily} label={fontFamily} onClick={() => this._onOptionClick(fontFamily)} />
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

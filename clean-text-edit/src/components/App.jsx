import React from 'react';
import _ from 'lodash';
import {observable, autorun, reaction} from 'mobx';
import {observer} from 'mobx-react';

export class AppState {
	textSettings = observable({
		fontFamily: 'Georgia'
	});
}

const fontFamilies = [
	'Georgia',
	'Arial',
	'Cantarell',
	'DejuVu Sans Mono'
];

class FontFamilySelect extends React.Component {

	static propTypes = {
		value: React.PropTypes.string.isRequired
	}

	render(){
		const style = {
			position: 'relative',
			borderRadius: 3,
			width: 125,
			height: 25,
			background: 'linear-gradient(to top, #f0f0f0, #f7f7f7)',
			border: '1px solid #c2c2c2',
			color: '#636363',
			fontSize: 13,
			textAlign: 'left',
			paddingLeft: 8,
			verticalAlign: 'middle',
			lineHeight: '25px'
		};
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
		return (
			<div style={style}>
				{_.map(fontFamilies, fontFamily => {
					const optionStyle = {};
					if(fontFamily === this.props.value){
						return <div key={fontFamily}>{fontFamily}</div>;
					}
				})}
				<div style={selectorStyle}>
					<i style={selectorIconStyle} className="fa fa-caret-up" ></i>
					<i style={selectorIconStyle} className="fa fa-caret-down"></i>
				</div>
			</div>
		);
	}
}

class FontSizeSelect extends React.Component {
	render(){
		return (
			<div></div>
		);
	}
}

class ColorSwatch extends React.Component {
	render(){
		return (
			<div></div>
		);
	}
}

class TextStyleButtons extends React.Component {
	render(){
		return (
			<div></div>
		);
	}
}

class AlignmentButtons extends React.Component {
	render(){
		return (
			<div></div>
		);
	}
}

class ListButton extends React.Component {
	render(){
		return (
			<div></div>
		);
	}
}

class LineSpacingButton extends React.Component {
	render(){
		return (
			<div></div>
		);
	}
}

class TextControls extends React.Component {

	static propTypes = {
		textSettings: React.PropTypes.object.isRequired
	}

	render(){
		const colorSwatchStyle = {
			width: 20,
			height: 20,
			border: '1px solid black',
			display: 'inline-block'
		};

		const settings = this.props.textSettings;

		return (
			<div>
				<FontFamilySelect value={settings.fontFamily} onChange={this._onChangeFontFamily} />
				<FontSizeSelect value={settings.fontSize} onChange={this._onChangeFontSize} />
				<ColorSwatch value={settings.color} onChange={this._onChangeColor} />
				<TextStyleButtons value={settings.textStyle} onChange={this._onChangeTextStyle} />
				<AlignmentButtons value={settings.alignment} onChange={this._onChangeAlignment} />
				<ListButton onClick={this._createList} />
				<LineSpacingButton value={settings.lineSpacing} onChange={this._onChangeLineSpacing} />
			</div>
		);
	}
}

@observer
export class App extends React.Component {
	static propTypes = {
		appState: React.PropTypes.object.isRequired
	}

	render(){
		const appState = this.props.appState;
		return (
			<div>
				<TextControls textSettings={appState.textSettings} />
			</div>
		);
	}
}

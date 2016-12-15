import React from 'react';
import _ from 'lodash';
import {observable, autorun, reaction} from 'mobx';
import {observer} from 'mobx-react';
import FontFamilySelect from './FontFamilySelect';
import FontSizeSelect from './FontSizeSelect';

export class AppState {
	textSettings = observable({
		fontFamily: 'Georgia',
		fontSize: 12
	});
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

@observer
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

	_onChangeFontFamily = (fontFamily) => {
		this.props.textSettings.fontFamily = fontFamily;
	}

	_onChangeFontSize = (size) => {
		this.props.textSettings.fontSize = size;
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

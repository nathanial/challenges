import React from 'react';
import _ from 'lodash';
import {Select, Option} from './Select';

const fontFamilies = [
	'Georgia',
	'Arial',
	'Cantarell',
	'DejuVu Sans Mono'
];

export default class FontFamilySelect extends React.Component {
	static propTypes = {
		value: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func.isRequired
	}

	render(){
		return (
			<Select value={this.props.value}
				onChange={this.props.onChange}
				options={fontFamilies} />
		);
	}
}

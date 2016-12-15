import React from 'react';
import _ from 'lodash';
import {Select, Option} from './Select';

const fontSizes = [
	12,
	14,
	16,
	18,
	24,
	32,
	72
]

export default class FontSizeSelect extends React.Component {

	static propTypes = {
		value: React.PropTypes.number.isRequired,
		onChange: React.PropTypes.func.isRequired
	}

	render(){
		return (
			<Select value={this.props.value}
							options={fontSizes}
							onChange={this.props.onChange}
							style={{width: 40}} />
		);
	}
}

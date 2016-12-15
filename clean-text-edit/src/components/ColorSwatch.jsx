import React from 'react';
import _ from 'lodash';
import {buttonStyle} from './style';

export default class ColorSwatch extends React.Component {
	render(){
		const style = _.defaults({
			margin: '0 7px',
			width: 30,
			height: 25,
		}, buttonStyle);
		const swatchStyle = {
			position: 'relative',
			top: 6,
			left: 6,
			width: 18,
			height: 13,
			background: '#636669',
			outline: '1px solid black'
		};
		return (
			<div style={style}>
				<div style={swatchStyle}></div>
			</div>
		);
	}
}

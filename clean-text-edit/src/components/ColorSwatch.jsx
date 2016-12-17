import React from 'react';
import _ from 'lodash';
import {buttonStyle} from './style';
import Button from './Button';

export default class ColorSwatch extends React.Component {
	render(){
		const style = {
			margin: '0 7px',
			width: 30,
			height: 25,
		};
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
			<Button style={style}>
				<div style={swatchStyle}></div>
			</Button>
		);
	}
}

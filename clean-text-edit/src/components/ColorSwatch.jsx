import React from 'react';
import _ from 'lodash';

export default class ColorSwatch extends React.Component {
	render(){
		const style = {
			position: 'relative',
			display: 'inline-block',
			margin: '0 7px',
			width: 30,
			height: 25,
			lineHeight: 25,
			background: 'linear-gradient(to top, #f0f0f0, #f7f7f7)',
			border: '1px solid #c2c2c2',
			color: '#636363',
			verticalAlign: 'middle',
			transition: 'background 0.2s ease-in-out'
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
			<div style={style}>
				<div style={swatchStyle}></div>
			</div>
		);
	}
}

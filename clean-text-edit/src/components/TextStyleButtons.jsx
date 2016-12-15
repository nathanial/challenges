import React from 'react';
import _ from 'lodash';
import {buttonStyle} from './style';

export default class TextStyleButtons extends React.Component {
	render(){
		const buttonInnerStyle = {
				fontSize: 11,
				position: 'relative',
				top: -1
		};

		return (
			<div style={{display: 'inline-block'}}>
				<div style={buttonStyle}>
					<i style={buttonInnerStyle} className="fa fa-bold"></i>
				</div>
				<div style={_.extend({}, buttonStyle, {borderLeftWidth: 0, borderRightWidth: 0})}>
					<i style={buttonInnerStyle} className="fa fa-italic"></i>
				</div>
				<div style={buttonStyle}>
					<i style={buttonInnerStyle} className="fa fa-underline"></i>
				</div>
			</div>
		);
	}
}

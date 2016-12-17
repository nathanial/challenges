import React from 'react';
import _ from 'lodash';
import {buttonStyle} from './style';
import Button from './Button';

export default class AlignmentButtons extends React.Component {
	render(){
		const buttonInnerStyle = {
				fontSize: 11,
				position: 'relative',
				top: -1
		};
		return (
			<div style={{display: 'inline-block', margin: '0 7px'}}>
				<Button>
					<i style={buttonInnerStyle} className="fa fa-align-left"></i>
				</Button>
				<Button style={_.extend({}, buttonStyle, {borderLeftWidth: 0, borderRightWidth: 0})}>
					<i style={buttonInnerStyle} className="fa fa-align-center"></i>
				</Button>
				<Button>
					<i style={buttonInnerStyle} className="fa fa-align-right"></i>
				</Button>
			</div>
		);
	}
}

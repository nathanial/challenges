import React from 'react';
import _ from 'lodash';
import {buttonStyle} from './style';
import Button from './Button';

export default class TextStyleButtons extends React.Component {
	render(){
		const buttonInnerStyle = {
				fontSize: 11,
				position: 'relative',
				top: -1
		};
		return (
			<div style={{display: 'inline-block', margin: '0 7px'}}>
				<Button>
					<i style={buttonInnerStyle} className="fa fa-bold"></i>
				</Button>
				<Button style={{borderLeftWidth: 0, borderRightWidth: 0}}>
					<i style={buttonInnerStyle} className="fa fa-italic"></i>
				</Button>
				<Button>
					<i style={buttonInnerStyle} className="fa fa-underline"></i>
				</Button>
			</div>
		);
	}
}

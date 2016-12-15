import React from 'react';
import _ from 'lodash';
import {observable, autorun, reaction} from 'mobx';
import {observer} from 'mobx-react';

export class AppState {
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
			</div>
		);
	}
}

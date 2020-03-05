import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import SockJsClient from 'react-stomp'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(4),
		},
	},
}));

export default class PersonStatus extends React.Component {

	constructor() {
		super();
		this.state = {
			sittingActivityValue: 10,
			sittingActivityComplete: 0,
			walkingActivityValue: 10,
			walkingActivityComplete: 0,


		}
	}


	handleMessage = (activityMessage) => {
		let {activity} = activityMessage;
		console.log(activity);

		if (activity === 'sitting') {

			let progvalue = this.state.sittingActivityValue + 0.5;

			this.setState({sittingActivityValue: progvalue})
			if (progvalue > 100.0) {
				this.setState({sittingActivityComplete: 100})
			}
			console.log(this.state.sittingActivityValue);
		} else if (activity === 'walking') {

			let progvalue = this.state.walkingActivityValue + 0.5;

			this.setState({walkingActivityValue: progvalue})
			if (progvalue > 100.0) {
				this.setState({wal: 100})
			}
			console.log(this.state.walkingActivityComplete);
		}
	}

	render() {
		return (
			<div style={{marginTop: "10px"}}>
				<SockJsClient
					url="http://169.50.8.253:8080/ws"
					topics={['/user/queue/notify']}
					onMessage={(message) => this.handleMessage(message)}/>
				<a>sitting</a>
				<LinearProgress variant="buffer" value={this.state.sittingActivityComplete}
								valueBuffer={this.state.sittingActivityValue}/>
				<div/>
				<a>walking</a>
				<LinearProgress variant="buffer" value={this.state.walkingActivityComplete}
								valueBuffer={this.state.walkingActivityValue} color="secondary"/>

			</div>
		);
	}

}



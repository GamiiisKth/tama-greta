import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Button from "@material-ui/core/Button";

var bicycle = require('./Bicycle.jpg');
var hiking = require('./Hiking.jpg');
var skiing = require('./Skiing.jpg');
var Automobile = require('./Automobile, Car.jpg');
var Aircraft_Airplane = require('./Aircraft_Airplane.jpg');
var Steak = require('./Steak.jpg');

const useStyles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
	},
	gridList: {
		width: 600,
		height: 500,
	},
}
const tileData = [
	{
		img: hiking,
		title: 'Image',
		author: 'author',
		cols: 2,
	}, {
		img: skiing,
		title: 'Image',
		author: 'author',
		cols: 2,
	}, {
		img: bicycle,
		title: 'Image',
		author: 'author',
		cols: 2,
	}
];

export default class Review extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			response: "",
			sum: 30,

		}

	}


	componentDidMount() {
	//	this.getData();
	}

	getData() {
		// create a new XMLHttpRequest
		var xhr = new XMLHttpRequest()

		// get a callback when the server responds
		xhr.addEventListener('load', () => {
			// update the state of the component with the result here
			//	console.log(xhr.responseText)
			//	console.log(JSON.parse(xhr.responseText)['Items'])

			this.setState({response: JSON.parse(xhr.responseText)['Items']})
		})
		// open the request with the verb and the url
		xhr.open('GET', 'https://kx5wy0we8c.execute-api.eu-central-1.amazonaws.com/dev/image-labels')
		xhr.setRequestHeader('Accept', '*/*');
		xhr.setRequestHeader('Content-Type', "application/json");


		// send the request
		xhr.send()

	}


	render() {


		//const {score} = this.state.response[0];

		//console.log();
		for (let [key, value] of Object.entries(this.state.response)) {
			console.log(`${key}: ${value.score}: ${value.PK}`);
			let scoreValue=`${value.score}`;
			if (`${value.PK}` === 'Hiking.jpg' || `${value.PK}` === 'Skiing.jpg' || `${value.PK}` === 'Bicycle.jpg') {

				let scoreValue=`${value.score}`;

				console.log(scoreValue)
				this.setState({sum: scoreValue})

			}
		}

		return (
			<div className={useStyles.root}>
				<GridList cellHeight={180} className={useStyles.gridList}>
					<GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
						<ListSubheader component="div">December</ListSubheader>
					</GridListTile>
					{tileData.map(tile => (
						<GridListTile key={tile.img}>
							<img src={tile.img} alt={tile.title}/>
							<GridListTileBar
								title={tile.title}
								subtitle={<span>by: {tile.author}</span>}
								actionIcon={
									<IconButton aria-label={`info about ${tile.title}`} className={useStyles.icon}>
										<InfoIcon/>
									</IconButton>
								}
							/>
						</GridListTile>
					))}
				</GridList>

				{this.state.sum}


				<Button style={{
					width: "200px",
					height: "100px",
					position: "fixed",
					backgroundColor: "blue",
					top: "80%",
					left: "50%",
					marginTop: " -100px",
					marginLeft: "-100px"
				}} href="/status" onClick={(e) => this.setState({progress: 1})} variant="contained" color="primary">
					FACEBOOK
				</Button>
			</div>

		)
	}

}

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 */


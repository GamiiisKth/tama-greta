import * as React from "react";
import Button from "@material-ui/core/Button";
import ProgresStatus from "./ProgresStatus";


const httpGet = () => {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", "https://kx5wy0we8c.execute-api.eu-central-1.amazonaws.com/dev/image-labels", false); // false for synchronous request
	xmlHttp.send(null);
	console.log(xmlHttp.responseText);
	return xmlHttp.responseText;
}

export default class Login extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			progress: 0,
			latestMessage: null,
			response: ""
		}
	}


	render() {
		return (


			<div style={{width: "100%", height: "100%"}}>

				<Button style={{
					width: "200px",
					height: "100px",
					position: "fixed",
					backgroundColor: "blue",
					top: "40%",
					left: "50%",
					marginTop: " -100px",
					marginLeft: "-100px"
				}} href="/review" variant="contained" color="primary">
					INSTAGRAM
				</Button>
				<Button style={{
					width: "200px",
					height: "100px",
					position: "fixed",
					backgroundColor: "blue",
					top: "60%",
					left: "50%",
					marginTop: " -100px",
					marginLeft: "-100px"
				}} variant="contained" color="primary">
					TWITTER
				</Button>

			</div>

		)


	}

}

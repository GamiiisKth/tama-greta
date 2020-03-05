import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import App from "./App.js";
import Login from "./Login.js";
import PersonStatus from "./PersonProgress.js";
import Review from "./Review";


export default class Main extends React.Component {


	render() {

		return (
			<Switch>
				<Route path="/main" component={App}/>
				<Route name="login" path="/login" component={Login}/>
				<Route name="status" path="/status" component={PersonStatus}/>
				<Route name="review" path="/review" component={Review}/>
				<Redirect from="/" to="/main"/>
			</Switch>

		)
	}

}

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './../Components/Profile/index.js';
import Timeline from './../Components/Timeline/index.js';

class routing extends Component{

	render(){
		return(
			<Router>
				<div>
					<Route exact path="/" component={Profile} />
					<Route path="/timeline" component={Timeline} />
				</div>
			</Router>
		);
	}

}

export default routing;
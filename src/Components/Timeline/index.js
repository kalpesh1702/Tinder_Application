import React, { Component } from 'react';
import Header from './../Util/header.js';
import * as Services from './../../Services/service.js';
import * as Consts from './../../Constants/constant.js';
import Loader from './../Loader/loader.js';
import {withRouter} from 'react-router-dom';
import LikeProfileRenderer from './likeprofilerenderer.js';

class Timeline extends Component {

	constructor(props){
		super(props);

		this.state ={
			'isLoading': true,
			'likesInfo' : []
		}
	}

	componentDidMount(){

		let fetchAllLikes = JSON.parse(localStorage.getItem("likesInfo") || "[]");

		this.setState({
			'isLoading' : false,
			'likesInfo' : fetchAllLikes
		})

	}

	backClickHandler = () => {

		this.props.history.push('/');

	}

	render(){

		return(

			<div className="app-wrap">

				<Header heading="Timeline" backClickHandler={this.backClickHandler}/>

				{
						this.state.isLoading
					?
						<Loader />
					:
						<LikeProfileRenderer likesInfo={this.state.likesInfo} />
				}

			</div>
		);
	}

}

export default withRouter(Timeline);
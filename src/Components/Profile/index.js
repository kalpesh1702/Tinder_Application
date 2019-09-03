import React, { Component } from 'react';
import Header from './../Util/header.js';
import ProfilePic from './profilepic.js';
import Footer from './footer.js';
import * as Services from './../../Services/service.js';
import * as Consts from './../../Constants/constant.js';
import Loader from './../Loader/loader.js';
import {withRouter} from 'react-router-dom';

class Profile extends Component {

	constructor(props){
		super(props);

		this.state ={
			'isLoading': true,
			'profilepic' : ""
		}
	}

	componentDidMount(){

		this.fetchProfilePicApi();

	}

	fetchProfilePicApi = () => {

		Services.axiosGET(Consts.API_URIS)

		.then((response) => {

			if(response && response.data && response.data.status == 'success'){

				this.setState({
					'profilepic': response.data.message,
					'isLoading' : false
				});

			}
			else{
				alert('Oops Error Occured, Error = ' + response);
			}

		});

	}

	likeHandler = (event) => {

		if(event.target.name == 'timeline'){
			this.props.history.push('/timeline');
		}

		if(event.target.name == 'like'){

			let fetchAllLikes = JSON.parse(localStorage.getItem("likesInfo") || "[]");

			fetchAllLikes.push({
				'src' : this.state.profilepic,
				'time' : new Date()
			});

			localStorage.setItem("likesInfo", JSON.stringify(fetchAllLikes));

		}

		this.setState({
			'isLoading' : true
		});

		this.fetchProfilePicApi();

		console.log(JSON.parse(localStorage.getItem("likesInfo") || "[]"));
	}

	render(){

		return(

			<div className="app-wrap">

				<Header heading="Dog Matcher"/>

				{
						this.state.isLoading
					?
						<Loader />
					:
						<ProfilePic imageSource={this.state.profilepic} />
				}


				<Footer likeHandler={this.likeHandler}/>

			</div>
		);
	}

}

export default withRouter(Profile);
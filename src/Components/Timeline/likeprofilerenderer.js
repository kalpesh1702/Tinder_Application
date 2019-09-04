import React from 'react';
import Moment from 'react-moment';

let LikeProfileRenderer = (props) => {

		let renderLikeList = props.likesInfo.map( (item, index) =>{
 			return(
				<div className="listBox" key={index}>

					<div className="imageBox">
						<img className="imageDesign" src={item.src} alt="Dog Image" />
					</div>

					<div className="timeBox">
						Liked <Moment fromNow>{item.time}</Moment>
					</div>

				</div>
			);
		});

		if(renderLikeList.length <= 0){
			renderLikeList = <h3 className="dataNotFound"> No Information Found </h3	>
		}

	return(
		<div className="likedList">
			{renderLikeList}
		</div>

	);

}

export default LikeProfileRenderer;
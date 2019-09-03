import React from 'react';

let LikeProfileRenderer = (props) => {

		let renderLikeList = props.likesInfo.map( (item, index) =>{
			return(
				<h5>{ item.src } </h5>
			);
		});

	return(
		<div>
			{renderLikeList}
		</div>

	);

}

export default LikeProfileRenderer;
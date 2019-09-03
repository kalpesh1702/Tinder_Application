import React from 'react';

let ProfilePic = (props) => {

	return(

		<div className="content">

			<img className="straightup"
				 src={props.imageSource}
				 alt="Dog Image"
			/>

		</div>
	);

}

export default ProfilePic;
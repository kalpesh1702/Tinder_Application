import React from 'react';
import {Swipeable} from "react-swipeable";

let ProfilePic = (props) => {

	return(

		<div className="content">

			<Swipeable
				trackMouse
				preventDefaultTouchmoveEvent
				onSwipedLeft={ () => props.swipeHandler('right') }
				onSwipedRight={ () => props.swipeHandler('left')} >
				<img className="straightup"
					src={props.imageSource}
					alt="Dog Image"
				/>
			</Swipeable>
		</div>
	);

}

export default ProfilePic;
import React from 'react';
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline, IoIosHeartEmpty } from "react-icons/io";

let Footer = (props) => {

	return(

		<div className="icon-bar">

			<a href="#" name='like' onClick={props.likeHandler}>
				<IoIosCheckmarkCircleOutline />
			</a>
			<a href="#" name='timeline' onClick={props.likeHandler}>
				<IoIosHeartEmpty />
			</a>
			<a href="#" name='dislike' onClick={props.likeHandler}>
				<IoIosCloseCircleOutline />
			</a>

		</div>
	);

}

export default Footer;
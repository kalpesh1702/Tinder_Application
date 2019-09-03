import React from 'react';

let Header = (props) => {

	return(

		<header className="app-header">

			<h1>{props.heading}</h1>

			{
				props.heading == 'Timeline'

				?
					<a href="#" className="button" onClick={props.backClickHandler}>
						<i className="fa fa-arrow-left"></i>
						Back
					</a>

				: ""
			}


		</header>
	);

}

export default Header;
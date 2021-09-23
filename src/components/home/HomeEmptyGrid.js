import React from "react";
import { Link } from "react-router-dom";
import EmptyGif from "../../assets/empty.gif";

export const HomeEmptyGrid = () => {
	return (
		<div className='pt-4 text-center'>
			<p>
				Oops... you need a Team!{" "}
				<Link to='/search'>Let's find some Heroes 🦸‍♂️</Link>
			</p>
			<img src={EmptyGif} alt='Wanda gif' className='mw-100'></img>
		</div>
	);
};

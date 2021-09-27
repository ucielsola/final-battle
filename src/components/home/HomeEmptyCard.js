import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/empty_card_img.png";
export const HomeEmptyCard = () => {
	const maxWidth = {
		minWidth: "70%",
		maxWidth: "18rem",
		height: "100%",
		maxHeight: "550px",
	};

	return (
		<div className='card p-2' style={maxWidth}>
			<Link to='/search' className='text-decoration-none'>
				<img src={placeholder} alt='Hero Placeholder'></img>
				<h2>You need more heroes! Click here to search</h2>
			</Link>
		</div>
	);
};

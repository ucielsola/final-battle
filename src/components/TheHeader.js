import React from "react";
import { Link } from "react-router-dom";

export const TheHeader = () => {
	return (
		<div className='navbar navbar-expand-lg navbar-light border-bottom border-light'>
			<Link to='/' className='text-decoration-none'>
				<h1>Final Battle</h1>
			</Link>
			<nav>
				<Link to='../'>Your Team</Link>
				<Link to='../search'>Choose your Heros</Link>
			</nav>
		</div>
	);
};

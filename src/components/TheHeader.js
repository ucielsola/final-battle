import React from "react";
import { Link } from "react-router-dom";

export const TheHeader = () => {
	return (
		<div className='navbar navbar-expand-lg navbar-light border-bottom border-light px-4'>
			<Link
				to='/'
				className='text-decoration-none navbar-brand text-primary'>
				<h1>Final Battle</h1>
			</Link>
			<Link to='../' className='nav-item px-2'>
				Your Team
			</Link>
			<Link to='../search' className='nav-item px-2'>
				Choose your Heroes
			</Link>
		</div>
	);
};

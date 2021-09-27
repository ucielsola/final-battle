import React from "react";
import { Link, useHistory } from "react-router-dom";

export const TheHeader = () => {
	const history = useHistory();
	const logOut = (msg) => {
		// borra token y redirije a login
		localStorage.removeItem("token");
		history.push("/login");
	};
	return (
		<div className='container w-100 navbar navbar-light border-bottom border-light px-4'>
			<Link
				to='/'
				className='text-decoration-none navbar-brand col-12 col-md-6 text-primary'>
				<h1>Final Battle</h1>
			</Link>
			<div className='col-md-5 col-lg-5 d-flex align-items-center justify-content-end'>
				<Link to='../' className='nav-item px-2'>
					Your Team
				</Link>
				<Link to='../search' className='nav-item px-2'>
					Choose your Heroes
				</Link>
				<button
					className='btn btn-danger'
					onClick={() => logOut("hola")}>
					LogOut
				</button>
			</div>
		</div>
	);
};

import React from "react";
import { Link } from "react-router-dom";

const LoginSubmitOk = () => {
	return (
		<div className='container'>
			<p className='display-6 text-center text-success'>Success!</p>
			<p className='text-center'>You are being redirected to the site</p>
			<div className='container d-flex justify-content-center'>
				<Link className='btn btn-primary text-light' title='Home'>
					Continue
				</Link>
			</div>
		</div>
	);
};

export default LoginSubmitOk;

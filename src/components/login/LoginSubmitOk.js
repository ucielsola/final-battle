import React from "react";

const LoginSubmitOk = () => {
	return (
		<div className='container'>
			<p className='display-6 text-center text-success'>Success!</p>
			<p className='text-center'>You are being redirected to the site</p>
			<div className='container d-flex justify-content-center'>
				<button
					className='btn btn-primary text-light'
					> Continue
				</button>
			</div>
		</div>
	);
};

export default LoginSubmitOk;

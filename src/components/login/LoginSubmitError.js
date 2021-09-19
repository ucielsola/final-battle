import React from "react";

const LoginSubmitError = ({ stateHandler }) => {
	// stateHandler trae el useState del parent
	return (
		<div className='container'>
			<p className='display-6 text-center text-danger'>Error!</p>
			<p>Please check your credentials and try again</p>
			<div className='container d-flex justify-content-center'>
				<button
					className='btn btn-primary text-light'
					onClick={() => {
						stateHandler(false);
					}}>
					Try Again
				</button>
			</div>
		</div>
	);
};

export default LoginSubmitError;

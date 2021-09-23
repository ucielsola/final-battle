import React from "react";

export const LoginSubmitError = ({ stateHandler }) => {
	// stateHandler trae el useStatus del parent
	return (
		<div className='container'>
			<p className='display-6 text-center text-danger'>Error!</p>
			<p className="text-center">Please check your credentials and try again</p>
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


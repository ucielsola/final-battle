import React from "react";

const LoginSubmitError = ({ stateHandler }) => {
	// stateHandler trae el useState del parent
	return (
		<div className='container'>
			ERROR
			<button
				className='btn'
				onClick={() => {
					stateHandler(false);
				}}>
				Try Again
			</button>
		</div>
	);
};

export default LoginSubmitError;

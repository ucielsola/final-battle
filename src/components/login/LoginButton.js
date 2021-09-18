import React from "react";

const LoginButton = (props) => {
	const { type, text } = props;
	return (
		<button type={type} className='btn btn-primary text-light'>
			{text}
		</button>
	);
};

export default LoginButton;

import React from "react";

const LoginFieldError = (props) => {
	return <div className='text-danger'>{props.children}</div>;
};

export default LoginFieldError;

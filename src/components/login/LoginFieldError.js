import React from "react";

export const LoginFieldError = (props) => {
	return <div className='text-danger'>{props.children}</div>;
};

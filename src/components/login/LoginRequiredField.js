import React from "react";
import { Field, ErrorMessage } from "formik";
import LoginFieldError from "./LoginFieldError";
const LoginRequiredField = (props) => {
	const { name, label, id, placeholder, type } = props;

	return (
		<div className='mb-3'>
			<label htmlFor={name} className='form-label'>
				{label}
			</label>
			<Field
				id={id}
				name={name}
				placeholder={placeholder}
				type={type}
				required
				className='form-control'
			/>
			<ErrorMessage name={name} component={LoginFieldError} />
		</div>
	);
};

export default LoginRequiredField;

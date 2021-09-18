import React from "react";
import { Field, ErrorMessage } from "formik";
import InputError from "./LoginError";
const LoginField = (props) => {
	const { name, label, id, placeholder, type, } = props;

	return (
		<div className='mb-3'>
			<label htmlFor={name} className='form-label'>{label}</label>
			<Field
				id={id}
				name={name}
				placeholder={placeholder}
				type={type}
				required
				className='form-control'
			/>
			<ErrorMessage name={name} component={InputError} />
		</div>
	);
};

export default LoginField;

// <div className='mb-3'>
// 	<label htmlFor='email' className='form-label'>
// 		Email
// 	</label>
// 	<Field
// 		id='email'
// 		name='email'
// 		placeholder='challenge@alkemy.com'
// 		type='email'
// 		required
// 		className='form-control'
// 	/>
// 	<ErrorMessage name='email' component={InputError} />
// </div>;

// <div className='mb-3'>
// 	<label htmlFor='password' className='form-label'>
// 		Password
// 	</label>
// 	<Field
// 		id='password'
// 		name='password'
// 		placeholder='react'
// 		type='password'
// 		required
// 		className='form-control'
// 	/>
// 	<ErrorMessage name='password' component={InputError} />
// </div>;

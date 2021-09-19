import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginRequiredField from "./LoginRequiredField";
import LoginButton from "./LoginButton";

const LoginForm = () => {
	const initialVals = {
		email: "",
		password: "",
	};

	const validation = Yup.object({
		email: Yup.string()
			.email("Please enter a valid email")
			.required("Email is required"),
		password: Yup.string().required("Password is required"),
	});

	const handleSubmit = (values) => {
		console.log("hola", values);
	};

	return (
		<div className='container shadow p-3 bg-body rounded position-absolute top-50 start-50 translate-middle col-xs-12 col-sm-10 col-md-8 col-lg-4'>
			<h2 className='text-center'>~ Final Battle ~</h2>

			<Formik
				initialValues={initialVals}
				validationSchema={validation}
				onSubmit={handleSubmit}>
				<Form>
					<LoginRequiredField
						name='email'
						label='Email'
						id='email'
						placeholder='challenge@alkemy.com'
						type='email'
					/>
					<LoginRequiredField
						name='password'
						label='Password'
						id='password'
						placeholder='react'
						type='password'
					/>
					<LoginButton type='submit' text='Log In' />
				</Form>
			</Formik>
		</div>
	);
};

export default LoginForm;
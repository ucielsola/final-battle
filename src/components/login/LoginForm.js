import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginRequiredField from "./LoginRequiredField";
import LoginButton from "./LoginButton";
import axios from "axios";
import LoginSubmitError from "./LoginSubmitError";

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

	const handleSubmit = async (values, { resetForm }) => {
		await axios
			.post("http://challenge-react.alkemy.org/", values)
			.then((res) => localStorage.setItem("token", res.data.token))
			.catch((err) => {
				setError(true);
				console.log(err);
			});

		resetForm();
	};

	const [error, setError] = useState(false);

	return (
		<div className='container shadow p-3 bg-body rounded position-absolute top-50 start-50 translate-middle col-xs-12 col-sm-10 col-md-8 col-lg-4'>
			<h2 className='text-center'>~ Final Battle ~</h2>

			{error ? (
				<LoginSubmitError stateHandler={setError} />
			) : (
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
			)}
		</div>
	);
};

export default LoginForm;

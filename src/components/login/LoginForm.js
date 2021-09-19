import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import LoginRequiredField from "./LoginRequiredField";
import LoginButton from "./LoginButton";
import LoginSubmitError from "./LoginSubmitError";
import LoginSubmitOk from "./LoginSubmitOk";

const LoginForm = () => {
	const [state, setState] = useState("form");

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
			.then((res) => {
				localStorage.setItem("token", res.data.token);
				setState("success");
			})
			.catch((err) => {
				setState("error");
				console.log(err);
			});

		resetForm();
	};

	const form = (
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
	);

	const submitOk = <LoginSubmitOk LoginSuccessMsg />;

	const submitErr = <LoginSubmitError stateHandler={setState} />;

	return (
		<div className='container shadow p-3 bg-body rounded position-absolute top-50 start-50 translate-middle col-xs-12 col-sm-10 col-md-8 col-lg-4'>
			<h2 className='text-center'>~ Final Battle ~</h2>
			{state === "success"
				? submitOk
				: state === "error"
				? submitErr
				: form}
		</div>
	);
};

export default LoginForm;

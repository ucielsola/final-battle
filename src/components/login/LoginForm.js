import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import LoginRequiredField from "./LoginRequiredField";
import LoginButton from "./LoginButton";

const LoginForm = ({ stateHandler }) => {
	// stateHandler trae el useStatus del parent

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
				stateHandler("success");
			})
			.catch((err) => {
				stateHandler("error");
				console.log(err);
			});

		resetForm();
	};
	return (
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
};

export default LoginForm;

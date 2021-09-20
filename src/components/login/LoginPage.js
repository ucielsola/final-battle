import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginSubmitError from "./LoginSubmitError";

const LoginPage = () => {
	const [status, setStatus] = useState("form");
	const history = useHistory();

	const loggedIn = !!localStorage.getItem("token");

	if (loggedIn) {
		// redirects to HomePage if user is logged in
		history.push("/");
		
	}

	return (
		<div className='container shadow p-3 bg-body rounded position-absolute top-50 start-50 translate-middle col-xs-12 col-sm-10 col-md-8 col-lg-4'>
			<h2 className='text-center'>~ Final Battle ~</h2>
			{status === "error" ? (
				<LoginSubmitError stateHandler={setStatus} />
			) : (
				<LoginForm stateHandler={setStatus} />
			)}
		</div>
	);
};

export default LoginPage;

import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const loggedIn = localStorage.getItem("token");
	return (
		<Route
			{...rest}
			render={(props) => {
				return loggedIn ? (
					<Component {...props} />
				) : (
					<Redirect to='/login' />
				);
			}}></Route>
	);
};

export default PrivateRoute;

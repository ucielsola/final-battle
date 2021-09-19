import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/styles.scss";
import LoginForm from "./components/login/LoginForm";
function App() {
	return (
		<div className='App container-fluid vh-100 bg-dark'>
			<Router>
				<LoginForm />
			</Router>
		</div>
	);
}

export default App;

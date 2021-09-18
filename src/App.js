import React from "react";
import "./assets/styles.scss";
import LoginForm from "./components/login/LoginForm";
function App() {
	return (
		<div className='App container-fluid vh-100 bg-dark'>
			<LoginForm />
		</div>
	);
}

export default App;

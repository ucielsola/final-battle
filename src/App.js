import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { TheHeader } from "./components/TheHeader";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { HeroPage } from "./pages/HeroPage";
import "./assets/styles.scss";

function App() {
	return (
		<Router>
			<div className='container-fluid bg-dark min-vh-100'>
				<TheHeader />
				<Switch>
					<Route path='/login' component={LoginPage} />
					<PrivateRoute path='/' exact component={HomePage} />
					<PrivateRoute path='/search' component={SearchPage} />
					<PrivateRoute path='/hero' component={HeroPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

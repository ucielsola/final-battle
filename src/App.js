import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/home/HomePage";
import SearchPage from "./components/search/SearchPage";
import HeroPage from "./components/hero/HeroPage";
import "./assets/styles.scss";

function App() {
	return (
		<div className='container-fluid overflow-hidden  vh-100 bg-dark'>
			<TheHeader />
			<Router>
				<Switch>
					<Route path='/login' component={LoginPage} />
					<PrivateRoute exact path='/' component={HomePage} />
					<PrivateRoute path='/search' component={SearchPage} />
					<PrivateRoute path='/hero' component={HeroPage} />
				</Switch>
			</Router>
			<TheFooter />
		</div>
	);
}

export default App;

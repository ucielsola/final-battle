import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { TheHeader } from "./components/TheHeader";
import { TheFooter } from "./components/TheFooter";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { HeroPage } from "./pages/HeroPage";
import "./assets/styles.scss";

function App() {
	return (
		<Router>
			<div className='bg-dark vh-100'>
				<TheHeader />
				<Switch>
					<Route path='/login' component={LoginPage} />
					<PrivateRoute path='/' exact component={HomePage} />
					<PrivateRoute path='/search' component={SearchPage} />
					<PrivateRoute path='/hero' component={HeroPage} />
				</Switch>
				<TheFooter />
			</div>
		</Router>
	);
}

export default App;

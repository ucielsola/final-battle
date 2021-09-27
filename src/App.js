import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { TeamProvider } from "./context/TeamState";

import { TheHeader } from "./components/TheHeader";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { HeroPage } from "./pages/HeroPage";
import "./assets/styles.scss";
import { TheFooter } from "./components/TheFooter";

function App() {
	return (
		<Router>
			<TeamProvider>
				<div className='container-fluid d-flex flex-column justify-content-between min-vh-100 bg-dark '>
					<TheHeader />
					<Switch>
						<Route path='/login' component={LoginPage} />
						<PrivateRoute path='/' exact component={HomePage} />
						<PrivateRoute path='/search' component={SearchPage} />
						<PrivateRoute path='/hero' component={HeroPage} />
					</Switch>
					<TheFooter />
				</div>
			</TeamProvider>
		</Router>
	);
}

export default App;

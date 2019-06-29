import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Landing, Mentors, Mentees } from "./components/layout";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/common/PrivateRoute";
import NotFound from "./components/not-found/NotFound";

import "./index.css";

import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

// Check for token
if (localStorage.jwtToken) {
	// Set auth token header auth
	setAuthToken(localStorage.jwtToken);
	// Decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtToken);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));

	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// Logout User
		store.dispatch(logoutUser());
		// Clear current profile
		store.dispatch(clearCurrentProfile());
		// Redirect to login
		window.location.href = "/login";
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Fragment>
						<Navbar />
						<Route exact path="/" component={Landing} />
						<section className="container">
							<Switch>
								<Route exact path="/mentors" component={Mentors} />
								<Route exact path="/mentees" component={Mentees} />
								<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} />
							</Switch>
							<Switch>
								<PrivateRoute exact path="/dashboard" component={Dashboard} />
							</Switch>
						</section>
					</Fragment>
				</Router>
			</Provider>
		);
	}
}

export default App;

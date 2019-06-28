import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Landing, Mentors, Mentees } from "./components/layout";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import "./index.css";

import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

class App extends Component {
	render() {
		return (
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
					</section>
				</Fragment>
			</Router>
		);
	}
}

export default App;

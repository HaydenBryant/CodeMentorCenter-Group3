import React, { Fragment, useState, Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			password2: "",
			errors: {}
		};
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		this.props.registerUser(newUser, this.props.history);
	};

	render() {
		const { errors, name, email, password, password2 } = this.state;

		return (
			<Fragment>
				<h1 className="large text-primary">Sign Up</h1>
				<p className="lead">
					<i className="fas fa-user" /> Create Your Account
				</p>
				<form className="form" onSubmit={this.onSubmit}>
					<div className="form-group">
						<input
							type="text"
							placeholder="Name"
							name="name"
							value={name}
							onChange={this.onChange}
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							placeholder="Email Address"
							name="email"
							value={email}
							onChange={this.onChange}
							required
						/>
						<small className="form-text">
							This site uses Gravatar so if you want a profile image, use a
							Gravatar email
						</small>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password}
							onChange={this.onChange}
							minLength="6"
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Confirm Password"
							name="password2"
							value={password2}
							onChange={this.onChange}
							minLength="6"
						/>
					</div>
					<input type="submit" className="btn btn-primary" value="Register" />
				</form>
				<p className="my-1">
					Already have an account? <Link to="/login">Sign In</Link>
				</p>
			</Fragment>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ registerUser }
)(withRouter(Register));

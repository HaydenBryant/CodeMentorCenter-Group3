import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

import cmcLogo from "../../images/logo_cmc_top.gif";

class Navbar extends Component {
	onLogoutClick(e) {
		e.preventDefault();
		this.props.clearCurrentProfile();
		this.props.logoutUser();
	}

	render() {
		const { isAuthenticated, user } = this.props.auth;

		const authLinks = (
			<nav className="navbar bg-white">
				<div className="logo">
					<Link to="/">
						<img src={cmcLogo} alt="Code Mentor Center" />
					</Link>
				</div>
				<ul>
					<li>
						<Link to="/mentors">MENTORS</Link>
					</li>
					<li>
						<Link to="/mentees">MENTEES</Link>
					</li>
					<li>
						<Link to="/editProfile">EDIT PROFILE</Link>
					</li>

					<li>
						<a
							href="/"
							onClick={this.onLogoutClick.bind(this)}
							className="nav-link"
						>
							LOGOUT
						</a>
					</li>
				</ul>
			</nav>
		);

		const guestLinks = (
			<nav className="navbar bg-white">
				<div className="logo">
					<Link to="/">
						<img src={cmcLogo} alt="Code Mentor Center" />
					</Link>
				</div>
				<ul>
					<li>
						<Link to="/login">LOGIN</Link>
					</li>
					<li>
						<Link to="/register">SIGN UP</Link>
					</li>
				</ul>
			</nav>
		);
		return (
			<div className="container">
				{isAuthenticated ? authLinks : guestLinks}
			</div>
		);
	}
}

Navbar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser, clearCurrentProfile }
)(Navbar);

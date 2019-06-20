const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateRegisterInput = data => {
	let errors = {};

	data.fname = !isEmpty(data.fname) ? data.fname : "";
	data.lname = !isEmpty(data.lname) ? data.lname : "";
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	data.password2 = !isEmpty(data.password2) ? data.password2 : "";

	if (
		!Validator.isLength(data.fname, { min: 2, max: 30 }) ||
		!Validator.isLength(data.lname, { min: 2, max: 30 })
	) {
		errors.name = "First and last names must be between 2 and 30 characters";
	}

	if (Validator.isEmpty(data.fname) || Validator.isEmpty(data.lname)) {
		errors.name = "Full name required";
	}

	if (!Validator.isEmail(data.email)) {
		errors.email = "Email is not valid";
	}

	if (Validator.isEmpty(data.email)) {
		errors.email = "Email is required";
	}

	if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
		errors.password = "Password must contain at least 6 characters";
	}

	if (Validator.isEmpty(data.password)) {
		errors.password = "Password is required";
	}

	if (!Validator.equals(data.password, data.password2)) {
		errors.password2 = "Passwords do not match";
	}

	if (Validator.isEmpty(data.password2)) {
		errors.password2 = "Confirm password please";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

module.exports = validateRegisterInput;

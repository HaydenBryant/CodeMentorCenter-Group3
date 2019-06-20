const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateLoginInput = data => {
	let errors = {};
	console.log(data);

	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";

	if (Validator.isEmpty(data.password)) {
		errors.login = "Password is required";
	}

	if (!Validator.isEmail(data.email)) {
		errors.login = "Email is not valid";
	}

	if (Validator.isEmpty(data.email)) {
		errors.login = "Email is required";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

module.exports = validateLoginInput;

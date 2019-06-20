const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateProfileInput = data => {
	let errors = {};

	// TODO
	// Add profile input validation

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

module.exports = validateProfileInput;

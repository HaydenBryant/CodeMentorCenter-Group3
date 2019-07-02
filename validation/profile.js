const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
	let errors = {};

	data.handle = !isEmpty(data.handle) ? data.handle : "";
	// data.cmcLink = !isEmpty(data.cmcLink) ? data.cmcLink : "";
	data.speakingLanguages = !isEmpty(data.speakingLanguages)
		? data.speakingLanguages
		: "";
	data.skillLevel = !isEmpty(data.skillLevel) ? data.skillLevel : "";
	data.frameworks = !isEmpty(data.frameworks) ? data.frameworks : "";
	data.codingLanguages = !isEmpty(data.codingLanguages)
		? data.codingLanguages
		: "";

	if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
		errors.handle = "Handle needs to be between 2 and 4 characters";
	}

	if (Validator.isEmpty(data.handle)) {
		errors.handle = "Profile handle is required";
	}

	if (Validator.isEmpty(data.skillLevel)) {
		errors.skillLevel = "Skill level is required";
	}

	// if (Validator.isEmpty(data.cmcLink)) {
	// 	errors.cmcLink = "CMC Link is required";
	// }

	if (Validator.isEmpty(data.speakingLanguages)) {
		errors.speakingLanguages = "At lease one language is required";
	}

	if (Validator.isEmpty(data.frameworks)) {
		errors.frameworks = "At lease one framework is required";
	}

	if (Validator.isEmpty(data.codingLanguages)) {
		errors.codingLanguages = "At lease one coding language is required";
	}

	if (!isEmpty(data.website)) {
		if (!Validator.isURL(data.website)) {
			errors.website = "Not a valid URL";
		}
	}

	if (!isEmpty(data.youtube)) {
		if (!Validator.isURL(data.youtube)) {
			errors.youtube = "Not a valid URL";
		}
	}

	if (!isEmpty(data.twitter)) {
		if (!Validator.isURL(data.twitter)) {
			errors.twitter = "Not a valid URL";
		}
	}

	if (!isEmpty(data.facebook)) {
		if (!Validator.isURL(data.facebook)) {
			errors.facebook = "Not a valid URL";
		}
	}

	if (!isEmpty(data.linkedin)) {
		if (!Validator.isURL(data.linkedin)) {
			errors.linkedin = "Not a valid URL";
		}
	}

	if (!isEmpty(data.instagram)) {
		if (!Validator.isURL(data.instagram)) {
			errors.instagram = "Not a valid URL";
		}
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

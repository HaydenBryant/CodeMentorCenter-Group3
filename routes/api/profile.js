const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Validation
const validateProfileInput = require("../../validation/profile");

// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Model
const User = require("../../models/User");

// @route GET api/profile/test
// @desc Tests profile route
// @access Public

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route GET api/profile
// @desc Get current users profile
// @access Private

router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const errors = {};

		Profile.findOne({ user: req.user.id })
			.populate("user", ["name"])
			.then(profile => {
				if (!profile) {
					errors.noprofile = "There is no profile for this user";
					return res.status(404).json(errors);
				}
				res.json(profile);
			})
			.catch(err => res.status(404).json(err));
	}
);

// @route GET api/profile/all
// @desc Get all profiles
// @access Public

router.get("/all", (req, res) => {
	const errors = {};

	Profile.find()
		.populate("user", ["name"])
		.then(profiles => {
			if (!profiles) {
				errors.noprofile = "There are no profiles";
				return res.status(404).json(errors);
			}
			res.json(profiles);
		})
		.catch(err => res.status(404).json({ profile: "There are no profiles" }));
});

// @route GET api/profile/handle/:handle
// @desc Get profile by handle
// @access Public

router.get("/handle/:handle", (req, res) => {
	const errors = {};
	Profile.findOne({ handle: req.params.handle })
		.populate("user", ["name", "avatar"])
		.then(profile => {
			if (!profile) {
				errors.noprofile = "There is no profile for this user";
				res.status(404).json(errors);
			}

			res.json(profile);
		})
		.catch(err => res.status(404).json(err));
});

// @route GET api/profile/user/:user_id
// @desc Get profile by user
// @access Public

router.get("/user/:user_id", (req, res) => {
	const errors = {};
	Profile.findOne({ user: req.params.user_id })
		.populate("user", ["name", "avatar"])
		.then(profile => {
			if (!profile) {
				errors.noprofile = "There is no profile for this user";
				res.status(404).json(errors);
			}

			res.json(profile);
		})
		.catch(err =>
			res.status(404).json({ profile: "There is no profile for this user" })
		);
});

// @route POST api/profile
// @desc Create or edit user profile
// @access Private

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const { errors, isValid } = validateProfileInput(req.body);

		// Check Validation
		if (!isValid) {
			// Return any errors with 400 status
			return res.status(400).json(errors);
		}

		// Get fields
		const profileFields = {};
		profileFields.user = req.user.id;
		if (req.body.userType) profileFields.userType = req.body.userType;
		if (req.body.handle) profileFields.handle = req.body.handle;
		if (req.body.dob) profileFields.dob = req.body.dob;
		if (req.body.company) profileFields.company = req.body.company;
		if (req.body.school) profileFields.school = req.body.school;
		if (req.body.website) profileFields.website = req.body.website;
		if (req.body.town) profileFields.town = req.body.town;
		if (req.body.state) profileFields.state = req.body.state;
		if (req.body.zipCode) profileFields.zipCode = req.body.zipCode;
		if (req.body.country) profileFields.country = req.body.country;
		if (req.body.skillLevel) profileFields.skillLevel = req.body.skillLevel;
		if (req.body.bio) profileFields.bio = req.body.bio;
		if (req.body.resume) profileFields.resume = req.body.resume;
		if (req.body.githubusername)
			profileFields.githubusername = req.body.githubusername;
		// Coding languages - Split into array
		if (typeof req.body.codingLanguages !== "undefined") {
			profileFields.codingLanguages = req.body.codingLanguages.split(",");
		}
		// Speaking languages - Split into array
		if (typeof req.body.speakingLanguages !== "undefined") {
			profileFields.speakingLanguages = req.body.speakingLanguages.split(",");
		}
		// Frameworks - Split into array
		if (typeof req.body.frameworks !== "undefined") {
			profileFields.frameworks = req.body.frameworks.split(",");
		}

		// Social
		// profileFields.social = {};  shouldnt be needed anymore
		if (req.body.youtube) profileFields.youtube = req.body.youtube;
		if (req.body.twitter) profileFields.twitter = req.body.twitter;
		if (req.body.facebook) profileFields.facebook = req.body.facebook;
		if (req.body.linkedin) profileFields.linkedin = req.body.linkedin;
		if (req.body.instagram) profileFields.instagram = req.body.instagram;

		console.log(profileFields);

		// Create or Edit current user profile with unique handle
		Profile.findOne({ user: req.user.id }).then(profile => {
			// If profile not exist, then create a new one, Otherwise just update

			// Create new profile
			if (!profile) {
				// Check if handle exists (handle should be unique for all profile)
				Profile.findOne({ handle: profileFields.handle }).then(profile => {
					if (profile) {
						errors.handle = "handle already exists";
						res.status(400).json(errors);
					}
				});
				new Profile(profileFields).save().then(profile => res.json(profile));
			}
			// Update the profile
			else {
				// Check if handle exists for other user
				Profile.findOne({ handle: profileFields.handle }).then(p => {
					if (profile.handle !== p.handle) {
						errors.handle = "handle already exists";
						res.status(400).json(errors);
					}
				});
				Profile.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: profileFields },
					{ new: true }
				).then(profile => res.json(profile));
			}
		});
	}
);

// @route DELETE api/profile/
// @desc Delete user and profile
// @access Private

router.delete(
	"/",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Profile.findOneAndRemove({ user: req.user.id }).then(() => {
			User.findOneAndRemove({ _id: req.user.id }).then(() =>
				res.json({ success: true })
			);
		});
	}
);

module.exports = router;

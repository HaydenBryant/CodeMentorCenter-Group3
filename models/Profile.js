const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "users"
	},
	photo: {
		type: String
	},
	photoUrl: {
		type: String
	},
	userType: {
		type: String,
		required: true
	},
	handle: {
		type: String,
		required: true,
		max: 40
	},
	fname: {
		type: String,
		required: true
	},
	lname: {
		type: String,
		required: true
	},
	name: {
		type: String
	},
	dob: {
		type: Date
	},
	company: {
		type: String
	},
	school: {
		type: String
	},
	website: {
		type: String
	},
	town: {
		type: String
	},
	state: {
		type: String
	},
	zipCode: {
		type: Number
	},
	country: {
		type: String
	},
	codingLanguages: {
		type: [String],
		required: true
	},
	frameworks: {
		type: [String],
		required: true
	},
	skillLevel: {
		type: String,
		required: true
	},
	speakingLanguages: {
		type: [String],
		required: true
	},
	bio: {
		type: String
	},
	githubUsername: {
		type: String
	},
	cmcLink: {
		type: String,
		required: true
	},
	social: {
		youtube: {
			type: String
		},
		twitter: {
			type: String
		},
		facebook: {
			type: String
		},
		linkedin: {
			type: String
		},
		instagram: {
			type: String
		}
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);

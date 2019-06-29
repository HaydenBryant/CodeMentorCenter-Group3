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
	isAMentor: {
		type: Boolean,
		default: false
	},
	isAMentee: {
		type: Boolean,
		default: false
	},
	handle: {
		type: String,
		required: true,
		max: 40
	},
	name: {
		type: String,
		required: true
	},
	dob: {
		type: Date
	},
	company: {
		type: String
	},
	website: {
		type: String
	},
	location: {
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

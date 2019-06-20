const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Conect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log("MongoDB Connect"))
	.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
	if (err) {
		console.log(err);
	}
	console.log("Server is running on port: " + PORT);
});

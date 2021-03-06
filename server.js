const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

const app = express();

// Cors middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // Enabling built-in middleware to use Static directory
// app.use(express.static("public"));

// DB Config
const db = require("./config/keys").mongoURI;

// Conect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log("MongoDB Connect"))
	.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
	if (err) {
		console.log(err);
	}
	console.log("Server is running on port: " + PORT);
});

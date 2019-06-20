const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
	if (err) {
		console.log(err);
	}
	console.log("Server is running on port: " + PORT);
});

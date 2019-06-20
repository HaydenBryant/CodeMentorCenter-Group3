const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// @route GET api/profile/test
// @desc Tests profile route
// @access Public

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;

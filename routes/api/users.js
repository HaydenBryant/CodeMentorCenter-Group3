const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Validation functions to be used in routes below.
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

const isEmpty = require("../../validation/is-empty");

// @route GET api/users/test
// @desc Tests users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   post api/users/register
// @desc    register a new user account
// @access  public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = "Email already registered";
        return res.status(400).json(errors);
      }
      const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email.toUpperCase(),
        password: req.body.password
      });

      console.log("encrypting data");
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          console.log("attempting save");
          newUser
            .save()
            .then(user => {
              //log in
              const payload = {
                id: user.id,
                fname: user.fname,
                lname: user.lname,
                email: user.email
              };

              jwt.sign(payload, keys.secretOrKey, (err, token) => {
                res.json({
                  success: true,
                  user,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    })
    .catch(err => console.log(err));
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email: email.toUpperCase() }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user.id,
          fname: user.fname,
          lname: user.lname,
          email: user.email
        }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/search:language
// @desc    Search programming language within users
// @access  Public
router.get("/search/:language", function(req, res) {
  res.json({ msg: "Programming language api search is working..." });
});

module.exports = router;

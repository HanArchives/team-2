const express = require('express');
// const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const passwort = require('passwort');

let User = require('../models/user');

router.get('/register', function (req, res) {
  res.render('users/register'); // ipv users -> pages?
});

// register process
router.post('/register', function (req, res) {
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.password2;

  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('firstname', 'Firstname is required').notEmpty();
  req.checkBody('lastname', 'Lastname is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req
    .checkBody('password2', 'Passwords do not match')
    .equals(req.body.password);

  let errors = req.validationErrors();

  if (errors) {
    res.render('register', {
      errors: errors,
    });
  } else {
    let newUser = new User({
      username: username,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    });
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(newUser.password, salt, function (err, hash) {
        if (err) {
          console.log(err);
        }
        newUser.password = hash;
        newUser.save(function (err) {
          if (err) {
            console.log(err);
            return;
          } else {
            req.flash('success, you are now registered and can login');
            res.redirect('users/login'); // ipv users -> pages?
          }
        });
      });
    });
  }
});

router.get('/login', function (req, res) {
  res.render('pages/login');
});

// Login Process
router.post('/login', async (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true,
  })(req, res, next);
});

// logout
router.get('/logout', async (req, res) => {
  req.logout();
  req.flash('success', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;

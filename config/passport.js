const localStrategy = require('passport-local').Strategy;
const { User } = require('../models/user');
// const User = require('../models/user');
// const config = require('..config/db');
const bcrypt = require('bcrypt');
// const passwort = require('passwort');

module.exports = function (passport) {
  //local strategy
  passport.use(new localStrategy())(function (username, password, done) {
    let query = { username: username };
    User.findOne(query, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: 'No user found' });
      }

      bcrypt.compare(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Wrong password' });
        }
      });
    });
  });

  passwort.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passwort.deserializeUser(function (id, done) {
    user.findById(id, function (err, user) {
      done(err, user);
    });
  });
};

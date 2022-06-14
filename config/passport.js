const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const config = require('../config/db');
const bcrypt = require('bcrypt');
const passport = require('passport');

module.exports = function (passport) {
  //local strategy
  console.log('appel');
  passport.use(
    new localStrategy(function (username, password, done) {
      // Match username
      let query = { username: reg.body.username };

      console.log('apple');

      db.collection('users')
        .findOne(query)
        .then(function (err, user) {
          console.log('kaas');
          if (err) throw err;
          if (!user) {
            return done(null, false, {
              message: 'No user found with that username, please register',
            });
          }

          // Match password
          bcrypt.compare(password, user.password, function (err, isMatch) {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, {
                message: 'No user found with that password, please register',
              });
            }
          });
        });
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    user.findById(id, function (err, user) {
      done(err, user);
    });
  });
};

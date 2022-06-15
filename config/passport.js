const localStrategy = require('passport-local').Strategy;
const db = require('../config/db');
const bcrypt = require('bcrypt');

module.exports = function (passport) {
  //local strategy
  console.log('kaas');
  passport.use(
    new localStrategy(function (username, password, done) {
      // Match username
      let query = { username: username };
      console.log('appel');
      console.log(query);

      db.collection('users')
        .findOne(query)
        .then(function (err, user) {
          console.log(query);
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
    db.collection('users').findById(id, function (err, user) {
      done(err, user);
    });
  });
};

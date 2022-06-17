const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const mongodb = require('mongodb').MongoClient;

module.exports = function (passport) {
  //local strategy
  passport.use(
    new LocalStrategy(function (username, password, done) {
      // Match username
      let query = { username: username };

      const users = db.collection('users');
      // console.log(query);

      try {
        // Match user
        users.findOne(query, (err, user) => {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, {
              message: 'No user found with that username',
            });
          }

          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Wrong password' });
            }
          });
        });
      } catch (err) {
        console.log(err);
        return done(err);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    const { ObjectId } = require('mongodb');
    db.collection('users').findOne({ _id: new ObjectId(id) }, (err, user) => {
      if (err) {
        return done(err);
      }
      return done(null, user);
    });
  });
};

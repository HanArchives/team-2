const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = function (passport) {
  //local strategy
  passport.use(
    new LocalStrategy(async function (username, password, done) {
      // Match username
      let query = { username: username };

      const users = await db.collection('users');
      console.log(query);

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

  // Serializing a user determines which data of the user object should be stored in the session
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  // Deserialize User uses the id to look up the user in the database and retrieve the user object with data
  passport.deserializeUser((id, done) => {
    db.collection('users').findOne({ _id: new ObjectId(id) }, (err, user) => {
      done(err, user);
    });
  });
};

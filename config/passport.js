// const LocalStrategy = require('passport-local').Strategy;
// // const db = require('../config/db');
// const bcrypt = require('bcrypt');

// module.exports = function (passport) {
//   //local strategy
//   passport.use(
//     new LocalStrategy(function (username, password, done) {
//       // Match username
//       let query = { username: username };

//       // const users = await db.collection('users').find(query).toArray();
//       // console.log(users);

//       db.collection('users')
//         .findOne(query)
//         .then(function (err, user) {
//           console.log(query);
//           // console.log(query);
//           if (err) throw err;
//           if (!user) {
//             return done(null, false, {
//               message: 'No user found with that username, please register',
//             });
//           }

//           // Match password
//           bcrypt.compare(password, user.password, function (err, isMatch) {
//             if (err) throw err;
//             if (isMatch) {
//               return done(null, user);
//             } else {
//               return done(null, false, {
//                 message: 'No user found with that password, please register',
//               });
//             }
//           });
//         });
//     })
//   );

//   passport.serializeUser(function (user, done) {
//     done(null, user.id);
//   });

//   passport.deserializeUser(function (id, done) {
//     db.collection('users').findByid(function id(err, user) {
//       done(err, user);
//     });
//   });
// };

const LocalStrategy = require('passport-local').Strategy;
// const db = require('../config/db');
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
        users.findOne(query, (err, user) => {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: 'no user with that name' });
          }
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        });
      } catch (err) {
        console.log(err);
        return done(err);
      }
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
};

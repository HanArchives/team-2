const User = require('../models/user');
const bcrypt = require('bcryptjs');

let session;

const register = async (req, res) => {
  const saltrounds = 10;
  const password = await bcrypt.hash(req.body.password, saltrounds);

  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: password,
  };

  await db.collection('users').insertOne(user);

  session = req.session;
  session.email = req.body.email;
  res.redirect('/');

  console.log(session);
};

const login = async (req, res) => {
  try {
    const user = await db
      .collection('users')
      .findOne({ username: req.body.username.toLowerCase() });

    if (user) {
      const compare = await bcrypt.compare(req.body.password, user.password);

      if (compare) {
        console.log('Succes!');
      } else {
        console.log('Wrong username!');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register: register,
  login: login,
};

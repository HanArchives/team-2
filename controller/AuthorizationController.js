const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { redirect } = require('express/lib/response');

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

const login = () => {
  console.log('nu zijn we bij login');
};

module.exports = {
  register: register,
  login: login,
};

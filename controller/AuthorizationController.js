// register and login //
const bcrypt = require('bcryptjs');
const passport = require('passport');
const flash = require('connect-flash');

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
  req.flash('success', 'You are now registered and can log in');
  res.redirect('/home');

  console.log(session);
};

const login = async (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/?error=true',
  })(req, res, next);
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

module.exports = {
  register: register,
  login: login,
  logout: logout,
};

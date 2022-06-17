function checkAuthenticated(req, res, next) {
  console.log(req);
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
}

module.exports = checkAuthenticated;

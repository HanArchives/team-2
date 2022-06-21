function checkAuthenticated(req, res, next) {
  try{
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
} catch(err) {
  console.error('Error loading AuthenticateController:' + err.message);
}
}

module.exports = checkAuthenticated;

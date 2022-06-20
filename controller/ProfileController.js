// Hier komt backend code voor edit profil
const { ObjectId } = require('mongodb');

const profile = async (req, res) => {
  try{
  const sessionData = req.session.passport.user;
  console.log(sessionData);
  const { ObjectId } = require('mongodb');

  const user = await db.collection('users').findOne({
    _id: ObjectId(sessionData),
  });
  //   console.log(user);
  res.render('pages/profile', { user });
} catch(err) {
  console.error('Error loading ProfileController:' + err.message);
}
};

const update = async (req, res) => {
  const sessionData = req.session.passport.user;
  console.log(sessionData);
  const { ObjectId } = require('mongodb');

  const user = await db.collection('users').updateOne(
    {
      _id: ObjectId(sessionData),
    },
    {
      $set: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
      },
    },
    {}
  );

  console.log(user);
};

module.exports = {
  profile,
  update,
};

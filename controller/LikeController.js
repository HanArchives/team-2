// Add doggo to favorites //
const { ObjectId } = require('mongodb');
// const { session } = require('passport');

const like = async (req, res) => {
  const sessionData = req.session.passport.user;
  console.log(sessionData);
  const { ObjectId } = require('mongodb');

  const user = await db.collection('users').updateOne(
    {
      _id: ObjectId(sessionData),
    },
    {
      $push: {
        dog_id: req.body.like,
      },
    }
  );
  console.log(user);
  res.redirect('/likes');
};

module.exports = {
  like: like,
};

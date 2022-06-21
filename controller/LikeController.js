// Add doggo to favorites //
const { ObjectId } = require('mongodb');

const like = async (req, res) => {
  try{
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
} catch(err) {
  console.error('Error loading LikeController:' + err.message);
}
};

module.exports = {
  like: like,
};

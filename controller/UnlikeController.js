const { ObjectId } = require('mongodb');

const unlike = async (req, res) => {
  const sessionData = req.session.passport.user;
  console.log(sessionData);
  const user = await db.collection('users').updateOne(
    {
      _id: ObjectId(sessionData),
    },
    {
      $pull: {
        dog_id: req.body.remove,
      },
    }
  );

  res.redirect('/likes');
};

module.exports = {
  unlike: unlike,
};

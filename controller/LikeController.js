// Add doggo to favorites //
const { ObjectId } = require('mongodb');

const like = async (req, res) => {
  await db.collection('users').updateOne(
    {
      _id: ObjectId('62a375d45f65c08711122599'),
    },
    {
      $push: {
        dog_id: req.body.like,
      },
    }
  );

  res.redirect('/likes');
};

module.exports = {
  like: like,
};

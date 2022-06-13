// Add doggo to favorites //
const { ObjectId } = require('mongodb');

const like = async (req, res) => {
  await db.collection('matches').updateOne(
    {
      _id: ObjectId(req.body.like),
    },
    {
      $set: {
        like: true,
      },
    }
  );

  res.redirect('/likes');
};

module.exports = {
  like: like,
};

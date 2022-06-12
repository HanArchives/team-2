// Remove doggo from favorites //
const { ObjectId } = require('mongodb');

const unlike = async (req, res) => {
  await db.collection('matches').updateOne(
    {
      _id: ObjectId(req.body.remove),
    },
    {
      $set: {
        like: false,
      },
    }
  );

  res.redirect('/likes');
};

module.exports = {
  unlike: unlike,
};

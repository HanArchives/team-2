// Remove doggo from favorites //
const { ObjectId } = require('mongodb');

const unlike = async (req, res) => {
  const users = await db.collection('users');
  await users.updateOne(
    { _id: ObjectId('62a375d45f65c08711122599') },
    { $pull: { dog_id: req.body.remove } }
  );

  res.redirect('/likes');
};

module.exports = {
  unlike: unlike,
};

// DELETE DOG FROM DB //
const { ObjectId } = require('mongodb');

const deleteDog = async (req, res) => {
  await db.collection('matches').deleteOne({
    _id: ObjectId(req.body.delete),
  });

  res.redirect('/redirect');
};

module.exports = {
  deleteDog: deleteDog,
};

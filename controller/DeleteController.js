// DELETE DOG FROM DB //
const { ObjectId } = require('mongodb');

const deleteDog = async (req, res) => {
  try{
  await db.collection('matches').deleteOne({
    _id: ObjectId(req.body.delete),
  });

  res.redirect('/contact');
} catch(err) {
  console.error('Error loading DeleteController:' + err.message);
}
};

module.exports = {
  deleteDog: deleteDog,
};

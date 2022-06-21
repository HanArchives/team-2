// Form Filter find doggo //
const arrayify = require('array-back'); // make a single string an array
const { ObjectId } = require('mongodb');

const match = async (req, res) => {
  try{
  // $in selects the documents where the value of a field equals any value in the specified array.
  const queryGender = { gender: { $in: arrayify(req.body.gender) } };
  const querySize = { size: { $in: arrayify(req.body.size) } };
  const queryAge = { age: { $in: arrayify(req.body.age) } };
  const query = { ...queryGender, ...querySize, ...queryAge }; // make one object of three objects

  const match = await db.collection('matches').find(query).toArray();
  const sessionData = req.session.passport.user;
  console.log(sessionData);
  const user = await db.collection('users').findOne({
    _id: ObjectId(sessionData),
  });

  const matches = match.filter((dog) => !user.dog_id.includes(String(dog._id)));

  res.render('pages/match', { matches });
} catch(err) {
  console.error('Error loading FilterController:' + err.message);
}
};

module.exports = {
  match: match,
};

// Form Filter find doggo //
const arrayify = require('array-back'); // make a single string an array

const match = async (req, res) => {
  // $in selects the documents where the value of a field equals any value in the specified array.
  const queryGender = { gender: { $in: arrayify(req.body.gender) } };
  const querySize = { size: { $in: arrayify(req.body.size) } };
  const queryAge = { age: { $in: arrayify(req.body.age) } };
  const query = { ...queryGender, ...querySize, ...queryAge }; // make one object of three objects

  const match = await db.collection('matches').find(query).toArray();

  const user = await db.collection('users').findOne({
    firstname: 'thije',
  });

  const matches = match.filter((dog) => !user.dog_id.includes(String(dog._id)));
  console.log(user);

  res.render('pages/match', { matches });
};

module.exports = {
  match: match,
};

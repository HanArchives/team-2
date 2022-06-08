////////////////////////////
// Form Filter find doggo //
////////////////////////////
const arrayify = require('array-back'); // make a single string an array
const express = require('express');
const filter = express.Router();

filter.post('/', async (req, res) => {
  // $in selects the documents where the value of a field equals any value in the specified array.
  const queryGender = { gender: { $in: arrayify(req.body.gender) } };
  const querySize = { size: { $in: arrayify(req.body.size) } };
  const queryAge = { age: { $in: arrayify(req.body.age) } };
  const query = { ...queryGender, ...querySize, ...queryAge }; // make one object of three objects

  const matches = await db.collection('matches').find(query).toArray();
  res.render('pages/match', { matches });
});

module.exports = filter;

////////////////////////
// Add Doggo + Multer //
////////////////////////

// add dog //
const add = async (req, res, next) => {
  let doggo = {
    image: req.file.filename,
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
    size: req.body.size,
    about: req.body.about,
    like: false,
  };
  // ADD TO DB
  await db.collection('matches').insertOne(doggo);

  // GET LATEST LIST OF MATCHES
  const query = {};
  const matches = await db.collection('matches').find(query, {}).toArray();
};

module.exports = {
  add: add,
};

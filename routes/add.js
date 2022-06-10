////////////////////////
// Add Doggo + Multer //
////////////////////////
const express = require('express');
const add = express.Router();

// MULTER //
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './static/img/dogs'); // store here
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

// add dog //
add.post('/doggo/add', upload.single('image'), async (req, res, next) => {
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
});

module.exports = add;

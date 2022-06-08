////////////////////////
// DELETE DOG FROM DB //
////////////////////////
const express = require('express');
const { ObjectId } = require('mongodb');
const deleteDogg = express.Router();

deleteDogg.post('/delete', async (req, res) => {
  await db.collection('matches').deleteOne({
    _id: ObjectId(req.body.delete),
  });

  res.redirect('/redirect');
});

module.exports = deleteDogg;

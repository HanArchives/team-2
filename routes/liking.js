////////////////
// Likes page //
////////////////
const express = require('express');
const { ObjectId } = require('mongodb');
const liking = express.Router();

liking
  .get('/likes', async (req, res) => {
    const likes = await db
      .collection('matches')
      .find({
        like: true,
      })
      .toArray();
    res.render('pages/likes', {
      likes,
    });
  })

  // Add doggo to favorites //
  .post('/likedoggo', async (req, res) => {
    await db.collection('matches').updateOne(
      {
        _id: ObjectId(req.body.like),
      },
      {
        $set: {
          like: true,
        },
      }
    );

    res.redirect('/likes');
  })

  // Remove doggo from favorites //
  .post('/remove-favorite', async (req, res) => {
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
  });

module.exports = liking;

/////////////////////
// Pages rendering //
/////////////////////
const express = require('express');
const pages = express.Router();

pages
  // Index page //
  .get('/home', (req, res) => {
    res.render('pages/home');
  })
  // Login page //
  .get('/', (req, res) => {
    res.render('pages/login');
  })
  // Register page //
  .get('/register', (req, res) => {
    res.render('pages/register');
  })
  // Redirect page //
  .get('/redirect', (req, res) => {
    res.render('pages/redirect');
  })
  // Add doggo page //
  .get('/add-doggo', (req, res) => {
    res.render('pages/add-doggo');
  })
  // Find doggo page //
  .get('/find-doggo', (req, res) => {
    res.render('pages/find-doggo');
  })

  .get('/map', (req, res) => {
    res.render('pages/map');
  })

  .get('/shelter-overview', async (req, res) => {
    const query = { shelter: req.query.shelter };
    const dogs = await db.collection('matches').find(query).toArray();

    res.render('pages/match', { matches: dogs });
  })

  // .get('/likes', async (req, res) => {
  //   const session = req.session;
  //   console.log(session);

  //   const user = await db.collection('users').findOne({
  //     firstname: 'thije',
  //   });
  //   const likes = await db.collection('matches').find().toArray();
  //   const userDog = likes.filter((dog) =>
  //     user.dog_id.includes(String(dog._id))
  //   );

  //   res.render('pages/likes', { userDog });
  // });
  .get('/likes', async (req, res) => {
    const sessionData = req.session.passport.user;
    console.log(sessionData);
    const { ObjectId } = require('mongodb');

    const user = await db.collection('users').findOne({
      _id: ObjectId(sessionData),
    });

    const likes = await db.collection('matches').find().toArray();
    const userDog = likes.filter((dog) =>
      user.dog_id.includes(String(dog._id))
    );

    res.render('pages/likes', { userDog });
  });

// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/');
// }

module.exports = pages;

/////////////////////
// Pages rendering //
/////////////////////
const express = require('express');
const pages = express.Router();
const checkAuthenticated = require('../controller/AuthenticateController');

pages
  // Index page //
  .get('/home', checkAuthenticated, (req, res) => {
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
  .get('/redirect', checkAuthenticated, (req, res) => {
    res.render('pages/redirect');
  })
  // Add doggo page //
  .get('/add-doggo', checkAuthenticated, (req, res) => {
    res.render('pages/add-doggo');
  })
  // Find doggo page //
  .get('/find-doggo', checkAuthenticated, (req, res) => {
    res.render('pages/find-doggo');
  })

  .get('/map', checkAuthenticated, (req, res) => {
    res.render('pages/map');
  })

  .get('/shelter-overview', checkAuthenticated, async (req, res) => {
    const query = { shelter: req.query.shelter };
    const dogs = await db.collection('matches').find(query).toArray();

    res.render('pages/match', { matches: dogs });
  })

  .get('/likes', checkAuthenticated, async (req, res) => {
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

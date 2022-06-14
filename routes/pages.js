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

  // Edit user page //
  // .get('/edit', (req, res) => {
  //   res.render('pages/edit-profile');
  // })

  .get('/map', (req, res) => {
    res.render('pages/map');
  })

  .get('/shelter-overview', async (req, res) => {
    const query = { shelter: req.query.shelter };
    const dogs = await db.collection('matches').find(query).toArray();

    res.render('pages/match', { matches: dogs });
  })

  .get('/likes', async (req, res) => {
    const user = await db.collection('users').findOne({
      firstname: 'thije',
    });
    const likes = await db.collection('matches').find().toArray();
    const userDog = likes.filter((dog) =>
      user.dog_id.includes(String(dog._id))
    );

    res.render('pages/likes', { userDog });
  });

module.exports = pages;

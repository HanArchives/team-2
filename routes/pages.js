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
  // Match page //
  // .get('/match', (req, res) => {
    // res.render('pages/match');
  // })
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
  });

module.exports = pages;

/////////////////////
// Pages rendering //
/////////////////////
const express = require('express');
const pages = express.Router();
const checkAuthenticated = require('../controller/AuthenticateController');

pages
  // Index page //
  .get('/home', checkAuthenticated, (req, res) => {
    try{
    res.render('pages/home');
  } catch(err) {
    console.error('Error loading home:' + err.message);
  }
  })
  // Login page //
  .get('/', (req, res) => {
    try{
    res.render('pages/login');
  } catch(err) {
    console.error('Error loading login:' + err.message);
  }
  })
  // Register page //
  .get('/register', (req, res) => {
    try{
    res.render('pages/register');
  } catch(err) {
    console.error('Error loading register:' + err.message);
  }
  })
  // Contact page //
  .get('/contact', checkAuthenticated, (req, res) => {
    try{
    res.render('pages/contact');
  } catch(err) {
    console.error('Error loading contact:' + err.message);
  }
  })

  // Add doggo page //
  .get('/add-doggo', checkAuthenticated, (req, res) => {
    try{
    res.render('pages/add-doggo');
  } catch(err) {
    console.error('Error loading add-doggo:' + err.message);
  }
  })
  // Find doggo page //
  .get('/find-doggo', checkAuthenticated, (req, res) => {
    try{
    res.render('pages/find-doggo');
  } catch(err) {
    console.error('Error loading find-doggo:' + err.message);
  }
  })

  .get('/map', checkAuthenticated, (req, res) => {
    try{
    res.render('pages/map');
  } catch(err) {
    console.error('Error loading map:' + err.message);
  }
  })

  .get('/shelter-overview', checkAuthenticated, async (req, res) => {
    try{
    const query = { shelter: req.query.shelter };
    const dogs = await db.collection('matches').find(query).toArray();

    res.render('pages/match', { matches: dogs });
  } catch(err) {
    console.error('Error loading shelter-overview:' + err.message);
  }
  })

  .get('/likes', checkAuthenticated, async (req, res) => {
    try{
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
  } catch(err) {
    console.error('Error loading likes:' + err.message);
  }
  });

module.exports = pages;

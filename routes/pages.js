/////////////////////
// Pages rendering //
/////////////////////
const express = require('express');
const pages = express.Router();

pages
  // Index page //
  .get('/', (req, res) => {
    res.render('pages/index');
  })
  // Match page //
  .get('/match', (req, res) => {
    res.render('pages/match');
  })
  // Login page //
  .get('/login', (req, res) => {
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
  });

module.exports = pages;

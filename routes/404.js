// reponse 404 //
const express = require('express');
const notFound = express.Router();

notFound.use((req, res) => {
  res.status(404).render('pages/404');
});

module.exports = notFound;

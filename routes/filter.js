const express = require('express');
const router = express.Router();
const filter = require('../controller/FilterController');

router.post('/', filter.filter);

module.exports = router;

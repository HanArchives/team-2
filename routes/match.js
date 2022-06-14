const express = require('express');
const router = express.Router();
const match = require('../controller/FilterController');

router.post('/', match.match);
router.get('/', match.match);

module.exports = router;

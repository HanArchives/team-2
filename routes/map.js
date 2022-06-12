const express = require('express');
const router = express.Router();
const map = require('../controller/MapController');

router.post('/', map.map);

module.exports = router;

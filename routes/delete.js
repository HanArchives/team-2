const express = require('express');
const router = express.Router();
const deleteDog = require('../controller/DeleteController');

router.post('/', deleteDog.deleteDog);

module.exports = router;

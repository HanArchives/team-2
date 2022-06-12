///////////////////
// Unliking page //
///////////////////
const express = require('express');
const router = express.Router();
const unlike = require('../controller/UnlikeController');

router.post('/', unlike.unlike);

module.exports = router;

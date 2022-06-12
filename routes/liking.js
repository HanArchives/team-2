const express = require('express');
const router = express.Router();
const like = require('../controller/LikeController');

router.post('/', like.like);

module.exports = router;

const express = require('express');
// const User = require('../models/user');
const router = express.Router();
const authorization = require('../controller/AuthorizationController');

router.post('/', authorization.register);

module.exports = router;

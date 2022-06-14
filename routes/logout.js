const express = require('express');
const router = express.Router();
const authorization = require('../controller/AuthorizationController');

router.post('/', authorization.logout);

module.exports = router;

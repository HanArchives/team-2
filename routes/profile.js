const express = require('express');
const router = express.Router();
const profile = require('../controller/ProfileController');



router.post('/', profile.update);
router.get('/', profile.profile);


module.exports = router;




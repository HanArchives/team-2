const express = require('express');
const router = express.Router();
const edit = require('../controller/EditController');

router.post('/', edit.edit);
router.get('/', edit.edit);


module.exports = router;




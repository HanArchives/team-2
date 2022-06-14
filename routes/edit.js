const express = require('express');
const router = express.Router();
const edit = require('../controller/EditController');



router.post('/', edit.update);
router.get('/', edit.edit);


module.exports = router;




const express = require('express');
const router = express.Router();
const add = require('../controller/AddController');

// MULTER //
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './static/img/dogs'); // store here
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.post('/', upload.single('image'), add.add);

module.exports = router;

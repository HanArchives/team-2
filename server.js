const express = require('express');
const connectDB = require('./config/db.js');

const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();
connectDB().then(console.log('we have a connection to mongo!'));

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});

// Middleware //
const pages = require('./routes/pages');
const liking = require('./routes/liking');
const filter = require('./routes/filter');
const deleteDogg = require('./routes/delete');
const add = require('./routes/add');

app.set('view engine', 'ejs');
app.set('views, view');

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', pages);
app.use('/', liking);
app.use('/', filter);
app.use('/', deleteDogg);
app.use('/', add);

app.use((req, res) => {
  res.status(404).render('pages/404');
});

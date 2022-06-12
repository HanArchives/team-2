const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const session = require('express-session');
// const bodyParser = require('body-parser');

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
const users = require('./routes/users');
const register = require('./routes/register');
const login = require('./routes/login');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,

    resave: false,

    saveUninitialized: true,
  })
);

app.set('view engine', 'ejs');
app.set('views, view');

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', pages);
app.use('/', liking);
app.use('/', filter);
app.use('/', deleteDogg);
app.use('/', add);

app.use('/register', register);
app.use('/login', login);
app.use('/users', users);

app.use((req, res) => {
  res.status(404).render('pages/404');
});

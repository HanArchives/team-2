const express = require('express');
const connectDB = require('./config/db');
// const passport = require('passport');
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

// Routes //
const pages = require('./routes/pages');
const like = require('./routes/liking');
const unlike = require('./routes/unliking');
const filter = require('./routes/filter');
const deleteDog = require('./routes/delete');
const add = require('./routes/add');
const edit = require('./routes/edit');
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
app.use('/like', like);
app.use('/unlike', unlike);
app.use('/deleteDog', deleteDog);
app.use('/add', add);
app.use('/filter', filter);
app.use('/edit', edit);
app.use('/register', register);
app.use('/login', login);

app.use((req, res) => {
  res.status(404).render('pages/404');
});

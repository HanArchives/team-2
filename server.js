const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const session = require('express-session');
const flash = require('connect-flash');
const compression = require('compression');


require('dotenv').config();
connectDB().then(console.log('we have a connection to mongo!'));

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});

// Routes //
const pages = require('./routes/pages');
const like = require('./routes/liking');
const unlike = require('./routes/unliking');
const match = require('./routes/match');
const deleteDog = require('./routes/delete');
const add = require('./routes/add');
const profile = require('./routes/profile');
const register = require('./routes/register');
const login = require('./routes/login');
const logout = require('./routes/logout');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

// view ejs
app.set('view engine', 'ejs');
app.set('views, view');

app.use(express.static(path.join(__dirname, 'static')));

// use routes
app.use('/', pages);
app.use('/like', like);
app.use('/unlike', unlike);
app.use('/deleteDog', deleteDog);
app.use('/add', add);
app.use('/match', match);
app.use('/profile', profile);
app.use('/register', register);
app.use('/login', login);
app.use('/logout', logout);

//passport config
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());


// compression using comprssion
app.use(compression());



// 404
app.use((req, res) => {
  res.status(404).render('pages/404');
});

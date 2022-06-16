const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const session = require('express-session');
const shrinkRay = require('shrink-ray-current');


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
app.use('/match', match);
app.use('/edit', edit);
app.use('/register', register);
app.use('/login', login);

//passport config
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

//compression using shrinkray
const type = require('./middleware/serve');
const encoding = require('./middleware/serve');

app.use(
  shrinkRay({
    filter: req => req.headers['accept'].includes(['text/html'])
  })
  );

  app.get(['*.js', '*.css'], type.setContentType, encoding.setContentEncoding)

  //  compression using compression
  // const compression = require('compression');
  // app.use(compression({
  //   level: 6, // You can choose from level 0-9. 6 is best for processor usage optimalisation
  //   threshold: 0 // Makes every file from 0KB compress.
  // })
  // );





// 404
app.use((req, res) => {
res.status(404).render('pages/404');
});
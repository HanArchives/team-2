const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const session = require('express-session');
const flash = require('connect-flash');
const compression = require('compression');
const nodemailer = require('nodemailer');

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
    // cookie: { secure: true },
  })
);

app.use(flash());

// view ejs
app.set('view engine', 'ejs');
app.set('views, view');

app.use(express.static(path.join(__dirname, 'static')));

//passport config
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Authentication
require('./controller/AuthenticateController');

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

// compression using comprssion
app.use(compression());

// nodemailer, contact
async function mainMail(name, email, subject, message) {
  let transporter = await nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.HOTMAIL_USER,
      pass: process.env.HOTMAIL_PASSWORD,
    },
  });
  let mailOption = {
    from: process.env.HOTMAIL_USER,
    to: process.env.HOTMAIL_USER,
    subject: subject,
    html: `You got a message from 
    Email : ${email}
    Name: ${name}
    Message: ${message}`,
  };
  console.log(mailOption);
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve('Message Sent Successfully!');
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

app.get('/contact', (req, res) => {
  res.render(contact.html);
});

app.post('/contact', async (req, res, next) => {
  const { yourname, youremail, yoursubject, yourmessage } = req.body;
  try {
    await mainMail(yourname, youremail, yoursubject, yourmessage);

    res.redirect('/contact');
  } catch (error) {
    console.log(error);
    res.send('Message Could not be Sent');
  }
});

// 404
app.use((req, res) => {
  res.status(404).render('pages/404');
});

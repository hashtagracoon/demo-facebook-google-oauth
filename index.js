const express = require('express');
const app = express();

const keys = require('./config/keys');

const cookieSession = require('cookie-session');

const passport = require('passport');
const passportService = require('./services/passport');
passportService.setup();

const defaultRoute = require('./routes/default');
const authRoute = require('./routes/auth');

const mongoose = require('mongoose');
mongoose.connect(keys.mongoDBURI)
  .then(() => { console.log('connected to mongoDB'); })
  .catch(() => { console.log('Could not connect to mongoDB...'); });

app.use(
  cookieSession({
    maxAge: 86400 * 1000,
    keys: [ keys.cookieKey ]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', defaultRoute);
app.use('/auth', authRoute);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

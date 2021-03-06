const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/');
  }
);

router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'user_likes']
  })
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook'),
  (req, res) => {
    res.redirect('/');
  }
);

router.get('/api/user', (req, res) => {
  res.send(req.user);
});

router.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

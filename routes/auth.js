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
    res.redirect('welcome');
  }
);

router.get('/api/user', (req, res) => {
  res.send(req.user);
});

router.get('/api/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

module.exports = router;

const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/plus.circles.read']
  })
);

router.get('/google/callback', passport.authenticate('google'));

module.exports = router;

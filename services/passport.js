const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const { User } = require('../models/users');
const to = require('../util/to');

module.exports = {

  setup: () => {

    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
      const [err, user] = await to(User.findById(id));
      if(err) {
        console.log('deserializeUser error: ', err);
        done(err, null);
      }
      else {
        done(null, user);
      }
    });

    passport.use(
      new GoogleStrategy(
        {
          clientID: keys.googleClientID,
          clientSecret: keys.googleClientSecret,
          callbackURL: '/auth/google/callback',
          proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
          console.log('accessToken', accessToken);
          console.log('refreshToken', refreshToken);
          console.log('profile', profile);

          const [err, oldUser] = await to(User.findOne({ provider: 'google', profileId: profile.id }));
          if(err) {
            console.log('query mongoDB error: ', err);
            done(err, null);
          }
          else if(!oldUser) {
            console.log('create new user: ', profile.id);
            new User({
              provider: 'google',
              profileId: profile.id,
              name: profile.displayName
            })
              .save()
              .then((user) => { done(null, user); });
          }
          else {
            console.log('user already signed up before');
            done(null, oldUser);
          }

        }
      )
    );

    passport.use(
      new FacebookStrategy(
        {
          clientID: keys.facebookClientID,
          clientSecret: keys.facebookClientSecret,
          callbackURL: '/auth/facebook/callback',
          profileFields: ['id', 'displayName', 'emails', 'likes'],
          proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
          console.log('accessToken', accessToken);
          console.log('refreshToken', refreshToken);
          console.log('profile', profile);

          const [err, oldUser] = await to(User.findOne({ provider: 'facebook', profileId: profile.id }));
          if(err) {
            console.log('query mongoDB error: ', err);
            done(err, null);
          }
          else if(!oldUser) {
            console.log('create new user: ', profile.id);
            new User({
              provider: 'facebook',
              profileId: profile.id,
              name: profile.displayName
            })
              .save()
              .then((user) => { done(null, user); });
          }
          else {
            console.log('user already signed up before');
            done(null, oldUser);
          }
        }
      )
    );
  }

};

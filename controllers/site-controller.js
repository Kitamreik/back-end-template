// DO NOT CHANGE
const express = require('express');

// call in the User Data Model
const User = require('../models/user-model');

// call in the data from the site
const siteData = require('../data/site-data');
const passport = require('passport');

module.exports = {
//   for a page that doesn't require specific data to pass through
/*
    page-name: (request, response) => {
        response.render('pages/[path]', {
            data: data
        });
    },

*/

// Require the routes you set up here

// index loads the homepage
    index: (request, response) => {
    response.render('pages/index', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
    });
  },
  register_get:(request, response) => {
    response.render('pages/register', {
      copyrightYear: siteData.year
    });
  },
  register_post:(request, response) => {
    const {username, password} = request.body;
    User.register({username: username}, password, (error, user) => {
      if (error) {
        console.log(error);
        response.redirect('/register');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/login');
        });
      }
    }); 
  },
  login_get: (request, response) => {
    response.render('pages/login', {
      copyrightYear: siteData.year
    });
  },
  login_post: (request, response) => {
    const {username, password} = request.body;
    const user = new User({
      username: username,
      password: password
    });

    request.login(user, (error) => {
      if (error) {
        console.log(`The error at login is: ${error}`);
        response.redirect('/login');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin');
        });
      }
    });
  },

  // most updated version
  logout: (request, response) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
      });
    },

    // do not touch
  google_auth: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
  google_redirect: [
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(request, response) {
      response.redirect('/admin');
    }
  ]
}
// call in the data from the site
const siteData = require('../data/site-data');
const Feature = require('../models/feature-model');

// Call in the models you want to manage as constructor functions
// ex. const Author = require('../models/authorModel');

module.exports = {
    admin: (request, response) => {
        // Uncomment this line of code to render the page without authentication
        // response.render('pages/admin', {
        //     data: data
        // }); 
        if (request.isAuthenticated()) {
            response.render('pages/admin', {
                data: data
            }); 
            // auth2 is initialized with gapi.auth2.init() and a user is signed in.
            // experimental ID tracking
            if (auth2.isSignedIn.get()) {
                var profile = auth2.currentUser.get().getBasicProfile();
                console.log('ID: ' + profile.getId());
                console.log('Full Name: ' + profile.getName());
                console.log('Given Name: ' + profile.getGivenName());
                console.log('Family Name: ' + profile.getFamilyName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
            }
        } else {
            response.redirect('/login');
        }
    },

    // to see all of the data, ex. Authors as an admin

    admin_feature: (request, response) => {
      if(request.isAuthenticated()){
        Feature.find({}, (error, allFeatures) => {
          if(error){
            return error;
          } else {
            response.render('pages/admin/entries', {
              copyrightYear: siteData.year,
              featureArray: allFeatures
            });
          }
        })
      } else {
        response.redirect('/login')
      }
   },

  //  pulling data from a form, ex. Create Author from the admin side

  create_entry: (request, response) => {
    if(request.isAuthenticated()){
      response.render('pages/create-entry', {
        copyrightYear: siteData.year,
      });
    } else {
      response.redirect('/login')
    }
  },

  // to get the update form page
    entry_update_get: (request, response) => {
      if(request.isAuthenticated()){
        const { _id } = request.params;
        Feature.findOne({_id: _id}, (error, foundFeature) => {
          if(error) {
            return error;
          } else {
            response.render('pages/update-entry', {
              copyrightYear: siteData.year,
              foundFeature: foundFeature
            });
          }
        });   
      } else {
        response.redirect('/login')
      }
  }

}
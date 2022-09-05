const siteData = require('../data/site-data');
const Feature = require('../models/feature-model');
// define the model

// below is pulled from feature-router.js
module.exports = {
    // show me all of the entries
  all_entries: (request, response) => {
    Feature.find({}, (error, allFeatures) => {
      if(error){
        return error;
      } else {
        response.render('pages/admin/entries', {
          copyrightYear: siteData.year,
          featureArray: allFeatures
        });
      }
    });
  },

//   show me specific details about each entry by id
  entry_detail: (request, response) => {
    const {_id} = request.params;
    Feature.findOne({_id: _id}, (error, foundFeature) => {
      if(error) {
        return error;
      } else {
        response.render('pages/entry-detail', {
          name: siteData.userName,
          copyrightYear: siteData.year,
          feature: foundFeature
      });
      }
    })
  },

//   the create form data that is entered and sent
  create_post_entry: (request, response) => {
    // change base off create-entry.ejs
    const {test, test2, test3, text1} = request.body;
    const newFeature = new Feature ({
      test: test,
      test2: test2,
      test3: test3,
      text1: text1
    });

    newFeature.save();
    // connect admin-controller here
    response.redirect("/admin/entries"); 
  },

// edit an entry form data that is entered and sent
  entry_update_put: (request, response) => {
    const { _id } = request.params;
    const {test, test2, test3, text1} = request.body;
    Feature.findByIdAndUpdate(_id, {$set: {
        test: test,
        test2: test2,
        test3: test3,
        text1: text1
    }}, {new: true}, error => {
      if(error) {
        return error;
      } else {
        response.redirect("/admin/entries");
      }
    })    
  },

//   delete an entry with a button
  entry_delete: (request, response) => {
    const { _id } = request.params;
    Feature.deleteOne({_id: _id}, error => {
      if(error) {
        return error;
      } else {
        response.redirect("/admin/entries")
      }
    }); 
  }
}
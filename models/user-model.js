// DO NOT TOUCH
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const {Schema} = mongoose;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    googleId: {
      type: String,
    }
  });

//   Use the plugin method on the userSchema variable to let it know that the functionalities of both passport-local-mongoose and mongoose-findorcreate are available
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// add a variable called User that contains the collection name and schema
const User = mongoose.model('User', userSchema);

// Use passport.use() to add the createStrategy method on the User variable
passport.use(User.createStrategy());

// Use passport to run the serializeUser() method. You can get this method directly from Passport Documentation.
passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.displayName });
  });
});

// Use passport to run the deserializeUser() method. You can get this method directly from Passport Documentation.
passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

// Use passport.use() to create a new GoogleStrategy

// The first param is an object that includes the following keys: clientID, clientSecret, callbackURL, userProfileURL
// You can get the values from Google Developers Console. Make sure to save this information into your .env file. Use the Environment Variable method as the value for both the clientID and clientSecret
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/admin",
  },

//   The second param is a function in which the User variable will run the findOrCreate method to search in MongoDB if a user exists or not. If they don't exist, the findOrCreate method will create on exporting User so that its available throughout the application
  function(accessToken, refreshToken, email, cb) {
    User.findOrCreate({ googleId: email.id }, function (err, user) {
      return cb(err, user);
    });
  }
  ));
  
module.exports = User;
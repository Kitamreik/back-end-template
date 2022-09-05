const dotenv = require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();
// const PORT = 3000;
const PORT = process.env.PORT || 3000;

// Morgan Functionality 
const morgan = require('morgan');
app.use(morgan('dev'));

// Adding Path module and EJS to app.js 
const path = require('path');

// Use the Path module to point Node.js to the public directory that contains all of your assets (images, scripts.js, and styles.js) for your project
app.use(express.static(path.join(__dirname, 'public')));

// Configure Node.js to use EJS as its views engine
app.set('view engine','ejs');

// Requiring Method Override
const methodOverride =  require('method-override');
app.use(methodOverride('_method'));

// Adding Functionality to app.js
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Updating app.js to use Express Session and Passport
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false, 
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Require index-routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

// Require connection to MongoDB
require('./config/connection');

//Server
app.listen(PORT, () => {
    console.log(`The server is ready and all ears on port ${PORT}!`);
});


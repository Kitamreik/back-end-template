## NEW SECTION

#### SUBSECTION
*Bullet

---
Folder Structure

* config --> connection.js
* controllers --> site, admin, log/data
* data --> data.js (to set up dummy data)
* models --> the data from forms will be sent to/schemas
* public --> css/img/js
* routes --> where each link to the site will go (site, admin, log/data, index)
* views --> pages/partials --> (website) pages and partials (that load)

Outside:
*app.js
*formDatabase.json
*package-lock.json
*package.json
*Procfile
*another README if deploying app

---

---


--- 

##Installing Node.js and dependencies
Create a new file called app.js. Make sure that this file is at the root of your directory
Inside of your terminal, type in the following to start a Node project: npm init. Answer all the prompts until completion. Remember that app.js is replacing the index.js that it suggests
Next, install all the following dependencies that will be needed for the project: npm install express ejs mongoose dotenv morgan method-override
Then install all the dependencies needed only for development: npm install nodemon uuid --save-dev
In VSCode, open the package.json file and add the following code within the script object:
"dev": "nodemon app.js"

---

##Preparing the Directory Structure to be a Node.js Project
In the root directory, make a new directory called views
Inside of the views directory, make another directory called pages
Move all of the HTML files into the pages directory
In the root directory, 
Kit Edit: created a .gitignore with no file extension and used the touch command to ensure node_modules doesn’t appear in the repo
Make sure that you still have a public directory that contains three directories: images, scripts, and styles. If you don't have this, make sure to organize your directory now. At the end of reorganizing, your structure should look like this: (see folder-structure.png)

#### Pull this from your front end


---
####Run server and test routes
start server by running npm run dev

---
##Adding Path module and EJS to app.js 
In app.js, require the Path module
Use the Path module to point Node.js to the public directory that contains all of your assets (images, scripts.js, and styles.js) for your project
Configure Node.js to use EJS as its views engine
Update all routes handlers → converting HTML
Update all GET routes handlers to now render EJS files as the response from the server
Convert all HTML files to EJS files
Within your VSCode Explorer tab, open the pages directory and manually rename all the HTML files from having the .html extension to .ejs

Update links in all EJS files
Review all of your EJS files and make sure to remove 'public' from all relative paths if you have coded your relative links that way. → images

---
##Create 3 partials 
In VSCode, create a new directory called partials inside of the views directory
Inside the partials directory, create three new files called head.ejs, footer.ejs, and nav.ejs
Open index.ejs and copy your code starting from !DOCTYPE html> until the opening body> tag
Paste the code inside of the head.ejs file and save
Back in the index.ejs file, copy all of your code for the navigation section. This code should include the logo and all the links in the menu
Paste the code inside the nav.ejs file and save
Back in the index.js file, copy all of your code for the footer section. This code should include the code that makes the bottom half of the page (Visit Us, Links, and Follow Us) until the closing /html> tag.
Paste the code inside of the footer.ejs file and save

####Add EJS Include tag to all EJS files to load partials
Starting with index.ejs, select the code that is now head.ejs and replace it with the EJS Include tag that will render the head.ejs code
Do the same for the nav section and footer section. You should now have 3 EJS Include tags in your index.ejs file

---
####Open site-controller.js.
The KEY of index should have the handler that is responsible for loading the homepage. 
Add the data that is already required in site-controller.js to be passed in as data for this handler
Add routes with parameters → converting links

---
##Adding more directories and files into our project
In VScode and in the root directory, make a new (temporary) directory call data
Put the data.js file (found on this assignment page) into this directory
In VSCode and in the root of the project, make a new directory called routes
Inside of the routes directory, create # js files called: -routes.js
index-routes.js
admin-routes.js
site-routes.js

In VSCode and in the root of the project, make a new directory called controllers

Inside of the controllers directory, create # js files called: -controller.js
admin-controller.js
Site-controller.js

Add UUID to data.js
Open the data.js file, located in the data directory
Require UUID
At the start of each object, add a key called _id and in the value, add the variable that contains UUID

Make sure to export the data using module.exports() [Slack: module.exports = array (of comics)]
Moving routes into a new home → controller
Open the site-routes.js file. In this file you will need to do the following:
Require the routes files you set up

####Require Express Router
Using Router, you need 3 routes. Below is the information that each routes needs:
EXAMPLE
PATH: '/' HANDLER: will go to site-routes.js
PATH: '/books' HANDLER: will go to book-routes.js
PATH: '/admin-console' HANDLER: will go to admin-routes.js
Make sure to export the router using module.exports()
Open the site-routes.js file. In this file you will need the following:
Require Express, Express Router, and site-controller.js

Inside of your app.js, you will need to identify which routes will load: 

EXAMPLE
the homepage, → index, /
about page, → about, /about
and login page. → login, /login
Once you have identified these 3 routes in your app.js, cut those routes and paste them into site-routes.js.
Make sure to update these routes to use the Express Router instead of app
Also, make sure to export the router using module.exports()
Repeat the previous step above (site-routes.js) for EXAMPLE
admin-routes.js (1 route - for now 5/3)

####Moving handlers to their new home
Open the site-controller.js file. In this file, you will need to do the following:
Require the data.js that is in the data directory
Use module.exports() that will have a value of an object. The object will include the following:

EXAMPLE
KEY: index VALUE: handler that will show the homepage
KEY: about VALUE: handler that will show the about page
KEY: login VALUE: handler that will show the login page
Remember that the value is coming from the handler located in site-routes.js. You are removing from site-routes.js and pasting them into site-controller.js
Once the site-controller.js file has been completed. Make sure to update site-routes.js where the GET method is calling for the object that contains its original handler. 
Repeat the previous step above (site-controller.js) for:
admin-controller.js (1 routes)

####Adding functionality to app.js
In app.js require Method Override. This should have already been added as a package but you can confirm in package.json
Use app.use() to use Method Override and Express URLEncoded
At this point, you shouldn't have any routes in your app.js (they were moved to their new home in step 2 of this assignment). 
We still need to get our app.js to know that routes exist so we will need to:
Require the index-routes.js file
Add the app.use() method that contains the following:
PATH: '/' HANDLER: will go to index-router.js 
you need: app.use('/', indexRoutes);
Preparing forms to handle data

Kit note: the only form is the LOGIN and the footer forms
Open the two ejs files that contain the: EXAMPLE
create new comic books form → create
update comic book forms → update
Add action and methods to these forms
In both forms add a new input field that has a type of text. 
This field will temporarily handle images for each new or updating comic book. [form action="books/<%= foundBook._id %>" method="POST">]
Remember to include the label for these new input fields

---
##Directions- MongoDB

Please make sure that when you are exporting … do it in ANOTHER terminal
Do not do it while in mongo

Quit then export/import

Split terminals in VS Code → one for git/server/mongoDB

---

 
####Create database via MongoDB Shell
Make sure that both mongod and mongo are running in separate terminal windows at the same time
Make a database called personalProject
Make a collection called formDatabase
Insert objects from data.js file into database - PENDING data, 5/3
You can either use the insertOne method or the insertMany method to import the data from data.js into the database
Export database into a JSON file PENDING data, 5/3 → no records atm
Make sure to open a brand new terminal window in order to export the database

Use the mongoexport command to export and make sure to name the file formDatabase.json
mongoexport --collection=formDatabase --db=personalProject --out=formDatabase.json 

Add the formDatabase.json file into the root of directory of this project

---
####It's time to start using Mongoose in our application in order to add a connection, a database, a collection, the ability to do CRUD, and have validation on both the client-side and server-side

##SECTION 1
Follow the instructions provided in class to create a new cluster. Make sure to have the following information in order to connect MongoDB Atlas to your app
Follow the instructions found in period 3's slides in order to create a new project
Make sure that you save the following information that is needed to add into the .env file. That step will happen in a future step
Create a new project via Google Developers Console
Visit the Google Developer's Console (https://console.developers.google.com/) and log in
Install Mongoose
Via your terminal, install Mongoose into your package.json
Use Mongoose to connect to MongoDB Community via your application
In the root directory, create a new directory called config
Inside of config, create a new file called connection.js
Open connection.js in VSCode and require Mongoose
Use mongoose.connect() to make your connection to MongoDB Community. Remember to include the 2 options!
Open app.js and require the connection.js into app.js

---

Define your user Schema (with server-side validation) and Model
In the root directory, create a new directory called models
Inside of models, create a new file called user-model.js
Open user-model.js in VSCode and require Mongoose
Get Schema from Mongoose
Create a new variable called userSchema. As a value, make a new Schema.
The scheme should include the following keys:
Username
Password
googleid

In regards to validation, decide what you think is needed! But please include validation in order to make sure that your database stays clean

Create a new variable called User that has the Mongoose model as the value. The model should be able to create a collection called comics and also use the userSchema for the collection structure
Make sure to export User so that it can be used around the application itself
Update controllers to include CRUD with Mongoose
In VSCode, open the 2 controllers js files → admin/site
For the admin controller, include the following:
Make sure to replace the data.js file and require the userSchema
There are 2 handlers that are pulling data from comicSchema. Can you figure out which Mongoose methods are needed to search inside the database? - post/put → create/update
For the site controller, include the following:
Make sure to replace the data.js file and require the userSchema
There is 1 handler that is pulling data from comicSchema. Can you figure out which Mongoose method is needed to search inside the database?
Add Client-side Validation
In VSCode, open the 3 ejs files that contain a form (create form, update form, and login form)

##SECTION 2
####Installations
In your terminal, install the following packages:
express-session mongoose-findorcreate passport passport-google-oauth20 passport-local passport-local-mongoose dotenv
Environment Variables and updating the URI string within connection.js
In the root of your directory, create a new file called .env
Open .env and ad the following variables
DB_URL - the connection string from the connection.js file 
Make sure to update the connection string to include the your username, password, and the name of the database
Client ID - copy and paste this information from Google Developer Console
Client Secret - copy and paste this information from Google Developer Console
Open connection.js, which is located in the config folder, and require dotenv
replace the connection string argument by using the Environment Variable method

####Updating app.js to use Express Session and Passport
In your VSCode, open app.js which can be found in the root directory
Require express-session, passport, and dotenv
Use app.use() in order for the app to know to utilize session (express-session)
make sure you have an object that contains the secret, resave, and saveUninitalized keys and their values
make sure to use the Environmental Variable method to replace the secret key. The actual key should be added into the .env file under the variable 'SECRET_KEY'
Inside of the app.js file, use app.use() in order to initialize passport
Use app.use() in order to let passport to utilize session
Update the Navigation for a new link
In VSCode open the navigation.ejs file that should be located in your pages > partials directory
Add a new link called Register that will go to '/register'

####Update Login form
In VSCode open the login.ejs file that should be located in your pages directory
Make sure that your form has the action and method attributes. The form should be sent to '/login' route
If you have an email field in your login form, please update it so that it is username
Make sure that this username field has a type of 'text'
You will need to add a new button that will allow users to log in using their Google account
the anchor href should include the value of  '/auth/google
see attached file for a mock-up of where the Google button is located.

####Update Admin page
In VSCode open the admin.ejs file that should be located in your pages directory
You will need to add a new button that will allow users to logout
the anchor href should include the value of  '/logout/
see attached file for a mock-up of where the Google button is located.
Create a new page for the Register form
In your pages directory, create a new file called register.ejs
Copy the entire code inside login and paste it into register.ejs
Update the h1 on this page to say Register
Update the action attribute on the form to go to '/register route
You will need to add a new button that will allow users to register using their Google account
the anchor href should include the value of  '/auth/google
see attached file for a mock-up of where the Google button is located.

##SECTION 4
Create a new model for User
In your models directory, create a new file called user-model.js
Open user-model.js and require 
mongoose
schema
passport
passport-local-mongoose
passport-google-oauth20
mongoose-findorcreate

add a variable called userSchema that contains the following:

username = String
password = String
googleId = String

do NOT include the required validation to either key/value pair. You will run into issues if you do.

Use the plugin method on the userSchema variable to let it know that the functionalities of both passport-local-mongoose and mongoose-findorcreate are available
add a variable called User that contains the collection name and schema
Use passport.use() to add the createStrategy method on the User variable
Use passport to run the serializeUser() method. You can get this method directly from Passport Documentation.
Use passport to run the deserializeUser() method. You can get this method directly from Passport Documentation. 
Use passport.use() to create a new GoogleStrategy

The first param is an object that includes the following keys: clientID, clientSecret, callbackURL, userProfileURL
You can get the values from Google Developer's Console. Make sure to save this information into your .env file. Use the Environment Variable method as the value for both the clientID and clientSecret

The second param is a function in which the User variable will run the findOrCreate method to search in MongoDB if a user exists or not. If they don't exist, the findOrCreate method will create on
exporting User so that its available throughout the application


##SECTION 5 - ROUTES AND CONTROLLERS
Add new routes to site-routes.js
Update site-controller.js
In VSCode open the site-controller.js file that should be located in your controllers directory
Update site-controller.js to include the following:
require passport
require the User model

####For the 6 new handlers, you will need to do the following:
##login with post method: 
use the request.body to get the values from the username and password fields. You want to store these values into a variable called 'user'
use the .login method on the User variable. The login method() takes in 2 arguments
the variable user that you just created in the previous step
a callback function that contains an if/else statement
if there is a message, console.log the error message
otherwise, use the passport.authenticate() method to include the 'local' strategy. You will also need another parenthesis that includes the request object, the response object, and another callback that will redirect the user to '/admin-console'

##register with get method: 
render the register form
register with post method: 
use the .register method on the User variable. The register method() takes in 3 arguments: 
An object that will store the username that comes from the request.body, into a property called 'username'
The password that comes from the request.body
a call back function that contains an if/else statement
if there is a message, console.log the error message
otherwise, use the passport.authenticate() method to include the 'local' strategy. You will also need another parenthesis that includes the request object, the response object, and another callback that will redirect the user to '/admin-console'
/auth/google: 
use the .authenticate() method that takes in 2 arguments
a string called 'google'
an object that has a key called 'scope' and a value which is an array. This array has 3 strings, 'openid', 'profile', 'email'
/auth/google/NAME?: 
use .authenticate() method  that takes in 3 arguments
a string called 'google'
ab object that has a key called 'failureRedirect' and a value of '/login'
a callback function that will redirect the user to the '/admin-console' page
logout: 
trigger the logout method on the request object and
 then redirect the user to the homepage ('/')
Update admin-controllers.js to protect pages and check for authentication
In your VSCode, open admin-controller.js that can be found in your controllers directory
All handlers in admin-controllers.js will need to have the code that checks for authentication
This is the if statement that checks to see if the request.isAuthenticated() is equal to true

---

see Back End Documentation: https://docs.google.com/document/d/1-nz1wlTWDfKy-1bZMHzepnRB14c82uRvvoj7yx8obTA/edit?usp=sharing

---

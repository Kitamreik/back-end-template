const mongoose = require('mongoose');
const {Schema} = mongoose;

// pulled from the create-entry.ejs
const featureSchema = new Schema({
  test: {
    type: String,
    required: [true, 'A first name is required.'],
    minlength:[1,'Minimum length for the first name is 1 characters.']
  },
  test2: {
    type: String,
    required: [true, 'A last name is required.'],
    minlength:[1,'Minimum length for the last name is 1 characters.']
  },
  test3: {
    type: String,
    required: [true, 'A response is required.'],
    minlength:[1,'Minimum length for the last name is 1 characters.']
  },
//   birthYear: {
//     type: Number,
//     required: [true, 'The birth year is required.'],
//     min:[9999, 'You need the full year of birth'],
//     max:[9999, 'You need the full year of birth']
//   },
  text1:{
    type: String,
    required: [true, 'A response is required.'],
    minlength:[10,'Minimun length for the bio is 10 characters.']
  }
});

const Feature = mongoose.model('Feature', featureSchema);

module.exports = Feature;
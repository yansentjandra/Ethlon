const mongoose = require('mongoose');
const { Schema } = mongoose;

const volunteerSchema = new Schema({
  volunteerName: String,
  language: String,
  available: String,
  contact: String,
  imageURL: String,
  // add more data later here
});

mongoose.model('volunteers', volunteerSchema);

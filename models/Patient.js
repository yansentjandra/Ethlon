const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientSchema = new Schema({
  patientName: String,
  language: String,
  date: {
    type: Date,
    default: Date()
  }
  // add more data later here
});

mongoose.model('patients', patientSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String
  // add more data later here
});

mongoose.model('users', userSchema);

const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

id = 12345;

(id,done) => {
  User.findOne({ userId: id }).then((existingUser) => {
    if(existingUser) {
      // We have a record with this id
      // done(null, existingUser);
    } else  {
      // We don't have a record with this id
      new User({ userId: id }).save()
        // .then(user => done(null, user));
      console.log(user);
    }
  });
}
// new User({ userId: id }).save();

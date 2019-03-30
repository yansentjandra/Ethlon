const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/connect');

mongoose.connect(keys.mongoURI);

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there2'});
});

const PORT = process.env.PORT || 8000;
app.listen(8000);

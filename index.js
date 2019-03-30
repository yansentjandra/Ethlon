const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
// const busboy = require('connect-busboy');
// const busboyBodyParser = require('busboy-body-parser');
// import cors from 'cors';

require('./models/Patient');
require('./models/Volunteer');
require('./services/connect');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(busboy());
// app.use(busboyBodyParser());
// app.use(cors());

// CORS
app.use(function (req, res, next) {
  //Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, Content-Type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => {
  res.send({ hi: 'My name is Vincent'});
});

// app.get('/api/input', (req, res) => {
//   res.json({message: 'Helloworld'});
// });

app.post('/api/input', (req, res) => {
  console.log(req.body)
  // name = req.body.language;
  // const Volunteer = mongoose.model('volunteers');
  // new Volunteer({
  //   volunteerName: req.body.volunteerName,
  // }).save()
  // .then(volunteer => res.json(volunteer)
  // .catch(err => console.log(err)));
});

app.get('/result', (req, res) => {
  // var db = mongoose.connection;
  // db.on('error', console.error.bind(console, 'Connection error: '));
  // db.once('open', function(callback) {
  //   //The code in this asynchronous callback block is executed after connecting to MongoDB.
  //   console.log('Successfully connected to MongoDB.');
  // });
  //
  // var Schema = mongoose.Schema;
  // var volunteerSchema = new Schema({
  //   userName: String,
  //   language: String,
  //   status: String,
  //   contact: String,
  // });

  var Volunteer = mongoose.model('volunteers');
  // console.log(Volunteer);
  Volunteer.find((err, volunteers) => {
    console.log(volunteers);
    res.json(volunteers);
  });
});

const PORT = process.env.PORT || 8000;
app.listen(8000);

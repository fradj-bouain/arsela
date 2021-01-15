const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb://127.0.0.1/testArsela', {
  useCreateIndex: true, 
  useNewUrlParser: true, 
  useUnifiedTopology: true});
mongoose.Promise = global.Promise;

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());


// Routes
app.use('/api/addUser', require('./Routes/addUser'));
app.use('/api/getUser', require('./Routes/getUser'));

module.exports = app;
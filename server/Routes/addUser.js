const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/User');


router.post('/', (req, res, next) => {
  console.log(req.body);
 
  

const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });
  user
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'User created'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

});

module.exports = router;
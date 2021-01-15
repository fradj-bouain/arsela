const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/User');


router.get('/', (req, res, next) => {
  console.log(req.body);
  User.
  find().
  exec((err,users)=>{
      if(err) return res.status(400).send(err);
      res.send(users)
  })



});
  module.exports = router;



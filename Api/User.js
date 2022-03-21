const mongoose = require('mongoose');
const User = require('../DB/User');
const express = require('express')
const route = express.Router();

route.post('/', async (req, res) => {
  const { firstName, lastName } = req.body;
  let user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  let userModel = new User(user);

  try {
  await userModel.save();
  res.send(userModel);
  }
  catch (err) {
    res.json(err);
  }
});

route.get('/', async(req,res) => {
  try {
    const user = await User.find()
    // localStorage.setItem("myValue",user);
    // window.location.href = "../index.html";
    res.json(user)
  }
  catch (err) {
    res.json(err)
  }
})

module.exports = route;
var User = require('../models/user');

// USERS INDEX
function usersIndex(req, res) {
  User.finc(function(err, users) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(users);
  });
}

// USERS CREATE
function usersCreate(req, res) {
  User.create(req.body, function(err, user) {
    if(err) return res.status(400).json(err);
    return res.status(201).json(user);
  });
}


module.exports = {
  index: usersIndex,
  create: usersCreate
}
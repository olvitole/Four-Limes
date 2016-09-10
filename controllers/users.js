var User = require('../models/user');

// USERS INDEX
function usersIndex(req, res) {
  User.find(function(err, users) {
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

// USER SHOW
function usersShow(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) return res.status(500).json(err);
    if(!user) return res.status(404).json({ message: "Could not find a user with that id" });
    return res.status(200).json(user);
  });
}

// USER UPDATE
function usersUpdate(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }, function(err, user) {
    if(err) return res.status(400).json(err);
    return res.status(200).json(user);
  });
}

// USER DELETE
function usersDelete(req, res) {
  User.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  });
}


module.exports = {
  index: usersIndex,
  create: usersCreate,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
}
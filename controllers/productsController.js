var Product = require('../models/product');

// INDEX
function productIndex(req, res) {
  Product.find(function(err, product) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(product);
  });
}

// CREATE (Add product)
function productCreate(req, res) {

  if(req.file) req.body.image = req.file.key;

  Product.create(req.body, function(err, product) {
    if(err) return res.status(400).json(err);
    return res.status(201).json(product);
  });
}

// SHOW (Show one product type)
function productShow(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if(err) return res.status(500).json(err);
    if(!product) return res.status(404).json({ message: "Couldn't find product with that id" });
    return res.status(200).json(product);
  });
}

// UPDATE
function productUpdate(req, res) {

  if(req.file) req.body.image = req.file.key;

  Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true}, function(err, product) {
    if(err) return res.status(400).json(err);
    return res.status(200).json(product);
  });
}

// DELETE
function productDelete(req, res) {
  Product.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  })
}

module.exports = {
  index: productIndex,
  create: productCreate,
  show: productShow,
  update: productUpdate,
  delete: productDelete
}
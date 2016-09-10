var Order = require('../models/order');

// ORDERS INDEX
function ordersIndex(req, res) {
  Order.find(function(err, users) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(orders);
  });
}

// ORDERS CREATE
function ordersCreate(req, res) {
  Order.create(req.body, function(err, user) {
    if(err) return res.status(400).json(err);
    return res.status(201).json(order);
  });
}

module.exports = {
  index: ordersIndex,
  create: ordersCreate
}
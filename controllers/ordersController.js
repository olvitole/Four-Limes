var Order = require('../models/order');
var User = require('../models/user');
var email = require('../config/email');

// ORDERS INDEX
function ordersIndex(req, res) {
  Order.find()
    .populate('items.product user')
    .then(function(orders) {
      return res.status(200).json(orders);
    })
    .catch(function(err) {
      return res.status(500).json(err);
    })
}

// ORDERS CREATE
function ordersCreate(req, res) {

  var order = req.body.data;

  order.user = req.user._id;

  order.items = order.items.map(function(item) {
    return {
      product: item.id,
      quantity: item.quantity
    }
  });

  Order.create(order)
    .then(function(order) {

      return User.findById(req.user._id)
        .then(function(user) {
          return email.sendMail({
            to: user.email,
            from: process.env.GMAIL_ID,
            subject: "Your Delivery from FourLimes",
            text: "Thanks for your order, ya legend!"
          });
        })
        .then(function(info) {
          return res.status(200).json(order);
        });
    })
    .catch(function(err) {
      console.log(err);
      return res.status(400).json(err);
    });
}

// SHOW (Show one order)
function orderShow(req, res) {
  Order.findById(req.params.id)
    .populate('items.product')
    .then(function(order) {
      if(!order) return res.status(404).json({ message: "Couldn't find order with that id" });
      return res.status(200).json(order);
    })
    .catch(function(err) {
      return res.status(500).json(err);
    });
}

// ORDERS DELETE
function ordersDelete(req, res) {
  Order.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  })
}

module.exports = {
  index: ordersIndex,
  create: ordersCreate,
  delete: ordersDelete,
  show: orderShow
}

var Order = require('../models/order');

// ORDERS INDEX
function ordersIndex(req, res) {
  Order.find()
    .populate('items.product')
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

  order.items = order.items.map(function(item) {
    return {
      product: item.id,
      quantity: item.quantity
    }
  });

  Order.create(order, function(err, order) {
    if(err) return res.status(400).json(err);
    return res.status(201).json(order);
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

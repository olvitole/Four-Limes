var Order = require('../models/order');
var User = require('../models/user');
var email = require('../config/email');

var orderNum;

// Patch Order to PAID
function updateToPaid(req, res) {
  // orderNum = req;
  console.log("Order number is ", req);
  var isPaid = { "isPaid": true };
  Order.findByIdAndUpdate({ _id: req }, isPaid, { new: true, runValidators: true }, function(err, order) { 
      // console.log("err", err);
      //console.log("order", order);
      // console.log("res", res);
      // WHATTTTTT?????
      // if(err) return res.status(400).json(err);
      // return res.status(200).json(order);

      sendEmail(order);
    });
}
  // Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true}, function(err, order) { 
  //       if(err) return res.status(400).json(err);
  //       return res.status(200).json(order);
  //     });
  // }
  // , function(err) { 
  //       if(err) {
  //       
  //        return res.status(400).json(err);
  //      } else {
  //       console.log("Update to paid successful");
  //       return res.status(200).json(order);
  //      }  
  //     });

// Send the Email
function sendEmail(order){
/*
  order
    .populate('user')
    .populate('item.product');

  order
    .populate('user')
    .populate('item.product'),
    .populate(function (err, order) {});

  order
    .populate('user')
    .populate('item.product')
    .execPopulate();
*/
  order
    .populate('item.product user')
    .execPopulate()
    .then(function () {
      //console.log("sendEmail order:", order);
      //console.log('arguments after populate:', arguments);
      email.sendInvoiceTemplate(order);  
    })
    .catch(function(err){
      console.log(err, "Call Will, something is up with the email thingy!");
    });
/*
  order
    .populate('user', function (err, order) {})
    .populate('item.product', function (err, order) {});
*/


/*
  Order.findById(order._id)
    .populate('items.product user')
    .then(function(order) {
      console.log("sendEmail order:", order);
      // console.log("Order total: ", order.grandTotal);
      //// return email.sendMail({
      ////   to: user.email, 
      ////   from: process.env.GMAIL_ID,
      ////   subject: "Your Delivery from FourLimes",
      ////   text: "Thanks for your order, ya legend!"
      //// });
      // email.sendInvoiceTemplate(order.user.email, order.createdAt, order._id, order.user.firstName, order.user.lastName, order.user.buildingNumber, order.user.addressLine1, order.user.addressLine2,order.user.addressLine3, order.user.postCode, order.user.contactPh, order.grandTotal); 
      email.sendInvoiceTemplate(order);  
    })
    .catch(function(err){
      console.log(err, "call Will, something is up with the email thingy!");
    });
*/
}

// ORDERS INDEX
function ordersIndex(req, res) {
  Order.find()
    .populate('items.product user')
    .then(function(orders) {
      console.log("After exec orders:", orders);
      return res.status(200).json(orders);
    })
    .catch(function(err) {
      return res.status(500).json(err);
      console.log("After exec orders 500:", orders);
    })
}

// ORDERS CREATE
function ordersCreate(req, res) {
  // console.log('ordersCreate running');
  var order = req.body.data;
  // console.log("req.user", req.user);
  order.user = req.user._id;
  order.isPaid = false;

  order.items = order.items.map(function(item) {
    return {
      product: item.id,
      quantity: item.quantity
    }
  });

  Order.create(order)
    .then(function(order) {
      // console.log("r.u", req.user._id); //PASSED
      return User.findById(req.user._id)
        .then(function(user) {
          // console.log("2", req.user._id); //PASSED
          // console.log("3", order);
          // console.log(user);
          //// return email.sendMail({
          ////   to: user.email,
          ////   from: process.env.GMAIL_ID,
          ////   subject: "Your Delivery from FourLimes",
          ////   text: "Thanks for your order, ya legend!"
          //// });
        })
        .then(function(info) {
          console.log(order);
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
    .populate('items.product user')
    .then(function(order) {
      if(!order) return res.status(404).json({ message: "Couldn't find order with that id" });
      return res.status(200).json(order);
    })
    .catch(function(err) {
      return res.status(500).json(err);
    });
}

// ORDERS UPDATE
function ordersUpdate(req, res) {
  // console.log("Update req", req.body);
  // console.log("Update res", res);
  Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true}, function(err, order) { 
      if(err) return res.status(400).json(err);
      return res.status(200).json(order);
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
  show: orderShow,
  update: ordersUpdate,
  updateToPaid: updateToPaid
}

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var orderSchema = new mongoose.Schema({
  shipping: { type: Number },
  taxRate: { type: Number},
  items: [{ // array of embedded objects
    item: { type: mongoose.Schema.ObjectId, ref: 'Product' }, // referenced model
    quantity: { type: Number }
  }]
});

module.exports = mongoose.model("Order", orderSchema);
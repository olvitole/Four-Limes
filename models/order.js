var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var orderSchema = new mongoose.Schema({

  data: {
    // items: [{ any: {type: Object } }],
    items: [{ any: {
                      id: { type: mongoose.Schema.ObjectId, ref: 'Product' },
                      name: { type: String },
                      price: { type: Number },
                      quantity: { type: Number },
                      total: { type: Number }
    } }],
    shipping: { type: Number },
    taxRate: { type: Number },
    subTotal: { type: Number },
    tax: { type: Number },
    taxRate: { type: Number },
    totalCost: { type: Number }
  }

});

module.exports = mongoose.model("Order", orderSchema);


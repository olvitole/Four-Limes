var mongoose = require('mongoose');
var Promise = require('bluebird');

var orderSchema = new mongoose.Schema({
  items: [{
    product: { type: mongoose.Schema.ObjectId, ref: 'Product' },
    quantity: { type: Number },
    total: { type: Number },
    taxRate: { type: Number }
  }],
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  isPaid: { type: Boolean, default: false }
},{
  timestamps: true
});

orderSchema.pre('save', function(next) {
  
  var self = this;

  var promiseArray = this.items.map(function(item) {
    return self.model('Product').findById(item.product);
  });

  Promise.all(promiseArray)
    .then(function(products) {
      self.items = self.items.map(function(item, index) {
        item.total = item.quantity * products[index].price;
        item.taxRate = products[index].taxRate;
        return item;
      });
    })
    .then(next);
});

orderSchema.virtual('subTotal')
  .get(function() {
    return this.items.reduce(function(prev, current) {
      var w = (parseFloat(prev) + current.total);
      return w.toFixed(2);
    }, 0);
  });

orderSchema.virtual('tax')
  .get(function() {
    return this.items.reduce(function(prev, current) {
      // var roundedTax = Math.round(current.taxRate * 10);
      return prev + current.total * current.taxRate;
    }, 0);
  });

orderSchema.virtual('shipping')
  .get(function() {
    return 5.99;
  });

orderSchema.virtual('grandTotal')
  .get(function() {
    var t = (parseFloat(this.subTotal)) + this.tax + this.shipping; 
    return t.toFixed(2);
  });


orderSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("Order", orderSchema);


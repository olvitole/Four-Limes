var mongoose = require('mongoose');
var Promise = require('bluebird');

var orderSchema = new mongoose.Schema({
  items: [{
    product: { type: mongoose.Schema.ObjectId, ref: 'Product' },
    quantity: { type: Number },
    total: { type: Number },
    taxRate: { type: Number }
  }]
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
      return prev + current.total;
    }, 0);
  });

orderSchema.virtual('tax')
  .get(function() {
    return this.items.reduce(function(prev, current) {
      return prev + current.total * current.taxRate;
    }, 0);
  });

orderSchema.virtual('grandTotal')
  .get(function() {
    return this.subTotal + this.tax;
  });

orderSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("Order", orderSchema);


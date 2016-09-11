var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  
  itemName: { type: String },
  image: { type: String },
  type: { type: String },
  price: { type: Number },
  shortDescription: { type: String },
  longDescription: { type: String },
  quantityAvail: { type: Number },
  packSize: { type: String },
  onSpecial: { type: Boolean, default: false } 

});

module.exports = mongoose.model('Product', productSchema);
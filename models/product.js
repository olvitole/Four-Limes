var mongoose = require('mongoose');
var s3 = require('../config/s3');

var productSchema = new mongoose.Schema({

  itemName: { type: String },
  image: { type: String },
  type: { type: String },
  price: { type: Number },
  shortDescription: { type: String },
  longDescription: { type: String },
  quantityAvail: { type: Number },
  packSize: { type: String },
  onSpecial: { type: Boolean, default: false },
  taxRate: { type: Number }
});

productSchema.path('image')
  .get(function(image) {
    return s3.endpoint.href + process.env.AWS_BUCKET_NAME1 + "/" + image;
  })
  .set(function(image) {
    return image.split('/').splice(-1)[0];
  });

productSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Product', productSchema);

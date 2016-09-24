var mongoose = require('mongoose');
var Promise = require('bluebird');

var mainCategorySchema = new mongoose.Schema({

  categoryName: { type: String },
  subCategoryNames: [{type: mongoose.Schema.ObjectId, ref: 'subCategory' }]
});

module.exports = mongoose.model("mainCategory", mainCategorySchema);

var mongoose = require('mongoose');
var Promise = require('bluebird');

var subCategorySchema = new mongoose.Schema({
  subCategoryName: { type: String },
});

module.exports = mongoose.model("subCategory", subCategorySchema);

var subCategory = require('../models/subCategories');

// INDEX
function subCategoryIndex(req, res) {
  subCategory.find(function(err, categories) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(categories);
  });
}

// CREATE (Add a new subCategory)
function subCategoryCreate(req, res) {
  // if(req.file) req.body.image = req.file.key;
  subCategory.create(req.body, function(err, category) {
    if(err) return res.status(400).json(err);
    return res.status(201).json(category);
  });
}

// SHOW (Return one category)
function subCategoryShow(req, res) {
  subCategory.findById(req.params.id, function(err, category) {
    if(err) return res.status(500).json(err);
    if(!category) return res.status(404).json({ message: "Couldn't find a category with that id?!" });
    return res.status(200).json(category);
  });
}

// UPDATE
function subCategoryUpdate(req, res) {
  subCategory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true}, function(err, category) {
    if(err) return res.status(400).json(err);
    return res.status(200).json(category);
  });
}

// DELETE a category
function subCategoryDelete(req, res) {
  subCategory.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  })
}

module.exports = {
  index: subCategoryIndex,
  create: subCategoryCreate,
  show: subCategoryShow,
  update: subCategoryUpdate,
  delete: subCategoryDelete
}

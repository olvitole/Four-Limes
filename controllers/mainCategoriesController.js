var mainCategory = require('../models/mainCategories');

// INDEX
function mainCategoryIndex(req, res) {
  mainCategory.find(function(err, categories) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(categories);
  });
}

// CREATE (Add a new mainCategory)
function mainCategoryCreate(req, res) {
  // if(req.file) req.body.image = req.file.key;
  mainCategory.create(req.body, function(err, category) {
    if(err) return res.status(400).json(err);
    return res.status(201).json(category);
  });
}

// SHOW (Return one category)
function mainCategoryShow(req, res) {
  mainCategory.findById(req.params.id, function(err, category) {
    if(err) return res.status(500).json(err);
    if(!category) return res.status(404).json({ message: "Couldn't find a category with that id?!" });
    return res.status(200).json(category);
  });
}

// UPDATE
function mainCategoryUpdate(req, res) {
  mainCategory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true}, function(err, category) {
    // console.log("req", req);
    if(err) return res.status(400).json(err);
    return res.status(200).json(category);
  });
}

// DELETE a category
function mainCategoryDelete(req, res) {
  mainCategory.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  })
}

module.exports = {
  index: mainCategoryIndex,
  create: mainCategoryCreate,
  show: mainCategoryShow,
  update: mainCategoryUpdate,
  delete: mainCategoryDelete
}

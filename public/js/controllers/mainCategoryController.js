angular
  .module("AngularApp")
  .controller("CategoriesController", CategoriesController);

CategoriesController.$inject = ["MainCategory", "Product", "$resource", "$state"]
function CategoriesController(MainCategory, Product, $resource, $state) {
  var self = this;

  this.all = MainCategory.query();
}

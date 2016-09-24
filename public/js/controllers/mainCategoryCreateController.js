angular
  .module("AngularApp")
  .controller("CategoriesCreateController", CategoriesCreateController);

CategoriesCreateController.$inject = ["MainCategory", "Product", "$resource", "$state"]
function CategoriesCreateController(MainCategory, Product, $resource, $state) {
  var self = this;

  this.new = {};
  this.all = MainCategory.query();

  this.submit = function submit() {
    console.log("Add main category button clicked");
    MainCategory.save(self.new, function(category) {
      self.all.push(category);
      self.new = {};
      $state.reload();
    });
  };
}

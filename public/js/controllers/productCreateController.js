angular
  .module("AngularApp")
  .controller("ProductsCreateController", ProductsCreateController);

ProductsCreateController.$inject = ["Product", '$resource', '$state', 'MainCategory']
function ProductsCreateController(Product, $resource, $state, MainCategory) {
  var self = this;

  this.all = Product.query();
  this.MainCategories = MainCategory.query();

  // Create
  this.new = {};

  this.create = function() {
    Product.save(self.new, function(product) {
      console.log("Add Button Pressed", product);
      self.all.push(product);
      self.new = {};
      $state.go('admin');
    });
  }
}

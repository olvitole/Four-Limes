angular
  .module("AngularApp")
  .controller("ProductsCreateController", ProductsCreateController);

ProductsCreateController.$inject = ["Product", '$resource', '$state']
function ProductsCreateController(Product, $resource, $state) {
  var self = this;

  var Product = $resource('http://localhost:3000/api/product/:id', {id: '@_id'}, { 'update': { method: 'PUT' }
  });

  this.all = Product.query();

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
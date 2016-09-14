angular
  .module("AngularApp")
  .controller("ProductsController", ProductsController);

ProductsController.$inject = ["Product", '$resource', '$state']
function ProductsController(Product, $resource, $state) {
  var self = this;

  var Product = $resource('/api/product/:id', {id: '@_id'}, { 'update': { method: 'PUT' }
  });

  this.all = Product.query();
}
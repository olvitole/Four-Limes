angular
  .module("AngularApp")
  .controller("AdminController", AdminController);

AdminController.$inject = ["Product", '$resource', '$state']
function AdminController(Product, $resource, $state) {
  var self = this;

  var Orders = $resource('http://localhost:3000/api/orders/:id', {id: '@_id'}, { 'update': { method: 'PUT' }
  });

  this.all = Orders.query();

  this.new = {};

}
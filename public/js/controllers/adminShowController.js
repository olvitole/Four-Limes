angular
  .module("AngularApp")
  .controller("AdminShowController", AdminShowController);

AdminShowController.$inject = ["Order", "Product", '$resource', '$state']
function AdminShowController(Order, Product, $resource, $state) {
  var self = this;
  this.all = Order.query();

  this.selected = Order.get( $state.params );
  // console.log($state.params);
}
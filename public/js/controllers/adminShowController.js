angular
  .module("AngularApp")
  .controller("AdminShowController", AdminShowController);

AdminShowController.$inject = ["User","Order", "Product", '$resource', '$state']
function AdminShowController(User, Order, Product, $resource, $state) {
  var self  = this;
  this.all  = Order.query();
  // this.users = User.query();

  // console.log(this.users)
  this.selected = Order.get( $state.params );
}
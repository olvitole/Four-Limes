angular
  .module("AngularApp")
  .controller("StoreProductShowController", StoreProductShowController);

  StoreProductShowController.$inject = ["TokenService", '$state', '$rootScope', 'ngCart', 'Product'];

function StoreProductShowController(TokenService, $state, $rootScope, ngCart, Product) {
  var self = this;

  this.selected = Product.get( $state.params );
}


angular
  .module("AngularApp")
  .controller("StoreController", StoreController);

StoreController.$inject = ["TokenService", '$state', '$rootScope', 'ngCart'];

function StoreController(TokenService, $state, $rootScope, ngCart) {
  
  ngCart.setTaxRate(0);
  ngCart.setShipping(2.99);
}


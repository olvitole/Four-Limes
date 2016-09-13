angular
  .module('AngularApp')
  .service("CartService", CartService);

CartService.$inject = ['$window'];

function CartService($window) {

  this.clearToken = function clearToken() {
    return $window.localStorage.removeItem('cart');
  };
}
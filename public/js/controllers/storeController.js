angular
  .module("AngularApp")
  .controller("StoreController", StoreController);


StoreController.$inject = ["TokenService", '$state', '$rootScope', 'ngCart', 'Order', 'Product', 'MainCategory'];

function StoreController(TokenService, $state, $rootScope, ngCart, Order, Product, MainCategory) {
  var self = this;
  ngCart.setTaxRate(0);
  ngCart.setShipping(0);
  //ngCart.getCurrency('£');

  $rootScope.$on('order received', function(event, data) {
    //console.log("Order was made: ", data._id);
  });

  $rootScope.$on("paymentSuccessful", function(event, data) {
    ngCart.empty(true);
  });

  this.allCategories = MainCategory.query();
  self.searchProduct = '';
}

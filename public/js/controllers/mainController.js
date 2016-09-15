angular
  .module("AngularApp")
  .controller("mainController", mainController);

mainController.$inject = ["TokenService", '$state', '$rootScope', 'ngCart', '$timeout'];

function mainController(TokenService, $state, $rootScope, ngCart, $timeout) {

  var self = this;
  this.paymentMessage;
  this.errorMessage;
  this.currentUser = TokenService.decodeToken();
  self.cartUpdated = false;

  this.logout = function logout() {
    TokenService.clearToken();
    this.currentUser = null;
    $state.go('home');
  }

  $rootScope.$on("loggedIn", function() {
    self.currentUser = TokenService.decodeToken();
  });

  $rootScope.$on("paymentSuccessful", function() {
    $state.go("home");
    self.paymentMessage = "SUCCESS!";
    ngCart.empty();
  });

  $rootScope.$on("unauthorized", function() {
      $state.go("login");
      self.errorMessage = "Ah, Ah, Aaaah. You're not getting in here without logging in first. (I don't set the rules I only enforce them)";
  });

  $rootScope.$on("$stateChangeStart", function() {
      self.errorMessage = null;
      self.paymentMessage = null;
  });

  $rootScope.$on('ngCart:change', function(){
    self.cartUpdated = true;
    $timeout(function() {
      $rootScope.$applyAsync(function() {
        self.cartUpdated = false;
      });
    }, 1000);
  });
}
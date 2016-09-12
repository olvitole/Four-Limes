angular
  .module("AngularApp")
  .controller("mainController", mainController);

mainController.$inject = ["TokenService", '$state', '$rootScope', 'ngCart'];

function mainController(TokenService, $state, $rootScope, ngCart) {
  var self = this;
  this.currentUser = TokenService.decodeToken();

  this.logout = function logout() {
    TokenService.clearToken();
    this.currentUser = null;
    $state.go('home');
  }

  $rootScope.$on("loggedIn", function() {
    self.currentUser = TokenService.decodeToken();
  });

  $rootScope.$on("unauthorized", function() {
      $state.go("login");
      self.errorMessage = "Ah, Ah, Aaaah. You're not getting in here without logging in first. (I don't set the rules I only enforce them)";
  });

  $rootScope.$on("$stateChangeStart", function() {
      self.errorMessage = null;
  });
}
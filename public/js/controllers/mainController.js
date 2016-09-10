angular
  .module("AngularApp")
  .controller("mainController", mainController);

mainController.$inject = ["TokenService", '$state', '$rootScope'];

function mainController(TokenService, $state, $rootScope) {
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
      self.errorMessage = "Ah, Ah, Aaaah. You're not getting in here!";
  });
}
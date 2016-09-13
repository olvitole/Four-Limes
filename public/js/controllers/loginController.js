angular
  .module("AngularApp")
  .controller("LoginController", LoginController);

LoginController.$inject = ["User", "$state", "$rootScope"];
function LoginController(User, $state, $rootScope) {

  this.credentials = {};

  this.submit = function submit() {
    User.login(this.credentials, function(res) {
      //console.log(res);
      $state.go('store');
      $rootScope.$broadcast("loggedIn");
    });
  }
}

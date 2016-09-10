angular
  .module('AngularApp')
  .controller('RegisterController', RegisterController);

RegisterController.$inject = ['User', '$state', '$rootScope']
function RegisterController(User, $state, $rootScope) {

  this.User = {};

  this.submit = function submit() {
    User.register(this.user, function(res){
      console.log(res);
      $state.go('home');
      $rootScope.$broadcast("loggedIn");
    });
  }
}
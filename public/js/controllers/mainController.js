angular
  .module("AngularApp")
  .controller("mainController", mainController);

mainController.$inject = ["$state"];

function mainController($state) {  
  this.red = function() {
    $state.go('red');
  }
  this.blue = function() {
    $state.go('blue');
  }
}
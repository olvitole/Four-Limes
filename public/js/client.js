angular
  .module('AngularApp'), ["ngResource"]
  .config(Router);

Router.$inject = ["$stateProvider", '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('red', {
      url: '/red',
      templateUrl: '/templates/red-page.html',
      controller: "mainController as main"
    })
    .state('blue', {
      url: '/blue',
      templateUrl: '/templates/blue-page.html',
      controller: "mainController as main"
    })

  $urlRouterProvider.otherwise("/red");

}
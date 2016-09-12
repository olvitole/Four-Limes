angular
  .module('AngularApp', ["ngResource", 'ui.router', 'angular-jwt', 'ngCart'])
  .constant("API_URL", "http://localhost:3000/api")
  .config(Router)
  .config(setupInterceptor);

setupInterceptor.$inject = ["$httpProvider"];
function setupInterceptor($httpProvider) {
  return $httpProvider.interceptors.push("AuthInterceptor");
}   

Router.$inject = ["$stateProvider", '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "/templates/home.html"
    })

    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: "LoginController as login"
    })

    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: "RegisterController as register"
    })

    .state('store', {
      url: '/store',
      templateUrl: '/templates/store.html',
      controller: "StoreController as store"
    })

    .state('productShow', {
      url: '/store/:id',
      templateUrl: '/templates/storeproductshow.html',
      controller: "StoreProductShowController as productShow"
    })

    .state('modal', {
      url: '/modal',
      templateUrl: '/templates/modal.html',
      controller: "StoreController as store"
    })

    .state('admin', {
      url: '/admin',
      templateUrl: '/templates/admin.html',
      controller: "AdminController as admin"
    })

    .state('newProduct', {
      url: '/adminnewproduct',
      templateUrl: '/templates/adminnewproduct.html',
      controller: "ProductsCreateController as addProduct"
    })

    .state('orderShow', {
      url: '/admin/:id',
      templateUrl: '/templates/adminshow.html',
      controller: "AdminShowController as adminShow"
    })

         

  $urlRouterProvider.otherwise("/");
}
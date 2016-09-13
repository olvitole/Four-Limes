angular
  .module('AngularApp')
  .factory('OrderInterceptor', OrderInterceptor);

OrderInterceptor.$inject = ['$rootScope'];
function OrderInterceptor($rootScope) {
  return {
    response: function(res) {
      if(!!res.config.url.match("/api/orders")) {
        $rootScope.$broadcast('order received', res.data);
      }
      return res;
    }
  }
}
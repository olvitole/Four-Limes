angular
  .module('AngularApp')
  .factory('OrderInterceptor', OrderInterceptor);

OrderInterceptor.$inject = ['API_URL', '$rootScope'];
function OrderInterceptor(API_URL, $rootScope) {
  return {
    response: function(res) {
      if(!!res.config.url.match("/api/orders")) {
        $rootScope.$broadcast('order received', res.data);
        //console.log("From OrderInterceptor: ", res.data);
      }
      return res;
    }
  }
}
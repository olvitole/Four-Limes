angular
  .module('AngularApp')
  .factory('Order', Order);

Order.$inject = ["$resource", "API_URL"];
function Order($resource, API_URL) {
  return $resource(API_URL + "/orders/:id", { id: '@_id' });
}
angular
  .module('AngularApp')
  .factory('Order', Order);

Order.$inject = ["$resource"];
function Order($resource) {
  return $resource("/api/orders/:id", { id: '@_id' });
}
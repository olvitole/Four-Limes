angular
  .module('AngularApp')
  .factory('Product', Product);

User.$inject = ["$resource"];
function Product($resource) {
  return $resource("/api/product/:id", { id: '@_id' });
}
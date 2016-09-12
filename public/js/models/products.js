angular
  .module('AngularApp')
  .factory('Product', Product);

User.$inject = ["$resource", "API_URL"];
function Product($resource, API_URL) {
  return $resource(API_URL + "/product/:id", { id: '@_id' });
}
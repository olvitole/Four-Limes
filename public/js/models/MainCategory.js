angular
  .module('AngularApp')
  .factory('MainCategory', MainCategory);

MainCategory.$inject = ["$resource"];
function MainCategory($resource) {
  return $resource("/api/maincategory/:id", { id: '@_id' });
}

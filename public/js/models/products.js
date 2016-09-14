angular
  .module('AngularApp')
  .factory('Product', Product);

User.$inject = ["$resource", "formData"];
function Product($resource, formData) {
  return $resource("/api/product/:id", { id: '@_id' }, {
    update: {
      method: "PUT",
      headers: { 'Content-Type': undefined },
      transformRequest: formData.transform
    },
    save: {
      method: "POST",
      headers: { 'Content-Type': undefined },
      transformRequest: formData.transform 
    }
  });
}
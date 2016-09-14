angular
  .module('AngularApp')
  .factory('User', User);

User.$inject = ["$resource"];
function User($resource) {
  return $resource("/api/users/:id", { id: '@_id' }, {
    login: { method: "POST", url: "/api/login" },
    register: { method: "POST", url: "/api/register" }
  });
}
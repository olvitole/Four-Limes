angular
  .module('AngularApp')
  .filter("productFilter", productFilter);

function productFilter(product) {
  return false;
  // if(product.itemName === "Limes"){
  //   console.log("Search: True");
  //   return true;
  //
  // } else {
  //   console.log("Search: False");
  //   return false;
  // }
};

  // $scope.search = function (row) {
  //         return (angular.lowercase(row.brand).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
  //                 angular.lowercase(row.model).indexOf(angular.lowercase($scope.query) || '') !== -1);
  //     };

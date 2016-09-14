angular
  .module('AngularApp')
  .factory('formData', formData);

function formData() {
  return {
    transform: function(data) {
      console.log("formData data:", data);
      var formData = new FormData();
      angular.forEach(data, function(value, key) {

        console.log(key, value);

        if(value._id) value = value._id;
        if(!key.match(/^\$/)) formData.append(key, value);
      });

      return formData;
    }
  }
}
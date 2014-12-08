angular.module('countryServices', []).factory('countries', function($http) {

  function getData(callback) {
    $http({
      method: 'GET',
      url: 'countries.json',
      cache: true
    }).success(callback);
  }

  return {
    list: getData,
    find: function(name, callback) {
      getData(function(data) {
        var country = data.filter(function(entry) {
          return entry.name === name;
        })[0];
        callback(country);
      });
    }
  };
});

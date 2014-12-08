var countryApp = angular.module('countryApp', ['ngRoute']);

countryApp.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/country-list.html',
      controller: 'CountryListCtrl'
    }).
    when('/:countryName', {
      templateUrl: 'views/country-detail.html',
      controller: 'CountryDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });    
});

countryApp.factory('countries', function($http) {

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

countryApp.controller('CountryListCtrl', function($scope, countries) {
  countries.list(function(countries) {
    $scope.countries = countries;
  });
});
countryApp.controller('CountryDetailCtrl', function($scope, $routeParams, countries){
  countries.find($routeParams.countryName, function(country) {
    $scope.country = country;
  });
});

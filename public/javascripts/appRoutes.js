angular.module('appRoutes', []).config(function($routeProvider) {
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


var app = angular.module("myapp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/searchresults', {
        templateUrl: 'partials/results.html',
        controller: 'ResultsController'
      })
      .when('/searchresults', {
        templateUrl: 'partials/results.html',
        controller: 'ResultsController'
      })
});

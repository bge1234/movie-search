var app = angular.module("myapp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'SearchController'
      })
});

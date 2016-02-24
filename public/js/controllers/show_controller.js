app.controller('ShowController', function ($scope, $http, $routeParams) {
  $http.get("https://www.omdbapi.com/?i=" + $routeParams.id).then(function(results){
    $scope.movieinfo = results.data;
  });
});

app.controller('ShowController', function ($scope, $http, $routeParams) {
  $http.get("http://www.omdbapi.com/?i=" + $routeParams.id).then(function(results){
    $scope.movieinfo = results.data;
  });
});

app.controller('MainController', function ($scope, $http) {
  $scope.runSearch = function() {
    $http.get("http://www.omdbapi.com/?s=" + $scope.searchterm).then(function(results){
      $scope.searchresults = results.data;
      $scope.searchterm = null;
    });
  }
});

app.controller('MainController', function ($scope) {
  $scope.goSearch = function() {
    console.log($scope.searchterm);
    $scope.searchterm = null;
  }
});

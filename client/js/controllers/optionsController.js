app.controller('optionsController', ['$scope', 'close', function($scope, close) {
  $scope.closeOptions = function() {
    close();
  };
}]);

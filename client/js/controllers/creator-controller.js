app.controller('creator-controller', ['$scope', '$http', function($scope, $http) {
  $scope.instructions = [];
  $scope.submit = function() {
    if ($scope.text) {
      $scope.instructions.push(this.text);
      $scope.text = '';
    }
  };
}]);

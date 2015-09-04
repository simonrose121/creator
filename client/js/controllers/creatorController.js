app.controller('creatorController', ['$scope', '$http', 'languageService', function($scope, $http, languageService) {
  $scope.instructions = [];
  $scope.instructions.push("on start");
  $scope.instructions.push("move up 10");
  $scope.instructions.push("move left 8");
  $scope.submit = function() {
    if ($scope.text) {
      $scope.instructions.push(this.text);
      $scope.text = '';
    }
  };
  $scope.remove = function(index) {
    $scope.instructions.splice(index, 1);
  }
  $scope.run = function() {
    var error = languageService.run($scope.instructions);
    if (error != null) {
      $scope.feedback = "that wasn't quite right";
    } else {
      $scope.feedback = "";
    }
  };
}]);

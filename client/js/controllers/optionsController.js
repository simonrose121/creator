app.controller('optionsController', ['$scope', '$filter', 'close', function($scope, $filter, close) {
  $scope.characterSelection = [];

  // character selection
  $scope.characterSelection.push({id: "bunny", src: "/img/bunny.png"});
  $scope.characterSelection.push({id: "dog", src: "/img/dog.png"})

  $scope.closeOptions = function() {
    //close();
  };

  $scope.addCharacter = function(charId) {
    var character = $filter('filter')($scope.characterSelection, {id: charId});
    close(character[0]);
  };
}]);

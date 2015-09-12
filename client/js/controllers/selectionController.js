app.controller('selectionController', ['$scope', '$filter', 'close', function($scope, $filter, close) {
  $scope.characterSelection = [];

  // character selection
  $scope.characterSelection.push({id: "bunny", src: "/img/bunny.png", ins: []});
  $scope.characterSelection.push({id: "dog", src: "/img/dog.png", ins: []})

  $scope.closeOptions = function() {
    close();
  };

  $scope.addCharacter = function(charId) {
    var character = $filter('filter')($scope.characterSelection, {id: charId});
    close(character[0]);
  };
}]);

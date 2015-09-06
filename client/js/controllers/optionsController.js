app.controller('optionsController', ['$scope', 'close', function($scope, close) {
  $scope.closeOptions = function() {
    //close();
  };

  $scope.addCharacter = function(char) {
    switch (char) {
      case 'dog':
        var dogImg = {
          id: "dog",
          src: "/img/dog.png"
        }
        close(dogImg);
        break;
    }
  };
}]);

app.controller('creatorController', ['$scope', '$http', '$timeout', '$filter', 'languageService', 'ModalService',
  function($scope, $http, $timeout, $filter, languageService, ModalService) {
    $scope.isDragged = false;
    $scope.instructions = [];
    $scope.characters = [];

    // default character
    $scope.characters.push({id: "bunny", src: "/img/bunny.png"});

    // starting instructions
    // TODO: Remove
    $scope.instructions.push("on start");
    $scope.instructions.push("move up 10");
    $scope.instructions.push("move left 8");

    // Private
    function getCharacter(id) {
      return $filter('filter')($scope.characters, {id: id});
    };

    function getCharacterIndex(character) {
      return $scope.characters.indexOf(character);
    };

    // Public
    $scope.submit = function() {
      if ($scope.text) {
        $scope.instructions.push(this.text);
        $scope.text = '';
      }
    };
    $scope.remove = function(index) {
      $scope.instructions.splice(index, 1);
    };
    $scope.run = function() {
      var error = languageService.run($scope.instructions);
      if (error != null) {
        $scope.feedback = "that wasn't quite right";
      } else {
        $scope.feedback = "";
      }
    };
    $scope.open = function() {
      ModalService.showModal({
        templateUrl: "/views/popup.html",
        controller: "selectionController"
      }).then(function(modal) {
        modal.close.then(function(character) {
          if (character) {
            $timeout(function() {
              $scope.characters.push(character);
            }, 0);
          }
        });
      });
    };

    // TODO: character select
    $scope.characterSelect = function(id) {
      // show selection of element

      // change program to apply methods to that character
    };

    // drag-drop methods
    $scope.dragStart = function() {
       $timeout(function() {
         $scope.isDragged = true;
       }, 0);
    };
    $scope.dragStop = function() {
      $timeout(function() {
        $scope.isDragged = false;
      }, 0);
    };
    $scope.droppedOnDelete = function(item) {
      if (item != null) {
        var character = getCharacter(item.toElement.id);
        var index = getCharacterIndex(character[0]);
        if (index != -1) {
          $scope.characters.splice(index, 1);
        }
        $timeout(function() {
          $scope.isDragged = false;
        }, 0);
      }
    };


}]);

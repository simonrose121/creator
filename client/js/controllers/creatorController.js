app.controller('creatorController', ['$scope', '$http', '$timeout', '$filter', 'languageService', 'ModalService',
  function($scope, $http, $timeout, $filter, languageService, ModalService) {
    $scope.isDragged = false;
    $scope.characters = [];

    // default character
    $scope.characters.push({id: "bunny", src: "/img/bunny.png", ins:["on start", "move up 10", "move left 8"]});

    // starting instructions
    // TODO: Remove
    // $scope.instructions.push("on start");
    // $scope.instructions.push("move up 10");
    // $scope.instructions.push("move left 8");

    // Private
    function getCharacter(id) {
      return $filter('filter')($scope.characters, {id: id});
    };

    function getCharacterIndex(character) {
      return $scope.characters.indexOf(character);
    };

    //$scope.selectedCharacter = getCharacter("bunny")[0];

    // Public
    $scope.submit = function() {
      if ($scope.text) {
        $scope.selectedCharacter.ins.push(this.text);
        $scope.text = '';
      }
    };
    $scope.remove = function(index) {
      $scope.instructions.splice(index, 1);
    };
    $scope.run = function() {
      var error;
      for(var i = 0; i < $scope.characters.length; i++) {
         if(error == null){
           error = languageService.run($scope.characters[i]);
         }
      }
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
      $scope.selectedCharacter = getCharacter(id)[0]
      $('#' + id).addClass('selected-character');
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

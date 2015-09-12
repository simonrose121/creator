app.service('languageService', function() {
  var speed = 1000;
  var currentSelector;

  this.move = function(direction, distance) {
    switch (direction) {
      case "up":
        var distanceString = "-=" + distance * 10;
        $('#' + currentSelector)
          .animate({
            top: distanceString
        }, 1000);
        break;
      case "down":
        var distanceString = "+=" + distance * 10;
        $('#' + currentSelector)
          .animate({
            top: distanceString
        }, 1000);
        break;
      case "left":
        var distanceString = "-=" + distance * 10;
        $('#' + currentSelector)
          .animate({
            left: distanceString
        }, 1000);
        break;
      case "right":
        var distanceString = "+=" + distance * 10;
        $('#' + currentSelector)
          .animate({
            left: distanceString
        }, 1000);
        break;
      default:
        return true;
    };
  };

  this.initialCommand = function(command) {
    switch (command) {
      case "start":
        return false;
      default:
        return true;
    }
  }

  this.run = function(cha) {
    var syntaxError = false;
    currentSelector = cha.id;

    for (var i = 0; i < cha.ins.length; i++) {
      var instruction = cha.ins[i];
      var ins = instruction.split(/\b(?:a|the|was|\s)+\b/i)

      // initial setup
      var instruction = ins[0];
      var command = ins[1];
      var distance = ins[2];

      // get first instruction
      if (i == 0) {
        syntaxError = this.initialCommand(command);
        if (syntaxError) {
          // break before any other instructions can be done
          break;
        }
      }

      // instruction
      switch (instruction) {
        case "move":
          syntaxError = this.move(command, distance);
          break;
      }
    }

    if (syntaxError) {
      return syntaxError;
    }
  };
});

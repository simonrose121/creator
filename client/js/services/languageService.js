app.service('languageService', function() {
  var speed = 1000;

  this.move = function(direction, distance) {
    switch (direction) {
      case "up":
        var distanceString = "-=" + distance * 10;
        $('#tor')
          .animate({
            top: distanceString
        }, 1000);
        break;
      case "down":
        var distanceString = "+=" + distance * 10;
        $('#tor')
          .animate({
            top: distanceString
        }, 1000);
        break;
      case "left":
        var distanceString = "-=" + distance * 10;
        $('#tor')
          .animate({
            left: distanceString
        }, 1000);
        break;
      case "right":
        var distanceString = "+=" + distance * 10;
        $('#tor')
          .animate({
            left: distanceString
        }, 1000);
        break;
    };
  };

  this.initialCommand = function(command) {
    switch (command) {
      case "start":
        return true;
      default:
        return false;
    }
  }

  this.run = function(instructions) {
    var syntaxError = false;

    for (var i = 0; i < instructions.length; i++) {
      var instruction = instructions[i];
      var ins = instruction.split(/\b(?:a|the|was|\s)+\b/i)

      // initial setup
      var instruction = ins[0];
      var command = ins[1];
      var distance = ins[2];

      // get first instruction
      if (i == 0) {
        if (!this.initialCommand(command)) {
            syntaxError = true;
            // break now so nothing else gets done
            break;
        }
      }

      // instruction
      switch (instruction) {
        case "move":
          this.move(command, distance);
          break;
      }
    }

    if (syntaxError) {
      return syntaxError;
    }
  };
});

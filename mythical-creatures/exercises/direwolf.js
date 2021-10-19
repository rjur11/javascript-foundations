var Stark = require("./stark");

class Direwolf {
  constructor(
    name,
    home = "Beyond the Wall",
    size = "Massive",
    starksToProtect = []
  ) {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = starksToProtect;
  }
  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.safe = true;
    }
  }
  get huntsWhiteWalkers() {
    return this.starksToProtect.length === 0;
  }
  leave(stark) {
    this.starksToProtect = this.starksToProtect.filter(s => {
      if (stark === s) {
        stark.safe = false;
        return false;
      }
      return true;
    });
  }
}

module.exports = Direwolf;

Stark.prototype.callDirewolf = function(name, location) {
  var direwolf = new Direwolf(name, this.location);
  direwolf.protect(this);
  return direwolf;
};

var Skier = require("./Skier");

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = "up";
  }
  admitSkier(skier) {
    this.skiers.push();
  }
}

module.exports = Lift;

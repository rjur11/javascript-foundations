class Snack {
  constructor(name) {
    this.deliciousLevel = "extra";
    this.type = name;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
  }
  getEaten() {
    if (this.amount > 30) {
      this.amount -= 10;
    } else {
      this.amount -= 10;
      this.cuttingItClose = true;
    }
  }
  checkForHealthy() {
    var str = this.type;
    return str.includes("fruit") || str.includes("Fruit");
  }
}

module.exports = Snack;

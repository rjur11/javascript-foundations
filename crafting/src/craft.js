class Craft {
  constructor(typeObj) {
    this.name = typeObj.type;
    this.materials = typeObj.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return "All done! It looks great!";
  }

  calculateProjectTotal() {
    var totalPrice = 0;
    for (var i = 0; i < this.materials.length; i++) {
      totalPrice += this.materials[i].calculateMaterialCost();
    }
    return totalPrice;
  }
}

module.exports = Craft;

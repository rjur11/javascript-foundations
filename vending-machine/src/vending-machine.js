class VendingMachine {
  constructor(typeObj) {
    this.id = typeObj.id;
    this.isBroken = typeObj.isBroken;
    this.snacks = [];
  }
  addSnacks(snack) {
    if (!snack in this.snacks) {
      this.snacks.push(snack);
    } else {
      return "Sorry, that snack is already stocked! Try adding a different snack.";
    }
  }
}

module.exports = VendingMachine;

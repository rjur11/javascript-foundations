class VendingMachine {
  constructor(typeObj) {
    this.id = typeObj.id;
    this.isBroken = typeObj.isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snack.name) {
        return "Sorry, that snack is already stocked! Try adding a different snack.";
      }
    }
    this.snacks.push(snack);
  }

  findSnack(name) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === name) {
        return this.snacks[i];
      }
    }
  }

  purchaseSnack(name, cash) {
    var snack = this.findSnack(name);
    if (snack === undefined) {
      return "Sorry, that snack is not in the vending machine. Please choose a valid snack.";
    }
    if (snack.itemsInStock <= 0) {
      return "Sorry, no items in stock. Try another item.";
    }
    if (cash < snack.price) {
      return "Sorry, not enough payment. Please add more money.";
    }
    snack.itemsInStock -= 1;
    var change = cash - snack.price;
    return `Success! Here is \$${change} back!`;
  }
}

module.exports = VendingMachine;

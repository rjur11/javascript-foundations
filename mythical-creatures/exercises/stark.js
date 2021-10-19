class Stark {
  constructor({name, area = "Winterfell"} = {}) {
    this.name = name;
    this.location = area;
    this.safe = false;
  }
  sayHouseWords() {
    if (this.safe) {
      return "The North Remembers";
    } else {
      return "Winter is Coming";
    }
  }
}

module.exports = Stark;

class Vampire {
  constructor(name, pet = "bat") {
    this.name = name;
    this.thirsty = true;
    this.ouncesDrank = 0;
    this.pet = pet;
  }
  drink() {
    if (this.ouncesDrank === 50) {
      return "I'm too full to drink anymore!";
    } else {
      this.thirsty = false;
      this.ouncesDrank += 10;
    }
  }
}

module.exports = Vampire;

class Fairy {
  constructor(name, dust = 10, disposition = "Good natured") {
    this.name = name;
    this.dust = dust;
    this.disposition = disposition;
    this.clothes = {dresses: ["Iris"]};
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust += 1;
  }
  makeDresses(flowers) {
    this.clothes.dresses = this.clothes.dresses.concat(flowers);
  }
  believe() {
    this.dust += 10;
  }
  becomeProvoked() {
    this.disposition = "Vengeful";
  }
  replaceInfant(infant) {
    if (this.disposition === "Vengeful") {
      infant.disposition = "Malicious";
      this.humanWards.push(infant);
      if (this.humanWards.length === 3) {
        this.disposition = "Good natured";
      }
    }
    return infant;
  }
}

module.exports = Fairy;

class SkatePark {
  constructor(typeObj) {
    this.name = typeObj.name;
    this.yearFounded = typeObj.year;
    this.style = typeObj.type;
    this.features = typeObj.features;
    this.isPrivate = typeObj.isPrivate || false;
    this.cost = typeObj.price || 0;
    this.occupants = [];
  }
}

module.exports = SkatePark;

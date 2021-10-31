class SkatePark {
  constructor(typeObj) {
    this.name = typeObj.name;
    this.yearFounded = typeObj.year;
    this.style = typeObj.type;
    this.features = typeObj.features;
    this.isPrivate = typeObj.isPrivate || false;
    this.price = typeObj.price;
  }
}

module.exports = SkatePark;

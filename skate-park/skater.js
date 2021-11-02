class Skater {
  constructor(typeObj) {
    this.name = typeObj.name;
    this.skill = typeObj.skill;
    this.tricks = typeObj.tricks;
    this.money = typeObj.cash;
    this.frustration = 0;
  }
  practice(trick) {
    if (this.tricks[trick] === false) {
      this.frustration += 1;
    }
  }
}

module.exports = Skater;

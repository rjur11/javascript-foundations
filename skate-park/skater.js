class Skater {
  constructor(typeObj) {
    this.name = typeObj.name;
    this.skill = typeObj.skill;
    this.tricks = typeObj.tricks;
    this.money = typeObj.cash;
    this.frustration = 0;
  }
  practice(trick) {
    if (this.frustration === 2) {
      this.tricks[trick] = true;
      this.frustration = 0;
      return `I just learned to ${trick}!!!`;
    }
    if (this.tricks[trick] === false) {
      this.frustration += 1;
    }
  }
}

module.exports = Skater;

class Dragon {
  constructor(name,rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.feedings = 0;
  }
  greet(){
    return `Hi, ${this.rider}!`;
  }
  eat() {
    this.feedings += 1;
    if (this.feedings === 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;

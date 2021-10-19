class Hobbit {
  constructor({ name }){
    this.name = name;
    this.age = 0;
    this.hasRing = false;

  }
  celebrateBirthday(){
    this.age += 1;
  }

  get adult() {
    return this.age >= 33;
  }

  get old() {
    return this.age >= 101;
  }

  getRing() {
    if (this.name === "Frodo") {
      this.hasRing = true;
      return "Here is the ring!";
    } else {
      return "You can't have it!";
    }
  }
}
module.exports = Hobbit;

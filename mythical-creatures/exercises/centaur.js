class Centaur {
  constructor({name, type, cranky = false, standing = true}) {
    this.name = name;
    this.breed = type;
    this.cranky = cranky;
    this.standing = standing;
    this.layingDown = !standing;
    this.counter = 0;
  }
  shootBow() {
    if (this.cranky || this.layingDown) {
      return "NO!";
    }
    this.counter += 1;
    if (this.counter >= 3) {
      this.cranky = true;
    }
    return "Twang!!!";
  }

  run() {
    if (this.cranky || this.layingDown) {
      return "NO!";
    }
    this.counter += 1;
    if (this.counter >= 3) {
      this.cranky = true;
    }
    return "Clop clop clop clop!!!";
  }
  sleep() {
    if (this.standing) {
      return "NO!";
    } else {
      this.counter = 0;
      this.cranky = false;
      return "ZZZZ";
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
      this.counter = 0;
    } else {
      return "Not while I'm laying down!";
    }

  }
}

module.exports = Centaur;

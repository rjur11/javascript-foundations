class Werewolf {
  constructor(name, form = "human") {
    this.name = name;
    this.form = form;
    this.hungry = false;
  }
  completeTransformation() {
    if (this.form === "human") {
      this.form = "wolf";
      this.hungry = true;
      return "Aaa-Woooo!";
    } else {
      this.form = "human";
      this.hungry = false;
      return "Where are I?";
    }
  }
  eatVictim(victim){
    if (this.hungry) {
      victim.alive = false;
      this.form = "human";
      return `Yum, ${victim.name} was delicious.`;
    } else {
      return `No way am I eating ${victim.name}, I'd like a burger!`;
    }
  }
}


module.exports = Werewolf;

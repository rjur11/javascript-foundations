var Person = require("./person");
var Statue = require("./statue");

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    this.statues.push(new Statue(victim.name));
    if (this.statues.length > 3) {
      var free = this.statues.shift();
      return new Person(free.name, "relieved");
    }
  }
}

module.exports = Medusa;

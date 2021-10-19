class Sphinx {
  constructor(name = null) {
    this.name = name;
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }
  attemptAnswer(answer) {
    var response = null;
    this.riddles = this.riddles.filter(riddle => {
      if (riddle.answer === answer) {
        response = "That wasn't that hard, I bet you don't get the next one";
        return false;
      }
      return true;
    });
    if (response === null) {
      this.heroesEaten += 1;
    }
    if (response !== null && this.riddles.length === 0) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`;
    }
    return response;
  }
}
module.exports = Sphinx;

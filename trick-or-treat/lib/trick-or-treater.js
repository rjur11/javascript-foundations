class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }
  putCandyInBag(candy) {
    this.hasCandy = true;
    this.bag.fill(candy);
    this.countCandies += 1;
  }
  eat() {
    if (this.countCandies) {
      this.countCandies -= 1;
      this.bag.candies.pop();
    } else {
      this.hasCandy = false;
    }
  }
}

module.exports = TrickOrTreater;

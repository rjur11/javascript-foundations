class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = bag.count;
  }
  putCandyInBag(candy) {
    this.hasCandy = true;
    this.bag.candies += 1;
  }
  eat() {
    bag.count -= 1;
  }
}

module.exports = TrickOrTreater;

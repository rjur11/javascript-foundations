class Snowman {
  constructor(snowmanPieces) {
    this.carrots = snowmanPieces.carrots;
    this.coal = snowmanPieces.coal;
    this.buttons = snowmanPieces.buttons;
    this.snowballs = snowmanPieces.snowballs;
    this.magicHat = false;
  }

  canWearMagicHat() {
    if (
      this.coal < 2 ||
      this.buttons < 5 ||
      this.carrots < 1 ||
      this.snowballs < 2
    ) {
      return false;
    } else {
      this.magicHat = true;
    }
  }
}

module.exports = Snowman;

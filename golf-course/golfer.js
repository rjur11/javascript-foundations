class Golfer {
  constructor(typeObj) {
    this.name = typeObj.name;
    this.handicap = typeObj.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    return `I usually shoot a ${this.handicap + par} on average.`;
  }

  playRound(golfCourse) {
    if (golfCourse.difficulty === "hard") {
      this.frustration += 500;
    } else if (golfCourse.difficulty === "moderate") {
      this.frustration += 100;
    }
  }

  simulatePractice(num, golfer) {
    this.confidence += num * 10;
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(golfCourse) {
    var feature1 = golfCourse.features[0];
    var feature2 = golfCourse.features[1];
    return `I love the ${feature1} and ${feature2} on this course!`;
  }

  whatYaShoot(score) {
    if (score < 0) {
      this.frustration = 0;
      return "I AM THE GREATEST GOLFER ALIVE!";
    } else if (score === 0) {
      this.frustration -= 10;
      return "Booyah!";
    } else {
      this.frustration += 20;
      return "Doh!";
    }
  }
}

module.exports = Golfer;

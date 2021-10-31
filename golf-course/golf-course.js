class GolfCourse {
  constructor(name, difficulty, openings, features = []) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group) {
    this.openings -= group.length;
    for (var i = group.length - 1; i >= 0; i--) {
      this.currentlyPlaying.push(group[i].name);
    }
  }
}

module.exports = GolfCourse;

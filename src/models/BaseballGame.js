const Digits = require('./Digits');

class BaseballGame {
  #digits;

  #computerNumber;

  constructor(computerNumber) {
    this.#computerNumber = computerNumber;
  }

  play(numbers) {
    this.#digits = new Digits(numbers);
    return this.#digits.matchCount(this.#computerNumber);
  }

  isWin() {
    return this.#digits.isStrikeAll(this.#computerNumber);
  }
}

module.exports = BaseballGame;

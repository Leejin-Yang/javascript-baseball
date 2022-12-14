const { RULE } = require('../constants/baseball');
const ComputerNumberMaker = require('../utils/ComputerNumberMaker');
const RandomNumberGenerator = require('../utils/RandomNumberGenerator');

const Digits = require('./Digits');

class BaseballGame {
  #digits;

  #computer;

  start() {
    const computerNumber = ComputerNumberMaker.makeComputerNumber(
      RULE.LENGTH,
      RandomNumberGenerator.generate,
    );
    this.#computer = computerNumber;
  }

  play(numbers) {
    this.#digits = new Digits(numbers);
    return this.#digits.matchCount(this.#computer);
  }

  isWin() {
    return this.#digits.isStrikeAll(this.#computer);
  }
}

module.exports = BaseballGame;

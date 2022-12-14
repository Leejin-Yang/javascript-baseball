const { RULE, ERROR_MESSAGE } = require('../constants/baseball');
const Comparer = require('./Comparer');

class Digits {
  #state;

  constructor(number) {
    const digits = [...number];
    Digits.#validate(digits);
    this.#state = digits;
  }

  matchCount(computerDigits) {
    const ballStrikeCount = { ball: 0, strike: 0 };

    ballStrikeCount.ball += Comparer.getBallCount(this.#state, computerDigits);
    ballStrikeCount.strike += Comparer.getStrikeCount(this.#state, computerDigits);

    return ballStrikeCount;
  }

  isStrikeAll(computerDigits) {
    return Comparer.getStrikeCount(this.#state, computerDigits) === RULE.LENGTH;
  }

  static #validate(digits) {
    if (Digits.#isIncludeCharacter(digits) || Digits.#isIncludeZero(digits)) {
      throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
    }

    if (Digits.#isInvalidLength(digits)) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
    }

    if (Digits.#isDuplicate(digits)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  }

  static #isIncludeCharacter(digits) {
    return digits.find((number) => isNaN(parseInt(number, 10)));
  }

  static #isDuplicate(digits) {
    return digits.length !== new Set(digits).size;
  }

  static #isInvalidLength(digits) {
    return digits.length !== RULE.LENGTH;
  }

  static #isIncludeZero(digits) {
    return digits.includes('0');
  }
}

module.exports = Digits;

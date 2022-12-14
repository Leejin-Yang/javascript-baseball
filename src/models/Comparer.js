class Comparer {
  static getBallCount(digits, computerDigits) {
    return digits.reduce((acc, cur, index) => {
      if (!Comparer.#isBall(cur, computerDigits, index)) return acc;

      return acc + 1;
    }, 0);
  }

  static getStrikeCount(digits, computerDigits) {
    return digits.reduce((acc, cur, index) => {
      if (!Comparer.#isStrike(cur, computerDigits, index)) return acc;

      return acc + 1;
    }, 0);
  }

  static #isBall(digit, computerDigits, index) {
    return computerDigits.includes(digit) && computerDigits[index] !== digit;
  }

  static #isStrike(digit, computerDigits, index) {
    return digit === computerDigits[index];
  }
}

module.exports = Comparer;

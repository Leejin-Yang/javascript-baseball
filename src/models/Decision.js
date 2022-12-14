const { RULE, ERROR_MESSAGE } = require('../constants/baseball');

class Decision {
  #state;

  constructor(input) {
    Decision.#validate(input);
    this.#state = input;
  }

  static #validate(input) {
    if (!Decision.#isValid(input)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  static #isValid(input) {
    return input === RULE.RESTART || input === RULE.END;
  }

  isRestart() {
    return this.#state === RULE.RESTART;
  }

  isEnd() {
    return this.#state === RULE.END;
  }
}

module.exports = Decision;

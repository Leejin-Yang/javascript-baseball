const { RULE } = require('../constants/baseball');

const ComputerNumberMaker = {
  makeComputerNumber(length, generateRandomNumber) {
    const digits = new Set();

    while (digits.size < length) {
      const digit = generateRandomNumber(RULE.RANGE_START, RULE.RANGE_END);
      digits.add(digit.toString());
    }

    return [...digits];
  },
};

module.exports = ComputerNumberMaker;

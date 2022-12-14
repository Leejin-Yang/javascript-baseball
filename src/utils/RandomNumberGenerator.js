const { Random } = require('@woowacourse/mission-utils');
const { RULE } = require('../constants/baseball');

const RandomNumberGenerator = {
  generate() {
    return Random.pickNumberInRange(RULE.RANGE_START, RULE.RANGE_END);
  },
};

module.exports = RandomNumberGenerator;

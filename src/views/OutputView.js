const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants/baseball');
const OutputUtils = require('../utils/OutputUtils');

const OutputView = {
  printGameStart() {
    Console.print(GAME_MESSAGE.START);
  },

  printBallStrikeCount({ ball, strike }) {
    const countMessage = OutputUtils.getCountMessage(ball, strike);
    Console.print(countMessage);
  },

  printCorrect() {
    Console.print(GAME_MESSAGE.CORRECT);
  },
};

module.exports = OutputView;

const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../constants/baseball');

const InputView = {
  readNumbers(callback) {
    Console.readLine(GAME_MESSAGE.INPUT, callback);
  },

  readRestartOrEnd(callback) {
    Console.readLine(GAME_MESSAGE.RESTART_OR_END, callback);
  },
};

module.exports = InputView;

const { Console } = require('@woowacourse/mission-utils');
const BaseballGame = require('../models/BaseballGame');
const Decision = require('../models/Decision');
const { readNumbers, readRestartOrEnd } = require('../views/InputView');
const { printGameStart, printBallStrikeCount, printCorrect } = require('../views/OutputView');

class BaseballGameController {
  #game;

  play() {
    this.#game = new BaseballGame();
    printGameStart();
    this.#runStart();
  }

  #runStart() {
    this.#game.start();
    readNumbers(this.#onNumberSubmit.bind(this));
  }

  #onNumberSubmit(numbers) {
    const count = this.#game.play(numbers);
    printBallStrikeCount(count);

    if (this.#game.isWin()) {
      this.#runGameWin();
      return;
    }

    readNumbers(this.#onNumberSubmit.bind(this));
  }

  #runGameWin() {
    printCorrect();
    readRestartOrEnd(this.#onGameCommandSubmit.bind(this));
  }

  #onGameCommandSubmit(input) {
    const decision = new Decision(input);

    if (decision.isRestart()) {
      this.#runStart();
      return;
    }

    if (decision.isEnd()) {
      Console.close();
    }
  }
}

module.exports = BaseballGameController;

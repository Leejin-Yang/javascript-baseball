const { Console } = require('@woowacourse/mission-utils');

const { RULE } = require('../constants/baseball');
const BaseballGame = require('../models/BaseballGame');
const Decision = require('../models/Decision');
const { readNumbers, readRestartOrEnd } = require('../views/InputView');
const { printGameStart, printBallStrikeCount, printCorrect } = require('../views/OutputView');
const ComputerNumberMaker = require('../utils/ComputerNumberMaker');
const RandomNumberGenerator = require('../utils/RandomNumberGenerator');

class BaseballGameController {
  #game;

  start() {
    printGameStart();
    this.#runPlay();
  }

  #runPlay() {
    this.#execute();
    readNumbers(this.#onNumberSubmit.bind(this));
  }

  #execute() {
    const computerNumber = ComputerNumberMaker.makeComputerNumber(
      RULE.LENGTH,
      RandomNumberGenerator.generate,
    );
    this.#game = new BaseballGame(computerNumber);
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
      this.#runPlay();
      return;
    }

    if (decision.isEnd()) {
      Console.close();
    }
  }
}

module.exports = BaseballGameController;

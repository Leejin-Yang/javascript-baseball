const BaseballGameController = require('./controllers/BaseballGameController');

class App {
  #controller;

  play() {
    this.#controller = new BaseballGameController();
    this.#controller.start();
  }
}

module.exports = App;

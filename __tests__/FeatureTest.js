const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getCloseSpy = () => {
  const closeSpy = jest.spyOn(MissionUtils.Console, 'close');
  closeSpy.mockClear();
  return closeSpy;
};

describe('숫자 야구 기능 테스트', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('게임 시작 문구를 출력한다.', () => {
    const message = '숫자 야구 게임을 시작합니다.';
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test('스트라이크와 볼의 갯수 상태를 업데이트한다.', () => {
    const randoms = ['1', '3', '5'];
    const answers = [
      ['7', '8', '9'],
      ['1', '4', '3'],
    ];
    const counts = [
      { ball: 0, strike: 0 },
      { ball: 1, strike: 1 },
    ];

    const app = new App();
    app.computerNumbers = randoms;

    answers.forEach((answer, i) => {
      app.userNumbers = answer;
      app.setBallStrikeCount();

      expect(app.ballStrikeCount).toStrictEqual(counts[i]);
    });
  });

  test('스트라이크 볼 결과 상태를 업데이트한다.', () => {
    const counts = [
      { ball: 0, strike: 0 },
      { ball: 1, strike: 1 },
      { ball: 3, strike: 0 },
      { ball: 0, strike: 1 },
    ];
    const messages = ['낫싱', '1볼 1스트라이크', '3볼', '1스트라이크'];

    const app = new App();

    counts.forEach((count, i) => {
      app.ballStrikeCount = count;
      app.setResult();

      expect(app.result).toEqual(messages[i]);
    });
  });

  test('1을 입력하면 재시작', () => {
    const answers = ['1'];

    mockQuestions(answers);

    const app = new App();
    const playSpy = jest.spyOn(app, 'play');
    app.readRestartInput();

    expect(playSpy).toHaveBeenCalledTimes(1);
  });

  test('2를 입력하면 게임 종료', () => {
    const answers = ['2'];
    const closeSpy = getCloseSpy();

    mockQuestions(answers);

    const app = new App();
    app.readRestartInput();

    expect(closeSpy).toHaveBeenCalledTimes(1);
  });
});

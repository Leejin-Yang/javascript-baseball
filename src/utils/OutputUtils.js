const OutputUtils = {
  isNothing(ball, strike) {
    return ball === 0 && strike === 0;
  },

  isBallOnly(ball, strike) {
    return ball > 0 && strike === 0;
  },

  isStrikeOnly(ball, strike) {
    return ball === 0 && strike > 0;
  },

  getCountMessage(ball, strike) {
    if (OutputUtils.isNothing(ball, strike)) return GAME_MESSAGE.NOTHING;

    const ballMessage = `${ball}${GAME_MESSAGE.BALL}`;
    const strikeMessage = `${strike}${GAME_MESSAGE.STRIKE}`;

    if (OutputUtils.isBallOnly(ball, strike)) return ballMessage;
    if (OutputUtils.isStrikeOnly(ball, strike)) return strikeMessage;

    return `${ballMessage} ${strikeMessage}`;
  },
};

module.exports = OutputUtils;

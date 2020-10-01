const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 0;
  for (let i = 0; i < disksNumber; i++) {
    turns = turns * 2 + 1;
  }
  return {
    turns : turns,
    seconds : Math.floor(3600 / turnsSpeed * turns),
  };
};

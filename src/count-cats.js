const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  return  array.length !== 0 && array.reduce((a, b) => a.concat(b)).filter(a => a === '^^').length;
}

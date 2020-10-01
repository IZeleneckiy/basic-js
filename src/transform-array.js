const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  if (arr.length === 0) {
    return [];
  }
  let result = arr.slice();
  for (let i = 0; i < result.length; i++) {
    switch (result[i]) {
      case '--discard-next':
        if ((i + 1) < result.length) {
          result.splice(i + 1, 1);
        }
        break;
      case '--double-next':
        if (i + 1 < result.length) {
          result.splice(i + 1, 0, result[i + 1]);
        }
        break;
      case '--discard-prev':
        if (i - 1 >= 0) {
          result.splice(i -1, 1);
          i--;
        }
        break;
      case '--double-prev':
        if (i - 1 >= 0) {
          result.splice(i - 1, 0, result[i - 1]);
          i++;
        }
        break;
    }
  }
  return result.filter(a => a!== '--discard-next' && a!== '--double-next' && a!== '--double-prev' && a!== '--discard-prev');
};

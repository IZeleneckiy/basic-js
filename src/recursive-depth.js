const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    if (Array.isArray(arr)) {
      if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          let res = this.calculateDepth(arr[i]);
          if (res > counter) {
            counter = res;
          }
        }
      }
      counter++;
    }
    return counter;
  }
};
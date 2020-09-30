const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if ((typeof sampleActivity === "string") &&
      !(+sampleActivity !== +sampleActivity) &&
      !(sampleActivity > +MODERN_ACTIVITY) &&
      (+sampleActivity > 1)) {
    let result = (Math.log(+MODERN_ACTIVITY - sampleActivity) / (0.693 / +HALF_LIFE_PERIOD));
    console.log(`sampleActivity = ${sampleActivity}; result = ${result}; +sampleActivity = ${+sampleActivity}`);
    return result;
  } else return false;
};

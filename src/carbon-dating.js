const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  return (typeof sampleActivity === "string") &&
      !(+sampleActivity !== +sampleActivity) &&
      !(sampleActivity > +MODERN_ACTIVITY) &&
      (+sampleActivity > 1) &&
      (Math.log(+MODERN_ACTIVITY - sampleActivity) / (0.693 / +HALF_LIFE_PERIOD));
};

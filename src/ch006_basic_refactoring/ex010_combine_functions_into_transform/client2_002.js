const {acquireReading} = require('./data/reading');
const {enrichReading, taxThreshold} = require('./util002');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
// const base = aReading.baseCharge;  // 변수 인라인
const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));

module.exports = {
  base: aReading.baseCharge,
  taxableCharge
}

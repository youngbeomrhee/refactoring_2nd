const {acquireReading} = require('./data/reading');
const {baseRate} = require('./util');

const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {  // 기본 요금 계산 함수
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

module.exports = {basicChargeAmount}

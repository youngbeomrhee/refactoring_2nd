const _ = require('lodash');
const {acquireReading} = require('./data/reading');
const {enrichReading} = require('./util002');

const rawReading = acquireReading();  // 미가공 측정값
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

module.exports = {basicChargeAmount}

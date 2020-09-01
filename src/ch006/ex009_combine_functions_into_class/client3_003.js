const {acquireReading} = require('./data/reading');
const {baseRate} = require('./util');
const {Reading} = require('./reading');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;

module.exports = {basicChargeAmount}
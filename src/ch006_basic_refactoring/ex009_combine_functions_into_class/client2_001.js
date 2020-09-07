const {acquireReading} = require('./data/reading');
const {baseRate, taxThreshold} = require('./util');

const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

module.exports = {base, taxableCharge}

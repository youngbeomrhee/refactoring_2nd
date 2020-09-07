const {acquireReading} = require('./data/reading');
const {baseRate} = require('./util');

const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

module.exports = {baseCharge}
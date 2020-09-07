const {acquireReading} = require('./data/reading');
const {baseRate} = require('./util001');

const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

module.exports = {baseCharge}
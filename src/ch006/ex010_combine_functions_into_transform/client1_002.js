const {acquireReading} = require('./data/reading');
const {enrichReading} = require('./util002');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

module.exports = {baseCharge}
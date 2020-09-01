const {acquireReading} = require('./data/reading');
const {baseRate, taxThreshold} = require('./util');
const {Reading} = require('./reading');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const base = aReading.baseCharge;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

module.exports = {base, taxableCharge}

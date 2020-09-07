const {acquireReading} = require('./data/reading');
const {enrichReading} = require('./util003');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;

module.exports = {
  taxableCharge
}

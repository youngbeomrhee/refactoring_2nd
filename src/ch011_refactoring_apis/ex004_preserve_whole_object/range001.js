function checkHeatingPlan(aPlan, aRoom, alerts) {
  // ...
  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;
  if (!aPlan.withinRange(low, high))
    alerts.push("room temperature went outside range");
  // ...
}

class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }
  withinRange(bottom, top) {
    return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
  }
}

module.exports = {checkHeatingPlan, HeatingPlan}

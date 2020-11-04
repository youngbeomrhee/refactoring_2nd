// 함수 옮기기 수행
function checkHeatingPlan(aPlan, aRoom, alerts) {
  // ...
  const tempRange = aRoom.daysTempRange;
  const isWithinRange = aPlan.xxNewWithinRange(aPlan, tempRange);

  if (!isWithinRange)
    alerts.push("room temperature went outside range");
  // ...
}

/*
function xxNewWithinRange(aPlan, tempRange) {
  const low = tempRange.low;
  const high = tempRange.high;
  const isWithinRange = aPlan.withinRange(low, high);
  return isWithinRange;
}
*/

class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }
  withinRange(bottom, top) {
    return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
  }
  xxNewWithinRange(aPlan, tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = aPlan.withinRange(low, high);
    return isWithinRange;
  }
}

module.exports = {checkHeatingPlan, HeatingPlan}

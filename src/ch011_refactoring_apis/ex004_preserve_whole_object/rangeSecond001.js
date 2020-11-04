function checkHeatingPlan(aPlan, aRoom, alerts) {
  // ...
  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;
  // 코드를 재정렬해서 기존 코드 일부를 메서드로 추출
  // 기존 메서드를 호출하는 코드들을 분리
  const isWithinRange = aPlan.withinRange(low, high);
  // if (!aPlan.withinRange(low, high))
  if (!isWithinRange)
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

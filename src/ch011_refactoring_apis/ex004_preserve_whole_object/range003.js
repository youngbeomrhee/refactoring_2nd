function checkHeatingPlan(aPlan, aRoom, alerts) {
  // ...
  // 호출하는 쪽도 원래의 메서드 이름으로 변경
  // if (!aPlan.xxNewWithinRange(aRoom.daysTempRange))
  if (!aPlan.withinRange(aRoom.daysTempRange))
    alerts.push("room temperature went outside range");
  // ...
}

class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }
  /*
  withinRange(bottom, top) {
    return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
  }
  */
  // 기존 로직 인라인
  // 대체하려던 메서드로 이름 변경
  withinRange(aNumberRange) {
    return (aNumberRange.low >= this._temperatureRange.low) && (aNumberRange.top <= this._temperatureRange.high);
  }
}

module.exports = {checkHeatingPlan, HeatingPlan}

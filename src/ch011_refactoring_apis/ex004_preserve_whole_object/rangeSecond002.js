function checkHeatingPlan(aPlan, aRoom, alerts) {
  // ...
  // 입력 매개변수를 추출
  const tempRange = aRoom.daysTempRange;

  // 함수 추출하기로 새 메서드 생성
  /*
  const low = tempRange.low;
  const high = tempRange.high;
  const isWithinRange = aPlan.withinRange(low, high);
  */
  const isWithinRange = xxNewWithinRange(aPlan, tempRange);

  if (!isWithinRange)
    alerts.push("room temperature went outside range");
  // ...
}

function xxNewWithinRange(aPlan, tempRange) {
  const low = tempRange.low;
  const high = tempRange.high;
  const isWithinRange = aPlan.withinRange(low, high);
  return isWithinRange;
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

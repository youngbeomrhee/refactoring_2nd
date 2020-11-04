function checkHeatingPlan(aPlan, aRoom, alerts) {
  // ...
  // aRoom.daysTempRange를 직접 넘기게 되면서 불필요해진 로직 삭제
  // const low = aRoom.daysTempRange.low;
  // const high = aRoom.daysTempRange.high;

  // 새로운 메서드를 호출하도록 변경
  // if (!aPlan.withinRange(low, high))
  if (!aPlan.xxNewWithinRange(aRoom.daysTempRange))
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
  // 최저, 최고 기온을 뽑아내어 인수로 건네는 대신 범위 객체를 통째로 전달
  // 인터페이스를 갖춘 메서드를 만든다
  // 대체하려는 메소드를 호출
  xxNewWithinRange(aNumberRange) {
    return this.withinRange(aNumberRange.low, aNumberRange.high);
  }
}

module.exports = {checkHeatingPlan, HeatingPlan}

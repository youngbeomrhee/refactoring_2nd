const thermostat = {
  selectedTemperature: 17
}

class HeatingPlan {
  constructor(min, max) {
    this._min = min;
    this._max = max;
  }
  // 변수 추출하기를 이용하여 이 메서드에서 사용할 매개변수를 준비
  get targetTemperature() {
    const selectedTemperature = thermostat.selectedTemperature;
    /* 매개변수의 값을 구하는 코드를 제외한 나머지를 메서드로 추출
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
    */
    return this.xxNEWtargetTemperature(selectedTemperature);
  }
  xxNEWtargetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

module.exports = {thermostat, HeatingPlan}

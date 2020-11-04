const thermostat = {
  selectedTemperature: 17
}

class HeatingPlan {
  constructor(min, max) {
    this._min = min;
    this._max = max;
  }
  get targetTemperature() {
    // 변수 인라인
    // const selectedTemperature = thermostat.selectedTemperature;
    return this.xxNEWtargetTemperature(thermostat.selectedTemperature);
  }
  xxNEWtargetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

module.exports = {thermostat, HeatingPlan}

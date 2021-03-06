class ProductionPlan {
  constructor() {
    this._production = 0;
    this._adjustments = [];
  }
  get production() {
    // asssertion을 통한 검증
    console.assert(this._production === this.calculatedProduction);
    return this._production;
  }
  // 계산로직 추가
  get calculatedProduction() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}

module.exports = {ProductionPlan}
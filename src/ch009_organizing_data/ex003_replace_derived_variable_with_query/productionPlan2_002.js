// 변수 쪼개기를 먼저 적용
class ProductionPlan {
  constructor(production) {
    this._initialProduction = production;
    this._productionAccumulator = 0;
    this._adjustments = [];
  }
  get production() {
    // assertion 추가
    console.assert(this._productionAccumulator === this.calculatedProductionAccumulator)
    return this._initialProduction + this._productionAccumulator;
  }
  get calculatedProductionAccumulator() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._productionAccumulator += anAdjustment.amount;
  }
}

module.exports = {ProductionPlan}
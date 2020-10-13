class ProductionPlan {
  constructor() {
    this._production = 0;
    this._adjustments = [];
  }
  get production() {
    // 검증 성공 후 calculatedProduction을 인라인
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);;
  }
  // get calculatedProduction() {
  //   return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  // }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    // this._production += anAdjustment.amount;
  }
}

module.exports = {ProductionPlan}
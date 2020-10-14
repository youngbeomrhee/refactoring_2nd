// 데이터 중복 : applyAdjustment를 실행하면서 직접 관련이 없는 누적값 production까지 갱신
class ProductionPlan {
  constructor() {
    this._production = 0;
    this._adjustments = [];
  }
  get production() {return this._production;}
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}

module.exports = {ProductionPlan}
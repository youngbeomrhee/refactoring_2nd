// 소스가 둘 이상일 때 : 둘 이상의 요소가 관여되는 경
// assertion 코드를 앞의 예와 똑같이 적용할 경우 초깃값이 0이 아니면 실패
class ProductionPlan {
  constructor(production) {
    this._production = production;
    this._adjustments = [];
  }
  get production() {return this._production;}
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}

module.exports = {ProductionPlan}
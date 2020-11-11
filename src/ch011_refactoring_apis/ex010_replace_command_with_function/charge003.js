class ChargeCalculator {
  constructor (customer, usage, provider){
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }
  // 보조 메서드의 처리결과를 변수에 저장한다
  get charge() {
    const baseCharge = this.baseCharge;
    return baseCharge + this._provider.connectionCharge;
  }
}

function charge(customer, usage, provider) {
  return new ChargeCalculator(customer, usage, provider);
}

module.exports = {charge}

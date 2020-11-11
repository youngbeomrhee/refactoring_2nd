class ChargeCalculator {
  constructor (customer, usage, provider){
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  /*
  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }
  */
  // 생성자가 받던 모든 매개변수를 해당 메서드로 옮기기 위해 함수 선언 바꾸기를 적용한다
  charge(customer, usage, provider) {
    // baseCharge를 인라인한다
    const baseCharge = this._customer.baseRate * this._usage;
    return baseCharge + this._provider.connectionCharge;
  }
}

function charge(customer, usage, provider) {
  return new ChargeCalculator(customer, usage, provider)
    .charge(customer, usage, provider);
}

module.exports = {charge}

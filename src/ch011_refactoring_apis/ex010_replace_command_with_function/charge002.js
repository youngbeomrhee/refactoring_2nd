// 이 클래스를 생성하고 호출하는 코드를 함께 함수로 추출한다
class ChargeCalculator {
  constructor (customer, usage, provider){
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }
  get charge() {
    return this.baseCharge + this._provider.connectionCharge;
  }
}

function charge(customer, usage, provider) {
  return new ChargeCalculator(customer, usage, provider);
}

module.exports = {charge}

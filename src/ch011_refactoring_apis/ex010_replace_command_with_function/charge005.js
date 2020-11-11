class ChargeCalculator {
  // charge 메서드에서 건네받은 매개변수를 사용하도록 수정한다
  constructor (customer, usage, provider){
    // this._customer = customer;
    // this._usage = usage;
    // this._provider = provider;
  }
  charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
  }
}

function charge(customer, usage, provider) {
  return new ChargeCalculator()
  .charge(customer, usage, provider);
}

module.exports = {charge}

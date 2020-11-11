class ChargeCalculator {
  constructor (customer, usage, provider){
  }
  charge(customer, usage, provider) {
    /* 최상위 함수로 인라인한다. 죽은 코드가 되었으므로 전체 클래스를 제거한다
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
    */
  }
}

function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}

module.exports = {charge}

class Customer {
  constructor(name, discountRate) {
    this._name = name;
    // 변수 캡슐화하기
    this._contract = new CustomerContract(Date.now(), discountRate);
    this._setDiscountRate(discountRate);
  }
  get discountRate() {return this._contract._discountRate;}
  _setDiscountRate(aNumber) { this._contract._discountRate = aNumber; }
  becomePreferred() {
    this._setDiscountRate(this.discountRate + 0.03);
    // other nice things
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._contract._discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }
  get discountRate() { return this._discountRate; }
  set discountRate(arg) { this._discountRate = arg; }

}

module.exports = {Customer, CustomerContract};
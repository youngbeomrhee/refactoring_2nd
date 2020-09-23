class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    // assertion, log 등으로
    console.assert(interestRate === this._type._interestRate);
    // this._interestRate = interestRate;
  }
  get interestRate() {return this._type._interestRate;}
}

// 이자율이 계좌 종류에 따라 정해지도록 변경
class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }
  get interestRate() {
    return this._interestRate;
  }
}

module.exports = {Account, AccountType};
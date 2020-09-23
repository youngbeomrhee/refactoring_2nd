class Account {
  constructor(accountType, daysOverdrawn) {
    this._type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }
  get bankCharge() {  // 은행 이자 계산
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge();
    return result;
  }
  get isPremium() {
    return this._type === 'Premium';
  }
}

class AccountType {
  overdraftCharge(daysOverdrawn) { // 초과 인출 이자 계산
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) {
        return baseCharge;
      } else {₩
        return baseCharge + (daysOverdrawn - 7) * 0.85;
      }
    } else {
      return daysOverdrawn * 1.75;
    }
  }
}

module.exports = {Account, AccountType}

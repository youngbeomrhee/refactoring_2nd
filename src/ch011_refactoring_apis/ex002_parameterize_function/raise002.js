// 하나로 대체
function raise(aPerson, factor) {
  aPerson.salary = aPerson.salary.multiply(1 + factor);
}

class Salary {
  constructor(salary) {
    this._salary = salary;
  }
  get salary() {
    return this._salary;
  }
  multiply(m) {
    return parseInt(this._salary * m);
  }
}

module.exports = {raise, Salary}

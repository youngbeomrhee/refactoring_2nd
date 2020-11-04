function tenPercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.1);
}

function fivePercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.05);
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

module.exports = {tenPercentRaise, fivePercentRaise, Salary}

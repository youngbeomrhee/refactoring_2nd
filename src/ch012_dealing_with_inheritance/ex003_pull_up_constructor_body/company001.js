class Party {}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super();
    this._id = id;
    // 공통 코드
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
  get name() {
    return this._name;
  }
  // rest of class...
}

class Department extends Party {
  constructor(name, staff) {
    super();
    // 공통 코드
    this._name = name;
    this._staff = staff;
  }
  get name() {
    return this._name;
  }
  // rest of class...
}

module.exports = {Employee, Department}
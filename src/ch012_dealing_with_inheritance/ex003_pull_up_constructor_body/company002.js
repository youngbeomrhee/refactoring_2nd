class Party {
  constructor(name) {
    this._name = name;
  }
}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super(name);
    // 문장 슬라이드 후 super 클래스로 옮긴다
    // this._name = name;
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
  get name() {
    return this._name;
  }
  // rest of class...
}

class Department extends Party {
  constructor(name, staff) {
    super(name);
    // super 클래스로 옮긴다
    // this._name = name;
    this._staff = staff;
  }
  get name() {
    return this._name;
  }
  // rest of class...
}

module.exports = {Employee, Department}
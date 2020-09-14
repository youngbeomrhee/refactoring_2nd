class Person {
  constructor(name, aDepartment) {
    this._name = name;
    this._department = aDepartment
  }

  get name() {
    return this._name;
  }

/* 불필요해진 위임메서드 제거
  get manager() {
    return this._department.manager;
  }
*/

  get chargeCode() {
    return this._department.chargeCode;
  }

  get department() {
    return this._department;
  }
}

class Department {
  constructor(aManager, aChargeCode) {
    this._manager = aManager;
    this._chargeCode = aChargeCode;
  }

  get chargeCode() {
    return this._chargeCode;
  }

  set chargeCode(arg) {
    this._chargeCode = arg;
  }

  get manager() {
    return this._manager;
  }

  set manager(arg) {
    this._manager = arg;
  }
}

module.exports = { Person, Department }
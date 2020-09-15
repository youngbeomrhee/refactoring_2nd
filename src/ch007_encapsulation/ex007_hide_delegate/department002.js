class Person {
  constructor(name, aDepartment) {
    this._name = name;
    this._department = aDepartment
  }
  get name() { return this._name; }
  // get department() { return this._department; }
  // set department(arg) { this._department = arg; }
  get manager() { return this._department.manager; }
  set manager(arg) { this._department.manager = arg; }
}

class Department {
  constructor(aManager, aChargeCode) {
    this._manager = aManager;
    this._chargeCode = aChargeCode;
  }
  get chargeCode() {return this._chargeCode;}
  set chargeCode(arg) {this._chargeCode = arg;}
  get manager() {return this._manager;}
  set manager(arg) {this._manager = arg;}
}

module.exports = {Person, Department}

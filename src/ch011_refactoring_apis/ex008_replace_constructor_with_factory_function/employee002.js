class Employee {
  constructor (name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {return this._name;}
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }
  static get legalTypeCodes() {
    return {"E": "Engineer", "M": "Manager", "S": "Salesman"};
  }
}

// 팩토리 함수 만들기
function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

//
function createEngineer(name, typeCode) {
  return new Employee(name, 'E');
}

module.exports = {createEmployee, createEngineer}

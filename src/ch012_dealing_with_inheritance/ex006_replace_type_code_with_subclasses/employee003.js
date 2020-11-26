class Employee {
  constructor(name, type){
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  get type() {
    return this._type;
  }
  validateType(arg) {
    if (!["engineer", "manager", "salesman"].includes(arg))
      throw new Error(`Employee cannot be of type ${arg}`);
  }
  toString() {return `${this._name} (${this.type})`;}
}

// 타입 코드 중 하나인 Engineer를 서브클래싱 한다
class Engineer extends Employee {
  get type() { return 'engineer'; }
}

// 생성자를 팩터리 함수로 바꿔서 선택 로직을 담을 별도 장소를 마련한다
function createEmployee(name, type) {
  // 새로 만든 서브클래스를 사용하기 위한 선택 로직을 팩터리에 추가한다
  switch (type) {
    case 'engineer':
      return new Employee(name, type)
  }
  return new Employee(name, type);
}

module.exports = {Employee}
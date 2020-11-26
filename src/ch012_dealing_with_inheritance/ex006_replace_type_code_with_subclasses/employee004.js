class Employee {
  // 더이상 쓰이지 않는 인수도 없애 버린다
  // constructor(name, type){
  constructor(name){
    // this.validateType(type);
    this._name = name;
    // 모든 유형에 적용했다면 타입 코드 필드와 슈퍼클래스의 게터(서브클래스들에서 재정의한 메서)를 제거한다
    // this._type = type;
  }
  /*
  get type() {
    return this._type;
  }
  */
  // 불필요해진 검증로직도 삭제한다
  /*
  validateType(arg) {
    if (!["engineer", "manager", "salesman"].includes(arg))
      throw new Error(`Employee cannot be of type ${arg}`);
  }
  */
  toString() {return `${this._name} (${this.type})`;}
}

class Engineer extends Employee {
  get type() { return 'engineer'; }
}
// 남은 유형들에도 같은 작업을 반복한다
class Manager extends Employee {
  get type() { return 'manager'; }
}
class Salesman extends Employee {
  get type() { return 'salesman'; }
}

// 더이상 쓰이지 않는 인수도 없애 버린다
function createEmployee(name, type) {
  switch (type) {
    case 'engineer':
      // 더이상 쓰이지 않는 인수도 없애 버린다
      // return new Employee(name, type);
      return new Employee(name);
    case 'engineer':
      return new Employee(name);
    case 'engineer':
      return new Employee(name);
    default:
      throw new Error(type);
  }
  return new Error(`Employee cannot be of type ${type}`);
}

module.exports = {Employee}
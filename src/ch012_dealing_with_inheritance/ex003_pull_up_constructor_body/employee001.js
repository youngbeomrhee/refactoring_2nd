class Employee {
  constructor (name) {
    this._name = name;
    this._assigned = false;
  }
  get isPrivileged() {}
  assignCar() {
    this._assigned = true;
  }
  get assigned() {
    return this._assigned;
  }
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    // 공통코드를 슬라이드 할 수 없는 경우
    // 서브클래스만이 필요한 필드에 값을 대입할 수 있기 때문에 Super class로 중복코드를 이동시킬 수 없다
    if (this.isPrivileged) this.assignCar(); // every subclass does this
  }
  get isPrivileged() {
    return this._grade > 4;
  }
}

module.exports = {Manager}
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
  finishConstruction() {
    if (this.isPrivileged) this.assignCar();
  }
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    // 공통코드를 함수로 추출한다
    // if (this.isPrivileged) this.assignCar();
    this.finishConstruction()
  }
  // 공통함수
  /* 추출한 메서드를 슈퍼 클래스로 옮긴다.
  finishConstruction() {
    if (this.isPrivileged) this.assignCar();
  }
  */
  get isPrivileged() {
    return this._grade > 4;
  }
}

module.exports = {Manager}
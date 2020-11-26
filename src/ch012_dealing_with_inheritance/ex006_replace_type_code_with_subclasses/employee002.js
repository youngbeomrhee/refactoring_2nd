class Employee {
  constructor(name, type){
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  // 타입 코드변수를 자가 캡슐화 한다
  get type() {
    return this._type;
  }
  validateType(arg) {
    if (!["engineer", "manager", "salesman"].includes(arg))
      throw new Error(`Employee cannot be of type ${arg}`);
  }
  // 게터를 사용하도록 변경한다
  // toString() {return `${this._name} (${this._type})`;}
  toString() {return `${this._name} (${this.type})`;}
}

module.exports = {Employee}
// ID를 변경하지 말라는 의도를  명확히 알리기 위해 ID 세터를 제거한다
class Person {
  constructor(id) {
    this._id = id;
  }
  get name() {return this._name;}
  set name(arg) {this._name = arg;}
  get id() {return this._id;}
}

module.exports = {Person}
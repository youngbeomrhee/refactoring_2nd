class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }
  get courses() {
    return this._courses.slice(); // 복제본을 전달
  }
  /* // add, remove 함수로 대체
  set courses(aList) {
    this._courses = aList;
  }
  */
  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  removeCourse(aCourse, fnIfAbsent = _=> { throw new RangeError(); }) {
    const index = this._courses.indexOf(aCourse);
    if(index === -1) {
      fnIfAbsent();
    } else {
      this._courses.splice(index, 1);
    }
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

module.exports = { Person, Course };
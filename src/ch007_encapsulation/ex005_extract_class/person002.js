class Person {
  constructor(name, officeAreaCode, officeNumber) {
    this._name = name;
    this._officeAreaCode = officeAreaCode;
    this._officeNumber = officeNumber;
    this._telephoneNumber = new TelephoneNumber(this._officeAreaCode, this._officeNumber);
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return this._telephoneNumber.telephoneNumber;
  }
  get officeAreaCode() {
    return this._telephoneNumber._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber._officeNumber;
  }
  set officeNumber(arg) {
    this._telephoneNumber._officeNumber = arg;
  }
}

class TelephoneNumber {
  constructor(officeAreaCode, officeNumber) {
    this._officeAreaCode = officeAreaCode;
    this._officeNumber = officeNumber;
  }

  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }
  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._officeNumber;
  }
}

module.exports = {Person};
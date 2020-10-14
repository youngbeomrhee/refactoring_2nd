class Person {
  constructor(){
    // 생성 시점에 전화번호가 올바로 설정되지 못하게 짜여있는 코드
    this._telephoneNumber = new TelephoneNumber();
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return this._telephoneNumber;
  }
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  // setter를 호출하는 쪽에서 매 번 다시 대입하도록 변경
  set officeAreaCode(arg) {
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
  }
}

class TelephoneNumber {
  // setter로 설정하던 두 필드를 생성자에서 입력받아 설정하도록 변경(함수 선언 바꾸기)
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }
  get areaCode()    {return this._areaCode;}
  set areaCode(arg) {this._areaCode = arg;}
  get number() {return this._number;}
  set number(arg) {this._number = arg;}
  // 객체의 값을 비교하는 메서드 커스터마이징
  equals(other) {
    return other instanceof TelephoneNumber
      && this.areaCode === other.areaCode
      && this.number === other.number;
  }
}

module.exports = {Person, TelephoneNumber};
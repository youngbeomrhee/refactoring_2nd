function createBird(data) {
  switch (data.type) {
    // 불필요해진 로직 제거
    /*
    case 'EuropeanSwallow':
      return new EuropeanSwallow(data);
     */
    case 'AfricanSwallow':
      return new AfricanSwallow(data);
    case 'NorweigianBlueParrot':
      return new NorwegianBlueParrot(data);
    default:
      return new Bird(data);
  }
}

class Bird {
  // 위임 필드를 초기화 할 위치를 정한다
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
    // data에 필요한 정보가 모두 담겨 있으므로 생성자에서 처리한다
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }
  // 위임을 여러 개 만들어야 하니 타입 기준으로 올바른 위임을 선택하는 메서드를 만든다
  selectSpeciesDelegate(data) {
    switch (data.type) {
      case 'EuropeanSwallow':
        return new EuropeanSwallowDelegate();
      default:
        return null;
    }
  }
  get name() {return this._name;}
  get plumage() {
    return this._plumage || "average";
  }
  // 슈퍼클래스에서 위임이 존재하면 해당 메서드를 호출하도록 한다.
  // get airSpeedVelocity() {return null;}
  get airSpeedVelocity() {
    this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null;
  }
}

class EuropeanSwallowDelegate {
  // 비행 속도 메서드를 위임으로 옮긴다 (함수 옮기기)
  get airSpeedVelocity() {return 35;}
}

// 불필요해진 서브클래스 제거
/*
class EuropeanSwallow extends Bird {
  // 비행 속도 메서드를 위임으로 옮긴다 (함수 옮기기)
  // get airSpeedVelocity() {return 35;}
  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }
}
*/


class AfricanSwallow extends Bird {
  constructor(data) {
    super (data);
    this._numberOfCoconuts = data.numberOfCoconuts;
  }
  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super (data);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get plumage() {
    if (this._voltage > 100) return "scorched";
    else return this._plumage || "beautiful";
  }
  get airSpeedVelocity() {
    return (this._isNailed) ? 0 : 10 + this._voltage / 10;
  }
}
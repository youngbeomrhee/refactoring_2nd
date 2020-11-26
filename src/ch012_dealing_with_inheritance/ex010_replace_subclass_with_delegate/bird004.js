// NorweigianBlueParrot 처리
function createBird(data) {
  switch (data.type) {
    case 'NorweigianBlueParrot':
      return new NorwegianBlueParrot(data);
    default:
      return new Bird(data);
  }
}

class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }
  selectSpeciesDelegate(data) {
    switch (data.type) {
      case 'EuropeanSwallow':
        return new EuropeanSwallowDelegate();
      case 'AficanSwallow':
        return new AfricanSwallowDelegate(data);
      case 'NorwegianBlueParrot':
        // return new NorwegianBlueParrotDelegate(data);
        // 서브클래스에서 참조할 수 있도록 this 전달
        return new NorwegianBlueParrotDelegate(data, this);
      default:
        return null;
    }
  }
  get name() {return this._name;}
  get plumage() {
    return this._plumage || "average";
  }
  get airSpeedVelocity() {
    this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null;
  }
}

class EuropeanSwallowDelegate {
  get airSpeedVelocity() {return 35;}
}

// 위임클래스 생성
class AfricanSwallowDelegate {
  constructor(data) {
    this._numberOfCounts = data.numberOfCounts;
  }
  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

// 위임클래스 생성
class NorwegianBlueParrotDelegate {
  // constructor(data) {
  // bird로의 역참조 추가
  constructor(data, bird) {
    this._bird = bird;
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get airSpeedVelocity() {
    return (this._isNailed) ? 0 : 10 + this._voltage / 10;
  }
  // 위임으로 이동
  get plumage() {
    if (this._voltage > 100) return "scorched";
    else return this._plumage || "beautiful";
  }
}
// 불필요해진 클래스 삭제
/*
class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super (data);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get plumage() {
    /!*
    if (this._voltage > 100) return "scorched";
    else return this._plumage || "beautiful";
    *!/
    return this._speciesDelegate.plumage;
  }
  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }
}
*/

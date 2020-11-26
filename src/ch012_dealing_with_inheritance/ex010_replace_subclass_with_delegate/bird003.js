// AfricanSwallow 처리
function createBird(data) {
  switch (data.type) {
    // 불필요해진 분기문 제
    /*
    case 'AfricanSwallow':
      return new AfricanSwallow(data);
    */
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
      // 케이스 추가
      case 'AfricanSwallow':
        return new AfricanSwallowDelegate(data);
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
  // 이번에는 생성자에서 데이터를 받도록 한다.
  constructor(data) {
    this._numberOfCounts = data.numberOfCounts;
  }
  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

// 불필요해진 클래스 제거
/*
class AfricanSwallow extends Bird {
  constructor(data) {
    super (data);
    this._numberOfCoconuts = data.numberOfCoconuts;
  }
  // 위임클래스로 이동
  get airSpeedVelocity() {
    // return 40 - 2 * this._numberOfCoconuts;
    return this._speciesDelegate.airSpeedVelocity;
  }
}
*/

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
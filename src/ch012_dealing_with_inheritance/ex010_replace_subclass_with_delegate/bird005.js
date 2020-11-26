// NorweigianBlueParrot 처리
function createBird(data) {
  switch (data.type) {
    case 'NorweigianBlueParrot':
      return new NorwegianBlueParrot(data);
    default:
      return new Bird(data);
  }
}

// 슈퍼클래스가 생겼으니 Bird의 기본 동작 모두를 SpeciesDelegate 클래스로 옮길 수 있다.
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
        return new NorwegianBlueParrotDelegate(data, this);
      default:
        return null;
    }
  }
  // Bird의 나머지 코드 생략
  /*
  get name() {return this._name;}
  get plumage() {
    return this._plumage || "average";
  }
  get airSpeedVelocity() {
    this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null;
  }
  */
}
// NorwegianBlueParrot에서만 사용되는 plumge 메서드를 공통으로 처리하기 위해 위임클래스의 슈퍼클래스를 만든다
class SpeciesDelegate {
  constructor(data, bird) {
    this._bird = bird;
  }
  get plumge() {
    return this._bird._plumage || 'average';
  }
  get airSpeedVelocity() {
    return null;
  }
}

// 상속추가
class EuropeanSwallowDelegate extends SpeciesDelegate {
  get airSpeedVelocity() {return 35;}
}

// 상속추가
class AfricanSwallowDelegate extends SpeciesDelegate {
  constructor(data) {
    super(data);
    this._numberOfCounts = data.numberOfCounts;
  }
  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

// 상속추가
class NorwegianBlueParrotDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);
    this._bird = bird;
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get airSpeedVelocity() {
    return (this._isNailed) ? 0 : 10 + this._voltage / 10;
  }
  get plumage() {
    if (this._voltage > 100) return "scorched";
    else return this._plumage || "beautiful";
  }
}

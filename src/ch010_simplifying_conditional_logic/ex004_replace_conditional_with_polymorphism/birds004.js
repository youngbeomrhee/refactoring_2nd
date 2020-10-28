function plumages(birds) {
  return new Map(birds.map(b => [b.name, plumage(b)]));
}
function speeds(birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

// 조건부 메서드 처리
// 메서드의 조건 하나를 떼어내서 서브클래스에서 오버라이드 한다
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }
  get plumage() {
    // 오류가 없다는게 확인되면 기본 동작용만 남기고 제거
    /*
    switch (this.type) {
      case 'EuropeanSwallow':
        throw 'EuropeanSwallow plumge has called';
      case 'AfricanSwallow':
        throw 'AfricanSwallow plumge has called';
      case 'NorwegianBlueParrot':
        throw 'NorwegianBlueParrot plumge has called';
      default:
        return "unknown";
    }
    */
    return "unknown";
  }
  get airSpeedVelocity() {
    switch (this.type) {
      case 'EuropeanSwallow':
        return 35;
      case 'AfricanSwallow':
        return 40 - 2 * bird.numberOfCoconuts;
      case 'NorwegianBlueParrot':
        return (this.isNailed) ? 0 : 10 + bird.voltage / 10;
      default:
        return null;
    }
  }
}

function plumage(bird) {
  return new createBird(bird).plumage;
}
function airSpeedVelocity(bird) {
  return new createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return new EuropeanSwallow(bird);
    case 'AfricanSwallow':
      return new AfricanSwallow(bird);
    case 'NorwegianBlueParrot':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

// 서브클래스에서 오버라이드
class EuropeanSwallow extends Bird {
  get plumage() {
    return "average";
  }
}
class AfricanSwallow extends Bird {
  get plumage() {
    return (this.numberOfCoconuts > 2) ? "tired" : "average";
  }
}
class NorwegianBlueParrot extends Bird {
  get plumage() {
    return (this.voltage > 100) ? "scorched" : "beautiful";
  }
}


module.exports = {plumages}
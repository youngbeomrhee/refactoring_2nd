function plumages(birds) {
  return new Map(birds.map(b => [b.name, plumage(b)]));
}
function speeds(birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }
  get plumage() {
    switch (this.type) {
      case 'EuropeanSwallow':
        return "average";
      case 'AfricanSwallow':
        return (this.numberOfCoconuts > 2) ? "tired" : "average";
      case 'NorwegianBlueParrot':
        return (this.voltage > 100) ? "scorched" : "beautiful";
      default:
        return "unknown";
    }
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

// 적합한 서브클래스의 인스턴스를 만들어 줄 팩터리 함수로 대체
function plumage(bird) {
  return new createBird(bird).plumage;
}
function airSpeedVelocity(bird) {
  return new createBird(bird).airSpeedVelocity;
}

// 팩토리 함수 생성
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

// 서브클래스 생성
class EuropeanSwallow extends Bird {}
class AfricanSwallow extends Bird {}
class NorwegianBlueParrot extends Bird {}


module.exports = {plumages}
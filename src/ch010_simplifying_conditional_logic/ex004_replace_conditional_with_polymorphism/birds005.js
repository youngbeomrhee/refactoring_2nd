function plumages(birds) {
  return new Map(birds.map(b => [b.name, plumage(b)]));
}
function speeds(birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

// airSpeedVelocity도 서브클래스에서 오버라이딩
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }
  get plumage() {
    return "unknown";
  }
  get airSpeedVelocity() {
    /*
    switch (this.type) {
      case 'EuropeanSwallow':
        return 'EuropeanSwallow airSpeedVelocity has called';
      case 'AfricanSwallow':
        return 'AfricanSwallow airSpeedVelocity has called';
      case 'NorwegianBlueParrot':
        return 'NorwegianBlueParrot airSpeedVelocity has called';
      default:
        return null;
    }
    */
    return null;
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

class EuropeanSwallow extends Bird {
  get plumage() {
    return "average";
  }
  get airSpeedVelocity() {
    return 35;
  }
}
class AfricanSwallow extends Bird {
  get plumage() {
    return (this.numberOfCoconuts > 2) ? "tired" : "average";
  }
  get airSpeedVelocity() {
    return 40 - 2 * bird.numberOfCoconuts;
  }
}
class NorwegianBlueParrot extends Bird {
  get plumage() {
    return (this.voltage > 100) ? "scorched" : "beautiful";
  }
  get airSpeedVelocity() {
    return (this.isNailed) ? 0 : 10 + bird.voltage / 10;
  }
}


module.exports = {plumages}
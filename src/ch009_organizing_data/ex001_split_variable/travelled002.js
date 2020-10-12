function distanceTravelled (scenario, time) {
  let result;
  // 새로운 이름의 상수로 선언
  const primaryAcceleration = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // old name -> new name
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = primaryAcceleration * scenario.delay;  // old name -> new name
    let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;  // 다시 선언
    result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
  }
  return result;
}

module.exports = {distanceTravelled}
function chargeAmount(aDate, plan, quantity) {
  let charge;

  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }

// 조건식을 별도 함수로 추출
  if (summer()) {
    // 조건이 만족했을 때의 로직도 분리
    charge = summerCharge();
  } else {
    // 그 이외의 경우도 함수로 분리
    charge = regularCharge();
  }
  return charge
}

module.exports = { chargeAmount }

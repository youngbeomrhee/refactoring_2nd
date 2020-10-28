function chargeAmount(aDate, plan, quantity) {
  function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }

  /*
  if (summer()) {
    charge = summerCharge();
  } else {
    charge = regularCharge();
  }
  */
  // 전체 조건문을 3항 연산자로 바꿔줄 수도 있다
  return summer() ? summerCharge() : regularCharge();
}

module.exports = { chargeAmount }
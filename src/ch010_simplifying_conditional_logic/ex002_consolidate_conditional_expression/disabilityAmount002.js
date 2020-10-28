function disabilityAmount(anEmployee) {
  // or 조건 사용
  if (anEmployee.seniority < 2
    || anEmployee.monthsDisabled > 12
    || anEmployee.isPartTime
  ) return 0;

  return 100;
}

module.exports = {disabilityAmount}
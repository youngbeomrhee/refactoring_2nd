function adjustedCapital(anInstrument) {
  // 불필요해진 result 삭제
  // let result = 0;
  // 조건식 통합
  if (anInstrument.capital <= 0
    || anInstrument.interestRate <= 0
    || anInstrument.duration <= 0
  ) return 0;
  return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}

module.exports = {adjustedCapital}
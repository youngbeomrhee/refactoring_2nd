function adjustedCapital(anInstrument) {
  let result = 0;
  // 보호구문을 추가하면서 조건을 역으로 변경
  if (anInstrument.capital <= 0) return result;
  if(anInstrument.interestRate <= 0 || anInstrument.duration <= 0) return result;
  result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor
  return result;
}

module.exports = {adjustedCapital}
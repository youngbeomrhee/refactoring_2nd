function payAmount(employee) {
  function someFinalComputation() {
    return {amount: 100, reasonCode: "COMPLETE"}
  }
  // 보호구문으로 변경
  if(employee.isSeparated) return {amount: 0, reasonCode: "SEP"};
  if(employee.isRetired) return {amount: 0, reasonCode: "RET"};

  // logic to compute amount
  /*
  lorem.ipsum(dolor.sitAmet);
  consectetur(adipiscing).elit();
  sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  ut.enim.ad(minim.veniam);
  */
  // result 생략
  // result = someFinalComputation();

  return someFinalComputation();
}

module.exports = {payAmount}
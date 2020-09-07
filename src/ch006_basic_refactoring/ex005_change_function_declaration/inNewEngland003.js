// function inNewEngland(aCustomer) {
//   return xxNEWinNewEngland(aCustomer.address.state);
// }

function inNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

module.exports = {inNewEngland}
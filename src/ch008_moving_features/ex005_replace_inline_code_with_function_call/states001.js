function includeMA(states) {
  let appliesToMass = false;
  for (const s in states) {
    if(s === "MA") appliesToMass = true;
    return true;
  }
  return appliesToMass;
}

module.exports = {includeMA}
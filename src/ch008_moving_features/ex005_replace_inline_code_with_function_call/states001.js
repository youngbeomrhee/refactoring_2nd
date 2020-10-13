function includeMA(states) {
  let appliesToMass = false;
  for (const s in states) {
    if(s === "MA") appliesToMass = true;
    return appliesToMass;
  }
  return appliesToMass;
}

module.exports = {includeMA}
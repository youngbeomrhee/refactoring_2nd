function retrievePricingPlan() {
  return {
    base: 100,
    unit: 1,
    discountThreshold: 10,
    discountFactor: 0.01
  }
}

function retreiveOrder() {
  return {
    units: 2,
    isRepeat: true
  }
}

function chargeOrder(charge) {
  // ... charge 처리
  return true;
}

module.exports = {retreiveOrder, retrievePricingPlan, chargeOrder}

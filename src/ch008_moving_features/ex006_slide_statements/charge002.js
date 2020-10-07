const {retreiveOrder, retrievePricingPlan, chargeOrder} = require('./util');

const pricingPlan = retrievePricingPlan();

const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
const units = order.units;
const baseCharge = pricingPlan.base;
let charge;
charge = baseCharge + units * chargePerUnit;

let discount;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
discount = discountableUnits * pricingPlan.discountFactor;

if (order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);

module.exports = {charge}

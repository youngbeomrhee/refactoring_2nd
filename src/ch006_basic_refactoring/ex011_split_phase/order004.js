function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity);
  return applyShipping(priceData, shippingMethod);  // moved to inline
}

function calculatePricingData(product, quantity) {  // 첫 번째 단계를 처리하는 함수
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
    * product.basePrice * product.discountRate;
  return {basePrice, discount, quantity};
}

function applyShipping(priceData, shippingMethod) {   // 두 번째 단계를 처리하는 함수
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost; // moveed to inline
}

module.exports = {priceOrder}

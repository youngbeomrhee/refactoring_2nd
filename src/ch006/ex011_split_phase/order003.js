function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
    * product.basePrice * product.discountRate;
  const priceData = {basePrice, discount}; // basePrice는 1단계에서 생성되므로 중간 데이터 구조에 추가
  const price = applyShipping(priceData, shippingMethod, quantity); // basePrice, discount는 파라미터에서 제거
  return price;
}

function applyShipping(priceData, shippingMethod, quantity) { // basePrice, discount를 제거 후 priceData.basePrice로 치환
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;
  return price;
}

module.exports = {priceOrder}

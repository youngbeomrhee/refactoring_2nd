function price(order) {
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  let basePrice = order.quantity * order.itemPrice;
  let quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  let shippingCost = Math.min(basePrice * 0.1, 100);
  return basePrice - quantityDiscount + shippingCost;
}

module.exports = {price};
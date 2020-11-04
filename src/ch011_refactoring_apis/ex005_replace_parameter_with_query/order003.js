class Order {
  constructor(quantity, itemPrice) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }
  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    // 불필요해진 파라미터 삭제
    // return this.discountedPrice(basePrice, this.discountLevel);
    return this.discountedPrice(basePrice);
  }
  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }
  // discountedPrice(basePrice, discountLevel) {
  // 함수 선언 변경
  discountedPrice(basePrice) {
    switch (this.discountLevel) {
      case 1: return basePrice * 0.95;
      case 2: return basePrice * 0.9;
    }
  }
}

module.exports = {Order}
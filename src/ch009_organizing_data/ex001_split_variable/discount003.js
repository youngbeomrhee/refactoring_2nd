function discount (inputValue, quantity) {
  // 목적에 맞는 이름으로 리팩토링
  let result = inputValue;
  if (inputValue > 50) result = result - 2;
  if (quantity > 100) result = result - 1;
  return result;
}

module.exports = {discount}
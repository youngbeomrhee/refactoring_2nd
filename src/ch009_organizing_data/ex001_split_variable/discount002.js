function discount (originalInputValue, quantity) {
  // 새로운 변수로 선언하여 쪼개기
  let inputValue = originalInputValue;
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}

module.exports = {discount}
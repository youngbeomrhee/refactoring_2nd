// 함수 선언 바꾸기 : 필요한 매개변수를 호출시점에 넘길 수 있도록 변경
function withinBand(usage, bottom, top) {
  // 기존값을 적절한 매개변수로 대체
  // return usage > 100 ? Math.min(usage, 200) - 100 : 0;
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function baseCharge(usage) {
  if (usage < 0) return usd(0);
  // 기존 함수들을 새로 만든 매개변수화 함수를 호출하도록 변경
  const amount =
    withinBand(usage, 0, 100) * 0.03
    + withinBand(usage, 100, 200) * 0.05
    + withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

// 불필요해진 함수들 삭제
/*
function bottomBand(usage) {
  return Math.min(usage, 100);
}

function middleBand(usage) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function topBand(usage) {
  return usage > 200 ? usage - 200 : 0;
}
*/

function usd(amount) {
  return '$' + parseInt(amount);
}

module.exports = {baseCharge}
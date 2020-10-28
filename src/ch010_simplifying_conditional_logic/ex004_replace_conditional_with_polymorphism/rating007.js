function rating(voyage, history) {
  return createRating(voyage, history).value;
}
class Rating {
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }
  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    if (vpf * 3 > (vr + chr * 2)) return "A";
    else return "B";
  }
  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (["china", "eastindies"].
    includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }
  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter(v => v.profit < 0).length;
    return Math.max(result, 0);
  }
  // 마지막으로 슈퍼클래스에서는 문장을 호출한 곳으로 옮기기를 적용할 수 있다
  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === "china") result += 1;
    if (this.voyage.zone === "eastindies")
      result += 1;
    // historyLengthFactor를 이동시킨다
    result += this.historyLengthFactor;
    // 함수 이름을 바꿔준다
    result += this.voyageLengthFactor;
    return result;
  }
  // 3항 연산자로 간소화
  get voyageLengthFactor() {
    return this.voyage.length > 14 ? -1 : 0;
  }

  get historyLengthFactor() {
    return this.history.length > 8 ? 1 : 0;
  }

  get hasChinaHistory() {
    return this.history.some(v => "china" === v.zone);
  }
}

// 같은 작업을 서브클래스에서도 해준다
class ExperiencedChinaRating extends Rating {
  get captainHistoryRisk() {
     const result = super.captainHistoryRisk - 2;
     return Math.max(result, 0);
  }
  get voyageProfitFactor() {
    return super.voyageProfitFactor + 3;
  }

  get voyageLengthFactor() {
    let result = 0;
    // 아래 로직은 전체 결과를 계산하는 쪽으로 옮긴다
    // result += 3;
    // 삭제
    // result += this.historyLengthFactor;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }
  // historyLengthFactor로 추출
  get historyLengthFactor() {
    return this.history.length > 10 ? 1 : 0;
  }
}

function createRating(voyage, history) {
  if(voyage.zone === 'china' && history.some(v => 'china' === v.zone))
    return new ExperiencedChinaRating(voyage, history);
  else return createRating(voyage, history);
}

module.exports = {rating}
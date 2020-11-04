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

  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === "china") result += 1;
    if (this.voyage.zone === "eastindies")
      result += 1;

    result += this.voyageAndHIstoryLengthFactor;
    return result;
  }
  // 두 가지 역할을 하는 함수의 동작을 분리한다
  get voyageAndHIstoryLengthFactor() {
    let result = 0;
    result += this.historyLengthFactor;
    if (this.voyage.length > 14) result -= 1;
    return result;
  }

  // historyLengthFactor로 추출
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
  get voyageAndHistoryLengthFactor() {
    let result = 0
    result += 3;
    // if (this.history.length > 10) result += 1;
    result += this.historyLengthFactor;
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
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
    // 서브클래스로 옮긴다
    // if (this.voyage.zone === "china" && this.hasChinaHistory) result -= 2;
    return Math.max(result, 0);
  }
  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === "china") result += 1;
    if (this.voyage.zone === "eastindies")
      result += 1;
    if (this.voyage.zone === "china" && this.hasChinaHistory) {
      result += 3;
      if (this.history.length > 10) result += 1;
      if (this.voyage.length > 12) result += 1;
      if (this.voyage.length > 18) result -= 1;
    } else {
      if (this.history.length > 8) result += 1;
      if (this.voyage.length > 14) result -= 1;
    }
    return result;
  }
  get hasChinaHistory() {
    return this.history.some(v => "china" === v.zone);
  }
}

// 서브클래스로 captainHistoryRisk 메서드의 동작을 옮긴다
class ExperiencedChinaRating extends Rating {
  get captainHistoryRisk() {
     const result = super.captainHistoryRisk - 2;
     return Math.max(result, 0);
  }
}

function createRating(voyage, history) {
  if(voyage.zone === 'china' && history.some(v => 'china' === v.zone))
    return new ExperiencedChinaRating(voyage, history);
  else return createRating(voyage, history);
}

module.exports = {rating}
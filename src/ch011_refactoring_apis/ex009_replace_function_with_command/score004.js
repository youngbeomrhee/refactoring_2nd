// 복잡한 함수를 잘게 나누기 위해 지역 변수를 필드로 바꾼다
class Score {
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }
  execute() {
    // let result = 0;
    this._result = 0;
    this._healthLevel = 0;
    this._highMedicalRiskFlag = false;

    // 유효범위에 구애받지 않고 함수 추출하기 같은 리팩토링이 가능해짐
    this.scoreSmoking();

    this._certificationGrade = "regular";
    if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
      this._certificationGrade = "low";
      this._result -= 5;
    }
    // lots more code like this
    this._result -= Math.max(this._healthLevel - 5, 0);
    return this._result;
  }
  scoreSmoking() {
    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._highMedicalRiskFlag = true;
    }
  }
}

function score(candidate, medicalExam, scoringGuide) {
  return new Score(candidate, medicalExam, scoringGuide).execute();
}

const scoringGuide = {
  stateWithLowCertification: (state) => {
    return state < 5;
  }
}

module.exports = {score, scoringGuide}
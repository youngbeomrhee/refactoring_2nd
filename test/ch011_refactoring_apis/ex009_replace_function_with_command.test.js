const { expect, assert } = require('chai');
const { score, scoringGuide } = require('../../src/ch011_refactoring_apis/ex009_replace_function_with_command/score001');
const { score: score2, scoringGuide: scoringGuide2 } = require('../../src/ch011_refactoring_apis/ex009_replace_function_with_command/score002');
const { score: score3, scoringGuide: scoringGuide3 } = require('../../src/ch011_refactoring_apis/ex009_replace_function_with_command/score003');
const { score: score4, scoringGuide: scoringGuide4 } = require('../../src/ch011_refactoring_apis/ex009_replace_function_with_command/score004');

describe('score001', () => {
  it('gives a score to a smoker with low original state', () => {
    const lowCertificationStateCandidate = {
      originState: 4
    };
    const smokerMedicalExam = {
      isSmoker: true
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(-10)
  });

  it('gives a score to a smoker with high original state', () => {
    const lowCertificationStateCandidate = {
      originState: 5
    };
    const smokerMedicalExam = {
      isSmoker: true
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(-5)
  });

  it('gives a score to a NON-smoker with low original state', () => {
    const lowCertificationStateCandidate = {
      originState: 4
    };
    const smokerMedicalExam = {
      isSmoker: false
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(-5)
  });

  it('gives a score to a NON-smoker with hight original state', () => {
    const lowCertificationStateCandidate = {
      originState: 5
    };
    const smokerMedicalExam = {
      isSmoker: false
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(0)
  });
});

describe('score002', () => {
  const score = score2, scoringGuide = scoringGuide2;

  it('gives a score to a smoker with low original state', () => {
    const lowCertificationStateCandidate = {
      originState: 4
    };
    const smokerMedicalExam = {
      isSmoker: true
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(-10)
  });

  it('gives a score to a smoker with high original state', () => {
    const lowCertificationStateCandidate = {
      originState: 5
    };
    const smokerMedicalExam = {
      isSmoker: true
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(-5)
  });

  it('gives a score to a NON-smoker with low original state', () => {
    const lowCertificationStateCandidate = {
      originState: 4
    };
    const smokerMedicalExam = {
      isSmoker: false
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(-5)
  });

  it('gives a score to a NON-smoker with hight original state', () => {
    const lowCertificationStateCandidate = {
      originState: 5
    };
    const smokerMedicalExam = {
      isSmoker: false
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(0)
  });
});


describe('score003', () => {
  const score = score3, scoringGuide = scoringGuide3;

  it('gives a score to a smoker with low original state', () => {
    const lowCertificationStateCandidate = {
      originState: 4
    };
    const smokerMedicalExam = {
      isSmoker: true
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(-10)
  });

  it('gives a score to a smoker with high original state', () => {
    const lowCertificationStateCandidate = {
      originState: 5
    };
    const smokerMedicalExam = {
      isSmoker: true
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(-5)
  });

  it('gives a score to a NON-smoker with low original state', () => {
    const lowCertificationStateCandidate = {
      originState: 4
    };
    const smokerMedicalExam = {
      isSmoker: false
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(-5)
  });

  it('gives a score to a NON-smoker with hight original state', () => {
    const lowCertificationStateCandidate = {
      originState: 5
    };
    const smokerMedicalExam = {
      isSmoker: false
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(0)
  });
});

describe('score004', () => {
  const score = score4, scoringGuide = scoringGuide4;

  it('gives a score to a smoker with low original state', () => {
    const lowCertificationStateCandidate = {
      originState: 4
    };
    const smokerMedicalExam = {
      isSmoker: true
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(-10)
  });

  it('gives a score to a smoker with high original state', () => {
    const lowCertificationStateCandidate = {
      originState: 5
    };
    const smokerMedicalExam = {
      isSmoker: true
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(-5)
  });

  it('gives a score to a NON-smoker with low original state', () => {
    const lowCertificationStateCandidate = {
      originState: 4
    };
    const smokerMedicalExam = {
      isSmoker: false
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(-5)
  });

  it('gives a score to a NON-smoker with hight original state', () => {
    const lowCertificationStateCandidate = {
      originState: 5
    };
    const smokerMedicalExam = {
      isSmoker: false
    };
    expect(score(lowCertificationStateCandidate, smokerMedicalExam, scoringGuide)).to.equal(0)
  });
});



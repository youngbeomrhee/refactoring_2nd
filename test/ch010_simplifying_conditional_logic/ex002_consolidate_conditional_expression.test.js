const { expect, assert } = require('chai');
const { disabilityAmount } = require('../../src/ch010_simplifying_conditional_logic/ex002_consolidate_conditional_expression/disabilityAmount001');
const { disabilityAmount: disabilityAmount2 } = require('../../src/ch010_simplifying_conditional_logic/ex002_consolidate_conditional_expression/disabilityAmount002');
const { disabilityAmount: disabilityAmount3 } = require('../../src/ch010_simplifying_conditional_logic/ex002_consolidate_conditional_expression/disabilityAmount003');

describe('disabilityAmount', () => {
  it('disabilityAmount001', () => {
    expect(disabilityAmount({
      seniority: 2,
      monthsDisabled: 12,
      isPartTime: false
    })).equal(100);

    expect(disabilityAmount({
      seniority: 1,
      monthsDisabled: 12,
      isPartTime: false
    })).equal(0);

    expect(disabilityAmount({
      seniority: 2,
      monthsDisabled: 13,
      isPartTime: false
    })).equal(0);

    expect(disabilityAmount({
      seniority: 2,
      monthsDisabled: 12,
      isPartTime: true
    })).equal(0);
  });


  it('disabilityAmount002', () => {
    const disabilityAmount = disabilityAmount2;

    expect(disabilityAmount({
      seniority: 2,
      monthsDisabled: 12,
      isPartTime: false
    })).equal(100);

    expect(disabilityAmount({
      seniority: 1,
      monthsDisabled: 12,
      isPartTime: false
    })).equal(0);

    expect(disabilityAmount({
      seniority: 2,
      monthsDisabled: 13,
      isPartTime: false
    })).equal(0);

    expect(disabilityAmount({
      seniority: 2,
      monthsDisabled: 12,
      isPartTime: true
    })).equal(0);
  });


  it('disabilityAmount003', () => {
    const disabilityAmount = disabilityAmount3;

    expect(disabilityAmount({
      seniority: 2,
      monthsDisabled: 12,
      isPartTime: false
    })).equal(100);

    expect(disabilityAmount({
      seniority: 1,
      monthsDisabled: 12,
      isPartTime: false
    })).equal(0);

    expect(disabilityAmount({
      seniority: 2,
      monthsDisabled: 13,
      isPartTime: false
    })).equal(0);

    expect(disabilityAmount({
      seniority: 2,
      monthsDisabled: 12,
      isPartTime: true
    })).equal(0);
  });


});

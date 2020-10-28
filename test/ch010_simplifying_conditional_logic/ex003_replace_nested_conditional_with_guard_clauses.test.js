const { expect, assert } = require('chai');
const { payAmount } = require('../../src/ch010_simplifying_conditional_logic/ex003_replace_nested_conditional_with_guard_clauses/payAmount001');
const { payAmount: payAmount2 } = require('../../src/ch010_simplifying_conditional_logic/ex003_replace_nested_conditional_with_guard_clauses/payAmount002');
const { adjustedCapital } = require('../../src/ch010_simplifying_conditional_logic/ex003_replace_nested_conditional_with_guard_clauses/adjustedCapital001');
const { adjustedCapital: adjustedCapital2 } = require('../../src/ch010_simplifying_conditional_logic/ex003_replace_nested_conditional_with_guard_clauses/adjustedCapital002');
const { adjustedCapital: adjustedCapital3 } = require('../../src/ch010_simplifying_conditional_logic/ex003_replace_nested_conditional_with_guard_clauses/adjustedCapital003');

describe('payAmount', () => {
  it('payAmount001', () => {
    expect(payAmount({
      isSeparated: true
    })).eql({amount: 0, reasonCode: "SEP"});
    expect(payAmount({
      isRetired: true
    })).eql({amount: 0, reasonCode: "RET"});
    expect(payAmount({})).eql({amount: 100, reasonCode: "COMPLETE"});
  });
  it('payAmount002', () => {
    const payAmount = payAmount2;
    expect(payAmount({
      isSeparated: true
    })).eql({amount: 0, reasonCode: "SEP"});
    expect(payAmount({
      isRetired: true
    })).eql({amount: 0, reasonCode: "RET"});
    expect(payAmount({})).eql({amount: 100, reasonCode: "COMPLETE"});
  });
});

describe('adjustedCapital', () => {
  it('adjustedCapital001', () => {
    expect(adjustedCapital({
      capital: 0,
      interestRate: 0.1,
      duration: 0,
      income: 1000000,
      adjustmentFactor: 100
    })).equal(0);
    expect(adjustedCapital({
      capital: 1,
      interestRate: 0.1,
      duration: 10,
      income: 1000000,
      adjustmentFactor: 100
    })).equal(10000000);
  });

  it('adjustedCapital002', () => {
    const adjustedCapital = adjustedCapital2;
    expect(adjustedCapital({
      capital: 0,
      interestRate: 0.1,
      duration: 0,
      income: 1000000,
      adjustmentFactor: 100
    })).equal(0);
    expect(adjustedCapital({
      capital: 1,
      interestRate: 0.1,
      duration: 10,
      income: 1000000,
      adjustmentFactor: 100
    })).equal(10000000);
  });

  it('adjustedCapital003', () => {
    const adjustedCapital = adjustedCapital3;
    expect(adjustedCapital({
      capital: 0,
      interestRate: 0.1,
      duration: 0,
      income: 1000000,
      adjustmentFactor: 100
    })).equal(0);
    expect(adjustedCapital({
      capital: 1,
      interestRate: 0.1,
      duration: 10,
      income: 1000000,
      adjustmentFactor: 100
    })).equal(10000000);
  });
});
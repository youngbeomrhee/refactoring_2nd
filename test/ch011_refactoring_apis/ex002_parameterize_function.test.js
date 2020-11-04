const { expect, assert } = require('chai');
const { tenPercentRaise, fivePercentRaise, Salary } = require('../../src/ch011_refactoring_apis/ex002_parameterize_function/raise001');
const { raise, Salary: Salary2 } = require('../../src/ch011_refactoring_apis/ex002_parameterize_function/raise002');
const { baseCharge } = require('../../src/ch011_refactoring_apis/ex002_parameterize_function/charge001');
const { baseCharge: baseCharge2 } = require('../../src/ch011_refactoring_apis/ex002_parameterize_function/charge002');

describe('raise001', () => {
  it('10 percent raise', () => {
    const salary = new Salary(100);
    const aPerson = {salary}
    tenPercentRaise(aPerson);
    expect(aPerson.salary).equals(110);
  });
  it('5 percent raise', () => {
    const salary = new Salary(100);
    const aPerson = {salary}
    fivePercentRaise(aPerson);
    expect(aPerson.salary).equals(105);
  });
});

describe('raise002', () => {
  it('10 percent raise', () => {
    const salary = new Salary(100);
    const aPerson = {salary}
    raise(aPerson, 0.1);
    expect(aPerson.salary).equals(110);
  });
  it('5 percent raise', () => {
    const salary = new Salary(100);
    const aPerson = {salary}
    raise(aPerson, 0.05);
    expect(aPerson.salary).equals(105);
  });
});

describe('baseCharge', () => {
  it('charge001', () => {
    expect(baseCharge(10000)).equals('$694');
  });
  it('charge002', () => {
    const baseCharge = baseCharge2;
    expect(baseCharge(10000)).equals('$694');
  });
});


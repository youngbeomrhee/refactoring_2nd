const { expect, assert } = require('chai');
const { ChargeCalculator } = require('../../src/ch011_refactoring_apis/ex010_replace_command_with_function/charge001');
const { charge } = require('../../src/ch011_refactoring_apis/ex010_replace_command_with_function/charge002');
const { charge: charge2 } = require('../../src/ch011_refactoring_apis/ex010_replace_command_with_function/charge003');
const { charge: charge3 } = require('../../src/ch011_refactoring_apis/ex010_replace_command_with_function/charge004');
const { charge: charge4 } = require('../../src/ch011_refactoring_apis/ex010_replace_command_with_function/charge005');
const { charge: charge5 } = require('../../src/ch011_refactoring_apis/ex010_replace_command_with_function/charge006');

describe('charge001', () => {
  const customer = {baseRate: 0.1};
  const provider = {connectionCharge: 1000};

  it('should calculate total charge', () => {
    expect(new ChargeCalculator(customer, 100, provider).charge).to.equal(1010);
  });
});

describe('charge002', () => {
  const customer = {baseRate: 0.1};
  const provider = {connectionCharge: 1000};

  it('should calculate total charge', () => {
    expect(charge(customer, 100, provider).charge).to.equal(1010);
  });
});

describe('charge003', () => {
  const charge = charge2;

  const customer = {baseRate: 0.1};
  const provider = {connectionCharge: 1000};

  it('should calculate total charge', () => {
    expect(charge(customer, 100, provider).charge).to.equal(1010);
  });
});

describe('charge004', () => {
  const charge = charge3;

  const customer = {baseRate: 0.1};
  const provider = {connectionCharge: 1000};

  it('should calculate total charge', () => {
    expect(charge(customer, 100, provider)).to.equal(1010);
  });
});

describe('charge005', () => {
  const charge = charge4;

  const customer = {baseRate: 0.1};
  const provider = {connectionCharge: 1000};

  it('should calculate total charge', () => {
    expect(charge(customer, 100, provider)).to.equal(1010);
  });
});

describe('charge006', () => {
  const charge = charge5;

  const customer = {baseRate: 0.1};
  const provider = {connectionCharge: 1000};

  it('should calculate total charge', () => {
    expect(charge(customer, 100, provider)).to.equal(1010);
  });
});


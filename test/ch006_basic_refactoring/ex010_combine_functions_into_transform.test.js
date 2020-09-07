const { expect, assert } = require('chai');
const {acquireReading} = require('../../src/ch006_basic_refactoring/ex010_combine_functions_into_transform/data/reading');
const {enrichReading} = require('../../src/ch006_basic_refactoring/ex010_combine_functions_into_transform/util001');
const {basicChargeAmount} = require('../../src/ch006_basic_refactoring/ex010_combine_functions_into_transform/client3_001');
const {basicChargeAmount: basicChargeAmount2} = require('../../src/ch006_basic_refactoring/ex010_combine_functions_into_transform/client3_002');
const {basicChargeAmount: basicChargeAmount3} = require('../../src/ch006_basic_refactoring/ex010_combine_functions_into_transform/client3_003');
const {baseCharge} = require('../../src/ch006_basic_refactoring/ex010_combine_functions_into_transform/client1_001');
const {baseCharge: baseCharge2} = require('../../src/ch006_basic_refactoring/ex010_combine_functions_into_transform/client1_002');
const {base, taxableCharge} = require('../../src/ch006_basic_refactoring/ex010_combine_functions_into_transform/client2_001');
const {base: base2, taxableCharge: taxableCharge2} = require('../../src/ch006_basic_refactoring/ex010_combine_functions_into_transform/client2_002');
const {taxableCharge: taxableCharge3} = require('../../src/ch006_basic_refactoring/ex010_combine_functions_into_transform/client2_003');

describe('data', () => {
  it('acquireReading()', () => {
    expect(acquireReading()).to.eql({customer: "ivan", quantity: 10, month: 5, year: 2017});
  });
});

describe('util', () => {
  it('enrichReading()', () => {
    expect(acquireReading()).to.eql({customer: "ivan", quantity: 10, month: 5, year: 2017});
    expect(enrichReading(acquireReading())).to.eql({customer: "ivan", quantity: 10, month: 5, year: 2017});
  });
});

describe('client003', () => {
  let aReading;
  beforeEach(() => {
    aReading = acquireReading();
  });
  it('basicChargeAmount is mocking', () => {
    expect(basicChargeAmount).equal(aReading.month * aReading.quantity);
  });
  it('basicChargeAmount has the same value using enrichReading', () => {
    expect(basicChargeAmount).equal(basicChargeAmount2);
  });
  it('basicChargeAmount has the same value after combining funtion into transform', () => {
    expect(basicChargeAmount).equal(basicChargeAmount3);
  });
});

describe('client001', () => {
  let aReading;
  beforeEach(() => {
    aReading = acquireReading();
  });
  it('baseCharge is mocking', () => {
    expect(baseCharge).equal(aReading.month * aReading.quantity);
  });
  it('baseCharge has the same value using enrichReading', () => {
    expect(baseCharge).equal(baseCharge2);
  });
});

describe('client002', () => {
  let aReading;
  beforeEach(() => {
    aReading = acquireReading();
  });
  it('base is mocking', () => {
    expect(base).equal(aReading.month * aReading.quantity);
  });
  it('baseCharge has the same value using enrichReading', () => {
    expect(base).equal(base2);
  });
  it('taxableCharge has the same value using enrichReading', () => {
    expect(taxableCharge).equal(taxableCharge2);
  });
  it('taxableCharge has the same value after combining funtion into transform', () => {
    expect(taxableCharge).equal(taxableCharge3);
  });
});

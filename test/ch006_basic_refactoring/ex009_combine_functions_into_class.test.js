const { expect, assert } = require('chai');
const {acquireReading} = require('../../src/ch006_basic_refactoring/ex009_combine_functions_into_class/data/reading');
const {baseCharge} = require('../../src/ch006_basic_refactoring/ex009_combine_functions_into_class/client1_001');
const {base, taxableCharge} = require('../../src/ch006_basic_refactoring/ex009_combine_functions_into_class/client2_001');
const {basicChargeAmount} = require('../../src/ch006_basic_refactoring/ex009_combine_functions_into_class/client3_001');
const {basicChargeAmount: basicChargeAmount2} = require('../../src/ch006_basic_refactoring/ex009_combine_functions_into_class/client3_002');
const {basicChargeAmount: basicChargeAmount3} = require('../../src/ch006_basic_refactoring/ex009_combine_functions_into_class/client3_003');
const {baseCharge: baseCharge2} = require('../../src/ch006_basic_refactoring/ex009_combine_functions_into_class/client1_002');
const {base: base2, taxableCharge: taxableCharge2} = require('../../src/ch006_basic_refactoring/ex009_combine_functions_into_class/client2_002');
const {base: base3, taxableCharge: taxableCharge3} = require('../../src/ch006_basic_refactoring/ex009_combine_functions_into_class/client2_003');
const {base: base4, taxableCharge: taxableCharge4} = require('../../src/ch006_basic_refactoring/ex009_combine_functions_into_class/client2_004');


describe('data', () => {
  it('acquireReading()', () => {
    expect(acquireReading()).to.eql({customer: "ivan", quantity: 10, month: 5, year: 2017});
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
});

describe('client002', () => {
  it('base === taxableCharge', () => {
    expect(base).equal(baseCharge);
    expect(base).equal(taxableCharge);
  });
});

describe('client003', () => {
  it('basicChargeAmount', () => {
    expect(basicChargeAmount).equal(base);
  });

  it('basicChargeAmount should same after encapsulation record', () => {
    expect(basicChargeAmount).equal(basicChargeAmount2);
  });

  it('basicChargeAmount should same after moving function into the Reading class', () => {
    expect(basicChargeAmount).equal(basicChargeAmount3);
  });
});


describe('after combining function into class', () => {
  it('client001 baseCharge has the same value', () => {
    expect(baseCharge2).equal(baseCharge);
  });
  it('client002 base has the same value', () => {
    expect(base).equal(base2);
  });
  it('client002 taxableCharge has the same value after extraction function', () => {
    expect(taxableCharge).equal(taxableCharge3);
  });
  it('client002 taxableCharge has the same value after moving function into the Reading class', () => {
    expect(taxableCharge).equal(taxableCharge4);
  });
});





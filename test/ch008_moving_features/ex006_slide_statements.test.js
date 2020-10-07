const { expect, assert } = require('chai');
const {charge} = require('../../src/ch008_moving_features/ex006_slide_statements/charge001');
const {charge: charge2} = require('../../src/ch008_moving_features/ex006_slide_statements/charge002');

describe('charge', () => {
  it('001', () => {
    expect(charge).equal(82);
  });
  it('002 slided statements', () => {
    const charge = charge2;
    expect(charge).equal(82);
  });
});


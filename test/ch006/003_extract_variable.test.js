const { expect, assert } = require('chai');
const {price} = require('../../src/ch006/ex003_extract_variable/price001');
const {price: price2} = require('../../src/ch006/ex003_extract_variable/price002');

describe('Extract Variable 1', () => {
  it('should price order which quantity is under 50', () => {
    const anOrder = {
      quantity: 49,
      itemPrice: 1
    };

    expect(price(anOrder)).to.equal(53.9);
  });

  it('should price order which quantity is above 50', () => {
    const anOrder = {
      quantity: 51,
      itemPrice: 1
    };

    expect(price(anOrder)).to.equal(56.1);
  });
});

describe('Extract Variable 2', () => {
  const price = price2;

  it('should price order which quantity is under 50', () => {
    const anOrder = {
      quantity: 49,
      itemPrice: 1
    };

    expect(price(anOrder)).to.equal(53.9);
  });

  it('should price order which quantity is above 50', () => {
    const anOrder = {
      quantity: 51,
      itemPrice: 1
    };

    expect(price(anOrder)).to.equal(56.1);
  });
});

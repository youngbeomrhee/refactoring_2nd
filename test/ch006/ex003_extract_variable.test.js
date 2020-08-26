const { expect, assert } = require('chai');
const {price} = require('../../src/ch006/ex003_extract_variable/price001');
const {price: price2} = require('../../src/ch006/ex003_extract_variable/price002');
const {Order} = require('../../src/ch006/ex003_extract_variable/order001');
const {Order: Order2} = require('../../src/ch006/ex003_extract_variable/order002');

describe('price001', () => {
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

describe('price002', () => {
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

describe('order001', () => {
  it('should price order which quantity is under 50', () => {
    const anOrder = {
      quantity: 49,
      itemPrice: 1
    };

    expect(new Order(anOrder).price).to.equal(53.9);
  });

  it('should price order which quantity is above 50', () => {
    const anOrder = {
      quantity: 51,
      itemPrice: 1
    };

    expect(new Order(anOrder).price).to.equal(56.1);
  });
});

describe('order002', () => {
  const Order = Order2;

  it('should price order which quantity is under 50', () => {
    const anOrder = {
      quantity: 49,
      itemPrice: 1
    };

    expect(new Order(anOrder).price).to.equal(53.9);
  });

  it('should price order which quantity is above 50', () => {
    const anOrder = {
      quantity: 51,
      itemPrice: 1
    };

    expect(new Order(anOrder).price).to.equal(56.1);
  });
});

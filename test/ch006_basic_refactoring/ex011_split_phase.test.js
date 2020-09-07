const { expect, assert } = require('chai');
const {priceOrder} = require('../../src/ch006_basic_refactoring/ex011_split_phase/order001');
const {priceOrder: priceOrder2} = require('../../src/ch006_basic_refactoring/ex011_split_phase/order002');
const {priceOrder: priceOrder3} = require('../../src/ch006_basic_refactoring/ex011_split_phase/order003');
const {priceOrder: priceOrder4} = require('../../src/ch006_basic_refactoring/ex011_split_phase/order004');

describe('priceOrder', () => {
  const product = {
    basePrice: 10,
    discountRate: 0.1,
    discountThreshold: 10
  };

  const shippingMethod = {
    discountThreshold: 20,
    feePerCase: 5,
    discountedFee: 3
  };

  it('should price an order with discount and shipping cost applied', () => {
    expect(priceOrder(product, 5, shippingMethod)).to.equal(65);
  });

  it('should priceOrder and priceOrder2(splitted phase) return same value', () => {
    expect(priceOrder2(product, 5, shippingMethod)).to.equal(priceOrder(product, 5, shippingMethod));
  });

  it('should priceOrder and priceOrder3(parameter is moved to intermediate data structure) return same value', () => {
    expect(priceOrder3(product, 5, shippingMethod)).to.equal(priceOrder(product, 5, shippingMethod));
  });

  it('should priceOrder and priceOrder4(extracted to function) return same value', () => {
    expect(priceOrder4(product, 5, shippingMethod)).to.equal(priceOrder(product, 5, shippingMethod));
  });

});
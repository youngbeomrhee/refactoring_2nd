const { expect, assert } = require('chai');
const { Order } = require('../../src/ch011_refactoring_apis/ex005_replace_parameter_with_query/order001');
const { Order: Order2 } = require('../../src/ch011_refactoring_apis/ex005_replace_parameter_with_query/order002');
const { Order: Order3 } = require('../../src/ch011_refactoring_apis/ex005_replace_parameter_with_query/order003');

describe('Order', () => {
  it('order001', () => {
    const order = new Order(100, 10000);
    expect(order.finalPrice).equals(950000);
  });
  it('order002', () => {
    const Order = Order2;
    const order = new Order(100, 10000);
    expect(order.finalPrice).equals(950000);
  });
  it('order003', () => {
    const Order = Order3;
    const order = new Order(100, 10000);
    expect(order.finalPrice).equals(950000);
  });
});
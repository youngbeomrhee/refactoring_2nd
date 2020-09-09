const { expect, assert } = require('chai');
const {Order} = require('../../src/ch007_encapsulation/ex004_replace_temp_with_query/order001');
const {Order: Order2} = require('../../src/ch007_encapsulation/ex004_replace_temp_with_query/order002');

describe('Order001', () => {
  it('calculates price when total cost is lower than 1000', () => {
    const anOrder = new Order(2, {price: 500});
    expect(anOrder.price).to.equal(980);
  });

  it('calculates price when total cost is more than 1000', () => {
    const anOrder = new Order(2, {price: 501});
    expect(anOrder.price).to.equal(951.9);
  });

});
describe('Order002', () => {
  const Order = Order2;

  it('calculates price when total cost is lower than 1000', () => {
    const anOrder = new Order(2, {price: 500});
    expect(anOrder.price).to.equal(980);
  });

  it('calculates price when total cost is more than 1000', () => {
    const anOrder = new Order(2, {price: 501});
    expect(anOrder.price).to.equal(951.9);
  });
});
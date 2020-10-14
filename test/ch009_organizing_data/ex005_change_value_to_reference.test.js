const { expect, assert } = require('chai');
const { Order, Customer } = require('../../src/ch009_organizing_data/ex005_change_value_to_reference/order001');
const { Order: Order2, initialize } = require('../../src/ch009_organizing_data/ex005_change_value_to_reference/order002');

describe('order', () => {
  it('order001', () => {
    const o1 = new Order({number: 1, customer: new Customer(1)});
    const o2 = new Order({number: 2, customer: new Customer(2)});

    expect(o1.customer === o2.customer).equals(false);
  });

  it('order002', () => {
    const Order = Order2;
    initialize();
    const o1 = new Order({number: 1, customer: new Customer(1)});
    const o2 = new Order({number: 2, customer: new Customer(2)});

    expect(o1.customer === o2.customer).equals(false);
  });

});

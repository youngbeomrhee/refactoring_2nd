const { expect, assert } = require('chai');
const Money = require('js-money');
const {Customer} = require('../../src/ch008_moving_features/ex002_move_field/customer001');
const {Customer: Customer2} = require('../../src/ch008_moving_features/ex002_move_field/customer002');
const {Account, AccountType} = require('../../src/ch008_moving_features/ex002_move_field/account001');
const {Account: Account2, AccountType: AccountType2} = require('../../src/ch008_moving_features/ex002_move_field/account002');

describe('Customer', () => {
  it('customer001 calculates discount', () => {
    const customer = new Customer("Mike", 0.05);
    expect(customer.applyDiscount(new Money(500, Money.EUR))).to.eql(new Money(475, Money.EUR));
  });
  it('calculates002 discount', () => {
    const Customer = Customer2;
    const customer = new Customer("Mike", 0.05);
    expect(customer.applyDiscount(new Money(500, Money.EUR))).to.eql(new Money(475, Money.EUR));
  });
});

describe('Account', () => {
  it('account001 each account has their interests', () => {
    const a1 = new Account(1, new AccountType('vip'), 0.1);
    const a2 = new Account(2, new AccountType('vip'), 0.03);
    expect(a1.interestRate).not.equal(a2.interestRate);
  });
  it('account002 same account type has the same interest', () => {
    const Account = Account2;
    const AccountType = AccountType2;
    const a1 = new Account(1, new AccountType('vip', 0.1), 0.1);
    const a2 = new Account(2, new AccountType('vip', 0.1), 0.03);
    expect(a1.interestRate).equal(a2.interestRate);
  });
});
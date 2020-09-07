const { expect, assert } = require('chai');
const { rating } = require('../../src/ch006_basic_refactoring/ex002_inline_function/rating001');
const { rating: rating2 } = require('../../src/ch006_basic_refactoring/ex002_inline_function/rating002');
const { reportLines } = require('../../src/ch006_basic_refactoring/ex002_inline_function/reportLines001');
const { reportLines: reportLines2 } = require('../../src/ch006_basic_refactoring/ex002_inline_function/reportLines002');

describe('rating001', () => {
  it('should give rating 1 when late deliveries less than or equal to 5 ', () => {
    const aDriverWithLateDeliveriesLessThan5 = {
      numberOfLateDeliveries: 4
    };

    expect(rating(aDriverWithLateDeliveriesLessThan5)).to.equal(1);

    const aDriverWith5LateDeliveries = {
      numberOfLateDeliveries: 5
    };

    expect(rating(aDriverWith5LateDeliveries)).to.equal(1);
  });

  it('should give rating 2 when late deliveries more than 5 ', () => {
    const aDriverWithLateDeliveriesMoreThan5 = {
      numberOfLateDeliveries: 6
    };

    expect(rating(aDriverWithLateDeliveriesMoreThan5)).to.equal(2);
  });
});

describe('rating002', () => {
  const rating = rating2;

  it('should give rating 1 when late deliveries less than or equal to 5 ', () => {
    const aDriverWithLateDeliveriesLessThan5 = {
      numberOfLateDeliveries: 4
    };

    expect(rating(aDriverWithLateDeliveriesLessThan5)).to.equal(1);

    const aDriverWith5LateDeliveries = {
      numberOfLateDeliveries: 5
    };

    expect(rating(aDriverWith5LateDeliveries)).to.equal(1);
  });

  it('should give rating 2 when late deliveries more than 5 ', () => {
    const aDriverWithLateDeliveriesMoreThan5 = {
      numberOfLateDeliveries: 6
    };

    expect(rating(aDriverWithLateDeliveriesMoreThan5)).to.equal(2);
  });
});

describe('reportLines001', () => {
  let customer;

  beforeEach(function () {
    customer = {
      name: 'yb',
      location: 'Korea'
    };
  });

  it('type check', () => {
    assert.typeOf(reportLines(customer), 'array');
  });
  it('length check', () => {
    assert.equal(reportLines(customer).length, 2);
  });
  it('value check', () => {
    assert.equal(reportLines(customer)[0][0], 'name');
    assert.equal(reportLines(customer)[0][1], 'yb');
    assert.equal(reportLines(customer)[1][0], 'location');
    assert.equal(reportLines(customer)[1][1], 'Korea');
  });
});

describe('reportLines002', () => {
  let customer;
  const reportLines = reportLines2;

  beforeEach(function () {
    customer = {
      name: 'yb',
      location: 'Korea'
    };
  });

  it('type check', () => {
    assert.typeOf(reportLines(customer), 'array');
  });
  it('length check', () => {
    assert.equal(reportLines(customer).length, 2);
  });
  it('value check', () => {
    assert.equal(reportLines(customer)[0][0], 'name');
    assert.equal(reportLines(customer)[0][1], 'yb');
    assert.equal(reportLines(customer)[1][0], 'location');
    assert.equal(reportLines(customer)[1][1], 'Korea');
  });
});

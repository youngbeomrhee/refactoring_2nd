const { expect, assert } = require('chai');
require('date-utils');
const { PlacedOn } = require('../../src/ch011_refactoring_apis/ex003_remove_flag_argument/placedOn');
const { deliveryDate } = require('../../src/ch011_refactoring_apis/ex003_remove_flag_argument/delivery001');
const { deliveryDate: deliveryDate2 } = require('../../src/ch011_refactoring_apis/ex003_remove_flag_argument/delivery002');
const { deliveryDate: deliveryComplicated } = require('../../src/ch011_refactoring_apis/ex003_remove_flag_argument/deliveryComplicated001');
const { rushDeliveryDate, regularDeliveryDate } = require('../../src/ch011_refactoring_apis/ex003_remove_flag_argument/deliveryComplicated002');


describe('deliveryDate001', () => {
  let placedDate;
  beforeEach(() => {
    placedDate = new PlacedOn(2020, 11, 4);
  });
  it('delivery001 to NY', () => {
    expect(deliveryDate({deliveryState: 'NY', placedOn: placedDate}).placedDate).to.equals('2020-11-08');
  });
  it('delivery001 is rush to NY ', () => {
    expect(deliveryDate({deliveryState: 'NY', placedOn: placedDate}, true).placedDate).to.equals('2020-11-07');
  });
  it('delivery001 WA', () => {
    expect(deliveryDate({deliveryState: 'WA', placedOn: placedDate}).placedDate).to.equals('2020-11-10');
  });
  it('delivery001 is rush to WA', () => {
    expect(deliveryDate({deliveryState: 'WA', placedOn: placedDate}, true).placedDate).to.equals('2020-11-08');
  });
});

describe('deliveryDate002', () => {
  let placedDate, deliveryDate;
  beforeEach(() => {
    placedDate = new PlacedOn(2020, 11, 4);
    deliveryDate = deliveryDate2;
  });
  it('delivery001 to NY', () => {
    expect(deliveryDate({deliveryState: 'NY', placedOn: placedDate}).placedDate).to.equals('2020-11-08');
  });
  it('delivery001 is rush to NY ', () => {
    expect(deliveryDate({deliveryState: 'NY', placedOn: placedDate}, true).placedDate).to.equals('2020-11-07');
  });
  it('delivery001 WA', () => {
    expect(deliveryDate({deliveryState: 'WA', placedOn: placedDate}).placedDate).to.equals('2020-11-10');
  });
  it('delivery001 is rush to WA', () => {
    expect(deliveryDate({deliveryState: 'WA', placedOn: placedDate}, true).placedDate).to.equals('2020-11-08');
  });
});

describe('deliveryComplicated001', () => {
  const deliveryDate = deliveryComplicated;
  let placedDate;

  beforeEach(() => {
    placedDate = new PlacedOn(2020, 11, 4);
  });
  it('delivery001 to NY', () => {
    expect(deliveryDate({deliveryState: 'NY', placedOn: placedDate}).placedDate).to.equals('2020-11-08');
  });
  it('delivery001 is rush to NY ', () => {
    expect(deliveryDate({deliveryState: 'NY', placedOn: placedDate}, true).placedDate).to.equals('2020-11-07');
  });
  it('delivery001 WA', () => {
    expect(deliveryDate({deliveryState: 'WA', placedOn: placedDate}).placedDate).to.equals('2020-11-10');
  });
  it('delivery001 is rush to WA', () => {
    expect(deliveryDate({deliveryState: 'WA', placedOn: placedDate}, true).placedDate).to.equals('2020-11-08');
  });
});

describe('deliveryComplicated001', () => {
  let placedDate;

  beforeEach(() => {
    placedDate = new PlacedOn(2020, 11, 4);
  });
  it('delivery001 to NY', () => {
    expect(regularDeliveryDate({deliveryState: 'NY', placedOn: placedDate}).placedDate).to.equals('2020-11-08');
  });
  it('delivery001 is rush to NY ', () => {
    expect(rushDeliveryDate({deliveryState: 'NY', placedOn: placedDate}, true).placedDate).to.equals('2020-11-07');
  });
  it('delivery001 WA', () => {
    expect(regularDeliveryDate({deliveryState: 'WA', placedOn: placedDate}).placedDate).to.equals('2020-11-10');
  });
  it('delivery001 is rush to WA', () => {
    expect(rushDeliveryDate({deliveryState: 'WA', placedOn: placedDate}, true).placedDate).to.equals('2020-11-08');
  });
});

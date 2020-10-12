const { expect, assert } = require('chai');
const {distanceTravelled} = require('../../src/ch009_organizing_data/ex001_split_variable/travelled001');
const {distanceTravelled: distanceTravelled2} = require('../../src/ch009_organizing_data/ex001_split_variable/travelled002');
const {distanceTravelled: distanceTravelled3} = require('../../src/ch009_organizing_data/ex001_split_variable/travelled003');
const {discount} = require('../../src/ch009_organizing_data/ex001_split_variable/discount001');
const {discount: discount2} = require('../../src/ch009_organizing_data/ex001_split_variable/discount002');
const {discount: discount3} = require('../../src/ch009_organizing_data/ex001_split_variable/discount003');


describe('distanceTravelled', () => {
  let haggisScenario;
  beforeEach(() => {
    haggisScenario = {
      primaryForce: 10, // km
      secondaryForce: 7, // km
      mass: 10, // kg
      delay: 71 // day
    }
  });

  it('distanceTravelled001', () => {
    expect(distanceTravelled(haggisScenario, 100)).equal(5294.35);
  });
  it('distanceTravelled002', () => {
    const distanceTravelled = distanceTravelled2;
    expect(distanceTravelled(haggisScenario, 100)).equal(5294.35);
  });
  it('distanceTravelled003', () => {
    const distanceTravelled = distanceTravelled3;
    expect(distanceTravelled(haggisScenario, 100)).equal(5294.35);
  });
});


describe('discount', () => {
  it('discount001', () => {
    expect(discount(10, 10)).equal(10);
    expect(discount(200, 10)).equal(198);
    expect(discount(10, 200)).equal(9);
    expect(discount(200, 200)).equal(197);
  });

  it('discount002', () => {
    const discount = discount2;
    expect(discount(10, 10)).equal(10);
    expect(discount(200, 10)).equal(198);
    expect(discount(10, 200)).equal(9);
    expect(discount(200, 200)).equal(197);
  });

  it('discount003', () => {
    const discount = discount3;
    expect(discount(10, 10)).equal(10);
    expect(discount(200, 10)).equal(198);
    expect(discount(10, 200)).equal(9);
    expect(discount(200, 200)).equal(197);
  });
});


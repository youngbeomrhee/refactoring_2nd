const { expect, assert } = require('chai');
const { checkHeatingPlan, HeatingPlan } = require('../../src/ch011_refactoring_apis/ex004_preserve_whole_object/range001');
const { checkHeatingPlan: checkHeatingPlan2, HeatingPlan: HeatingPlan2 } = require('../../src/ch011_refactoring_apis/ex004_preserve_whole_object/range002');
const { checkHeatingPlan: checkHeatingPlan3, HeatingPlan: HeatingPlan3 } = require('../../src/ch011_refactoring_apis/ex004_preserve_whole_object/rangeSecond001');
const { checkHeatingPlan: checkHeatingPlan4, HeatingPlan: HeatingPlan4 } = require('../../src/ch011_refactoring_apis/ex004_preserve_whole_object/rangeSecond002');
const { checkHeatingPlan: checkHeatingPlan5, HeatingPlan: HeatingPlan5 } = require('../../src/ch011_refactoring_apis/ex004_preserve_whole_object/rangeSecond003');

describe('range', () => {
  it('range001 in range', () => {
    const heatingPlan = new HeatingPlan({low: 10, high: 20});
    const alerts = [];
    checkHeatingPlan(heatingPlan, {daysTempRange: {low: 11, high: 17}}, alerts);
    expect(alerts.length).equals(0);
  });
  it('range002 out of range', () => {
    const HeatingPlan = HeatingPlan2;
    const checkHeatingPlan = checkHeatingPlan2;

    const heatingPlan = new HeatingPlan({low: 10, high: 20});
    const alerts = [];
    checkHeatingPlan(heatingPlan, {daysTempRange: {low: 0, high: 17}}, alerts);
    expect(alerts.length).equals(1);
  });
});

describe('rangeSecond', () => {
  it('rangeSecond001 in range', () => {
    const HeatingPlan = HeatingPlan3;
    const checkHeatingPlan = checkHeatingPlan3;

    const heatingPlan = new HeatingPlan({low: 10, high: 20});
    const alerts = [];
    checkHeatingPlan(heatingPlan, {daysTempRange: {low: 11, high: 17}}, alerts);
    expect(alerts.length).equals(0);
  });

  it('rangeSecond002 in range', () => {
    const HeatingPlan = HeatingPlan4;
    const checkHeatingPlan = checkHeatingPlan4;

    const heatingPlan = new HeatingPlan({low: 10, high: 20});
    const alerts = [];
    checkHeatingPlan(heatingPlan, {daysTempRange: {low: 11, high: 17}}, alerts);
    expect(alerts.length).equals(0);
  });

});
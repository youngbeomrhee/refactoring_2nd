const { expect, assert } = require('chai');
const { thermostat, HeatingPlan } = require('../../src/ch011_refactoring_apis/ex006_replace_query_with_parameter/heatingPlan001');
const { thermostat: thermostat2, HeatingPlan: HeatingPlan2 } = require('../../src/ch011_refactoring_apis/ex006_replace_query_with_parameter/heatingPlan002');
const { thermostat: thermostat3, HeatingPlan: HeatingPlan3 } = require('../../src/ch011_refactoring_apis/ex006_replace_query_with_parameter/heatingPlan003');

describe('HeatingPlan', () => {
  it('HeatingPlan001', () => {
    const heatingPlan = new HeatingPlan(10, 20);
    expect(heatingPlan.targetTemperature).equals(thermostat.selectedTemperature);
    thermostat.selectedTemperature = 22;
    expect(heatingPlan.targetTemperature).equals(20);
    thermostat.selectedTemperature = 7;
    expect(heatingPlan.targetTemperature).equals(10);
  });
  it('HeatingPlan002', () => {
    const thermostat = thermostat2;
    const HeatingPlan = HeatingPlan2;

    const heatingPlan = new HeatingPlan(10, 20);
    expect(heatingPlan.targetTemperature).equals(thermostat.selectedTemperature);
    thermostat.selectedTemperature = 22;
    expect(heatingPlan.targetTemperature).equals(20);
    thermostat.selectedTemperature = 7;
    expect(heatingPlan.targetTemperature).equals(10);
  });
  it('HeatingPlan003', () => {
    const thermostat = thermostat3;
    const HeatingPlan = HeatingPlan3;

    const heatingPlan = new HeatingPlan(10, 20);
    expect(heatingPlan.targetTemperature).equals(thermostat.selectedTemperature);
    thermostat.selectedTemperature = 22;
    expect(heatingPlan.targetTemperature).equals(20);
    thermostat.selectedTemperature = 7;
    expect(heatingPlan.targetTemperature).equals(10);
  });
});
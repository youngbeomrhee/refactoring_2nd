const { expect, assert } = require('chai');
const {readingsOutsideRange} = require('../../src/ch006/ex008_introduce_parameter_object/range001');
const {readingsOutsideRange: readingsOutsideRange2} = require('../../src/ch006/ex008_introduce_parameter_object/range002');


const station = {
  name: "ZB1",
  readings: [
    {temp: 47, time: "2016-11-10 09:10"},
    {temp: 53, time: "2016-11-10 09:20"},
    {temp: 58, time: "2016-11-10 09:30"},
    {temp: 53, time: "2016-11-10 09:40"},
    {temp: 51, time: "2016-11-10 09:50"},
  ]
};

const operationPlan = {
  temperatureFloor: 51,
  temperatureCeiling: 53
};

describe('readingsOutsideRange', () => {
  it('give the reading outside temperature outside range', () => {

    let alerts = readingsOutsideRange(station, operationPlan.temperatureFloor, operationPlan.temperatureCeiling);

    expect(alerts).to.eql([{temp: 47, time: "2016-11-10 09:10"}, {temp: 58, time: "2016-11-10 09:30"}]);
  });

  it('give the reading outside temperature outside range', () => {

    let alerts = readingsOutsideRange2(station, operationPlan.temperatureFloor, operationPlan.temperatureCeiling);

    expect(alerts).to.eql([{temp: 47, time: "2016-11-10 09:10"}, {temp: 58, time: "2016-11-10 09:30"}]);
  });

});
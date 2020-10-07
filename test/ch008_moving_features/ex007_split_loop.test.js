const { expect, assert } = require('chai');
const {report} = require('../../src/ch008_moving_features/ex007_split_loop/report001');
const {report: report2} = require('../../src/ch008_moving_features/ex007_split_loop/report002');
const {report: report3} = require('../../src/ch008_moving_features/ex007_split_loop/report003');
const {report: report4} = require('../../src/ch008_moving_features/ex007_split_loop/report004');

const people = [{
    age: "30",
    salary: 2000
  },
  {
    age: "25",
    salary: 2000
  },
  {
    age: "31",
    salary: 2000
}];

describe('report001', () => {
  it('report youngest age and total salary', () => {
    expect(report(people)).to.equal("youngestAge: 25, totalSalary: 6000");
  });
});

describe('report002', () => {
  const report = report2;
  it('report youngest age and total salary', () => {
    expect(report(people)).to.equal("youngestAge: 25, totalSalary: 6000");
  });
});

describe('report003', () => {
  const report = report3;
  it('report youngest age and total salary', () => {
    expect(report(people)).to.equal("youngestAge: 25, totalSalary: 6000");
  });
});

describe('report004', () => {
  const report = report4;
  it('report youngest age and total salary', () => {
    expect(report(people)).to.equal("youngestAge: 25, totalSalary: 6000");
  });
});
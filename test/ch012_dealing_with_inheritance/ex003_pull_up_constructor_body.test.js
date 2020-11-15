const { expect, assert } = require('chai');
const { Employee, Department } = require('../../src/ch012_dealing_with_inheritance/ex003_pull_up_constructor_body/company001');
const { Employee: Employee2, Department: Department2 } = require('../../src/ch012_dealing_with_inheritance/ex003_pull_up_constructor_body/company002');
const { Manager } = require('../../src/ch012_dealing_with_inheritance/ex003_pull_up_constructor_body/employee001');
const { Manager: Manager2 } = require('../../src/ch012_dealing_with_inheritance/ex003_pull_up_constructor_body/employee002');

describe('company001', () => {
  it('same methods return same value', () => {
    const employee = new Employee('Martin Fowler', 'mf', 10000);
    expect(employee.name).equals('Martin Fowler');

    const department = new Department('dev', [employee]);
    expect(department.name).equals('dev');
  });
});

describe('company002', () => {
  const Employee = Employee2;
  const Department = Department2;

  it('same methods return same value', () => {
    const employee = new Employee('Martin Fowler', 'mf', 10000);
    expect(employee.name).equals('Martin Fowler');

    const department = new Department('dev', [employee]);
    expect(department.name).equals('dev');
  });
});

describe('employee', () => {
  it('employee001', () => {
    const m1 = new Manager('Martin Fowler', 5);
    const m2 = new Manager('John Doe', -1);
    expect(m1.assigned).equals(true);
    expect(m2.assigned).equals(false);
  });
  it('employee002', () => {
    const m1 = new Manager('Martin Fowler', 5);
    const m2 = new Manager('John Doe', -1);
    expect(m1.assigned).equals(true);
    expect(m2.assigned).equals(false);
  });
});


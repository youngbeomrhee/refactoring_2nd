const { expect, assert } = require('chai');
const { Employee, Department } = require('../../src/ch012_dealing_with_inheritance/ex001_pull_up_method/company001');
const { Employee: Employee2, Department: Department2, Company, SubclassResponsibilityError } = require('../../src/ch012_dealing_with_inheritance/ex001_pull_up_method/company002');

describe('company001', () => {
  it('same methods return same value', () => {
    const employee = new Employee(1000);
    const department = new Department(10000);

    expect(employee.monthlyCost * 12).equals(employee.annualCost);
    expect(department.monthlyCost * 12).equals(department.totalAnnualCost);
  });
});
describe('company002', () => {
  const Employee = Employee2;
  const Department = Department2;

  it('same methods return same value', () => {
    const employee = new Employee(1000);
    const department = new Department(10000);

    expect(employee.monthlyCost * 12).equals(employee.annualCost);
    expect(department.monthlyCost * 12).equals(department.annualCost);
  });

  it('child class instance not overriding monthlyCost method must throw SubclassResponsibilityError', () => {
    const company = new Company();
    expect(_=>company.monthlyCost).to.throw(SubclassResponsibilityError);
  });

});


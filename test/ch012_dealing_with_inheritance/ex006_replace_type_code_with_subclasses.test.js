const { expect, assert } = require('chai');
const { Employee } = require('../../src/ch012_dealing_with_inheritance/ex006_replace_type_code_with_subclasses/employee001');
const { Employee: Employee2 } = require('../../src/ch012_dealing_with_inheritance/ex006_replace_type_code_with_subclasses/employee002');
const { Employee: Employee3 } = require('../../src/ch012_dealing_with_inheritance/ex006_replace_type_code_with_subclasses/employee003');
const { Employee: Employee4 } = require('../../src/ch012_dealing_with_inheritance/ex006_replace_type_code_with_subclasses/employee004');

describe('employee001', () => {
  it('must throw Error', () => {
    expect(_ => new Employee('Marin Fowler', 'soldier')).to.throw();
  });
  it('must not throw Error', () => {
    expect(_ => new Employee('Martin Fowler', 'engineer')).not.to.throw();
  });
});

describe('employee002', () => {
  const Employee = Employee2;
  it('must throw Error', () => {
    expect(_ => new Employee('Marin Fowler', 'soldier')).to.throw();
  });
  it('must not throw Error', () => {
    expect(_ => new Employee('Martin Fowler', 'engineer')).not.to.throw();
  });
});

describe('employee003', () => {
  const Employee = Employee3;
  it('must throw Error', () => {
    expect(_ => new Employee('Marin Fowler', 'soldier')).to.throw();
  });
  it('must not throw Error', () => {
    expect(_ => new Employee('Martin Fowler', 'engineer')).not.to.throw();
  });
});

describe('employee003', () => {
  const Employee = Employee4;
  it('must throw Error', () => {
    expect(_ => new Employee('Marin Fowler', 'soldier')).to.throw();
  });
  it('must not throw Error', () => {
    expect(_ => new Employee('Martin Fowler', 'engineer')).not.to.throw();
  });
});
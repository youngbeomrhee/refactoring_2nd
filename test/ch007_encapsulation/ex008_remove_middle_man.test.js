const { expect, assert } = require('chai');
const {Person, Department} = require('../../src/ch007_encapsulation/ex008_remove_middle_man/department001');
const {Person: Person2, Department: Department2} = require('../../src/ch007_encapsulation/ex008_remove_middle_man/department002');

describe('Department', () => {
  it('001', () => {
    const aPerson = new Person('Martin Fowler', new Department('Kent Beck', 'dev'));
    const manager = aPerson.manager;
    expect(manager).equal('Kent Beck');
  });
  it('002', () => {
    const Person = Person2;
    const Department = Department2;

    const aPerson = new Person('Martin Fowler', new Department('Kent Beck', 'dev'));
    const manager = aPerson.department.manager;
    expect(manager).equal('Kent Beck');
  });
});

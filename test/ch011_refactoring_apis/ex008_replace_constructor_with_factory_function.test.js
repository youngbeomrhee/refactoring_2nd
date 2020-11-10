const { expect, assert } = require('chai');
const { Employee } = require('../../src/ch011_refactoring_apis/ex008_replace_constructor_with_factory_function/employee001');
const { createEmployee, createEngineer } = require('../../src/ch011_refactoring_apis/ex008_replace_constructor_with_factory_function/employee002');

describe('Employee001', () => {
  it('create a Manager with the employee name ', () => {
    const candidate = new Employee("Sarah", "M");

    expect(candidate.name).to.equal("Sarah");
    expect(candidate.type).to.equal("Manager");
  });

  it('create an Engineer with the employee name ', () => {
    const readerEngineer = new Employee("Chloe", "E");

    expect(readerEngineer.name ).to.equal("Chloe");
    expect(readerEngineer.type ).to.equal("Engineer");
  });
});

describe('Employee002', () => {
  it('create a Manager with the employee name ', () => {
    const candidate = createEmployee("Sarah", "M");

    expect(candidate.name).to.equal("Sarah");
    expect(candidate.type).to.equal("Manager");
  });

  it('create an Engineer with the employee name ', () => {
    const readerEngineer = createEngineer("Chloe");

    expect(readerEngineer.name).to.equal("Chloe");
    expect(readerEngineer.type).to.equal("Engineer");
  });
});
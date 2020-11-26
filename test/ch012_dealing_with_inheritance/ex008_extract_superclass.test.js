const { expect, assert } = require('chai');
const { Employee, Department } = require('../../src/ch012_dealing_with_inheritance/ex008_extract_superclass/company001');

describe('employee001', () => {
  it('must throw Error', () => {
    expect(_ => new Employee('Marin Fowler', 'soldier')).to.throw();
  });
});

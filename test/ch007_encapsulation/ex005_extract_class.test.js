const { expect, assert } = require('chai');
const {Person} = require('../../src/ch007_encapsulation/ex005_extract_class/person001');
const {Person: Person2} = require('../../src/ch007_encapsulation/ex005_extract_class/person002');
const {Person: Person3} = require('../../src/ch007_encapsulation/ex005_extract_class/person003');

describe('Person001', () => {
  it('returns name, area code, number and telephone number correctly', () => {
    const aPerson = new Person("Xuemin", "020", "12345678");
    expect(aPerson.name).to.equal("Xuemin");
    expect(aPerson.officeAreaCode).to.equal("020");
    expect(aPerson.officeNumber).to.equal("12345678");
    expect(aPerson.telephoneNumber).to.equal("(020) 12345678");
  });
});

describe('Person002', () => {
  const Person = Person2;
  it('returns name, area code, number and telephone number correctly', () => {
    const aPerson = new Person("Xuemin", "020", "12345678");
    expect(aPerson.name).to.equal("Xuemin");
    expect(aPerson.officeAreaCode).to.equal("020");
    expect(aPerson.officeNumber).to.equal("12345678");
    expect(aPerson.telephoneNumber).to.equal("(020) 12345678");
  });
});

describe('Person003', () => {
  const Person = Person3;
  it('returns name, area code, number and telephone number correctly', () => {
    const aPerson = new Person("Xuemin", "020", "12345678");
    expect(aPerson.name).to.equal("Xuemin");
    expect(aPerson.officeAreaCode).to.equal("020");
    expect(aPerson.officeNumber).to.equal("12345678");
    expect(aPerson.telephoneNumber).to.equal("(020) 12345678");
  });
});
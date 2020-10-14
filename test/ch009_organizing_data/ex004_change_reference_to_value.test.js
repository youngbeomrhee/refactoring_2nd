const { expect, assert } = require('chai');
const {Person} = require('../../src/ch009_organizing_data/ex004_change_reference_to_value/person001');
const {Person: Person2, TelephoneNumber} = require('../../src/ch009_organizing_data/ex004_change_reference_to_value/person002');

describe('person', () => {
  it('person001', () => {
    const aPerson = new Person();
    aPerson.officeAreaCode = "023";
    aPerson.officeNumber = "12345678";
    expect(aPerson.officeAreaCode).equals('023');
    expect(aPerson.officeNumber).equals('12345678');
  });
  it('person001', () => {
    const Person = Person2;
    const aPerson = new Person();
    aPerson.officeAreaCode = "023";
    aPerson.officeNumber = "12345678";
    expect(aPerson.officeAreaCode).equals('023');
    expect(aPerson.officeNumber).equals('12345678');
  });
  it('TelephoneNumber equals method', () => {
    const aPerson = new Person();
    expect(new TelephoneNumber('312', '555-0142').equals(new TelephoneNumber('312', '555-0142'))).equals(true);
    expect(new TelephoneNumber('312', '555-0142').equals(new TelephoneNumber('123', '555-0142'))).equals(false);
  });
});

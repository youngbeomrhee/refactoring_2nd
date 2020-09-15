const { expect, assert } = require('chai');
const {foundPerson} = require('../../src/ch007_encapsulation/ex009_substitute_algorithm/foundPerson001');
const {foundPerson: foundPerson2} = require('../../src/ch007_encapsulation/ex009_substitute_algorithm/foundPerson002');

describe('foundPerson', () => {
  it('001', () => {
    const peoples = ['Donna', 'Don', 'Johnson', 'Kent'];
    expect(foundPerson(peoples)).not.to.eql(['Don', 'Kent']);
    expect(foundPerson(peoples)).eql('Don');

    const nonPeoples = ['$Donna', '$Don', '$Johnson', '$Kent'];
    expect(foundPerson(nonPeoples)).eql('');
  });
  it('002', () => {
    const foundPerson = foundPerson2;
    const peoples = ['Donna', 'Don', 'Johnson', 'Kent'];
    expect(foundPerson(peoples)).eql('Don');

    const nonPeoples = ['$Donna', '$Don', '$Johnson', '$Kent'];
    expect(foundPerson(nonPeoples)).eql('');
  });
});

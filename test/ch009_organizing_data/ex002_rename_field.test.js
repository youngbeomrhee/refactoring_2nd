const { expect, assert } = require('chai');
const {organization} = require('../../src/ch009_organizing_data/ex002_rename_field/organization001');
const {organization: organization2} = require('../../src/ch009_organizing_data/ex002_rename_field/organization002');
const {organization: organization3} = require('../../src/ch009_organizing_data/ex002_rename_field/organization003');
const {organization: organization4} = require('../../src/ch009_organizing_data/ex002_rename_field/organization004');


describe('organization', () => {
  it('organization001', () => {
    expect(organization.name).equal('Acme Gooseberries');
  });
  it('organization002', () => {
    const organization = organization2;
    expect(organization.name).equal('Acme Gooseberries');
  });
  it('organization003', () => {
    const organization = organization3;
    expect(organization.name).equal('Acme Gooseberries');
  });
  it('organization004', () => {
    const organization = organization4;
    expect(organization.title).equal('Acme Gooseberries');
  });
});

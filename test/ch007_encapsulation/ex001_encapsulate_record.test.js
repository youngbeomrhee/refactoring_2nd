const { expect, assert } = require('chai');
const {organization} = require('../../src/ch007_encapsulation/ex001_encapsulate_record/organization001');
const {getRawDataOfOrganization} = require('../../src/ch007_encapsulation/ex001_encapsulate_record/organization002');
const {getRawDataOfOrganization: getRawDataOfOrganization2, getOrganization} = require('../../src/ch007_encapsulation/ex001_encapsulate_record/organization003');
const {getOrganization: getOrganization2} = require('../../src/ch007_encapsulation/ex001_encapsulate_record/organization004');
const {getOrganization: getOrganization3} = require('../../src/ch007_encapsulation/ex001_encapsulate_record/organization005');
const {compareUsage} = require('../../src/ch007_encapsulation/ex001_encapsulate_record/customer001');
const {compareUsage: compareUsage2} = require('../../src/ch007_encapsulation/ex001_encapsulate_record/customer002');
const {compareUsage: compareUsage3} = require('../../src/ch007_encapsulation/ex001_encapsulate_record/customer003');
const {compareUsage: compareUsage4} = require('../../src/ch007_encapsulation/ex001_encapsulate_record/customer004');

describe('organization', () => {

  it('organization value is read', () => {
    let result = `<h1>${organization.name}</h1>`;
    expect(result).to.equal('<h1>Acme Gooseberries</h1>');
  });

  it('organization value is written', () => {
    const newName = 'Kent Beck';
    organization.name = newName;

    result = `<h1>${organization.name}</h1>`;
    expect(result).not.to.equal('<h1>Acme Gooseberries</h1>');
    expect(result).to.equal('<h1>Kent Beck</h1>');
  });

  it('encapsulate organization', () => {
    let result = `<h1>${getRawDataOfOrganization().name}</h1>`;
    expect(result).to.equal('<h1>Acme Gooseberries</h1>');

    const newName = 'Kent Beck';
    getRawDataOfOrganization().name = newName;

    result = `<h1>${getRawDataOfOrganization().name}</h1>`;
    expect(result).not.to.equal('<h1>Acme Gooseberries</h1>');
    expect(result).to.equal('<h1>Kent Beck</h1>');
  });

  it('organization class', () => {
    const getRawDataOfOrganization = getRawDataOfOrganization2;

    let result = `<h1>${getRawDataOfOrganization().name}</h1>`;
    expect(result).to.equal('<h1>Acme Gooseberries</h1>');

    const newName = 'Kent Beck';
    getRawDataOfOrganization().name = newName;

    result = `<h1>${getRawDataOfOrganization().name}</h1>`;
    expect(result).not.to.equal('<h1>Acme Gooseberries</h1>');
    expect(result).to.equal('<h1>Kent Beck</h1>');
  });

  it('using getter and setter', () => {
    const getOrganization = getOrganization2;

    let result = `<h1>${getOrganization().name}</h1>`;
    expect(result).to.equal('<h1>Acme Gooseberries</h1>');

    const newName = 'Kent Beck';
    getOrganization().name = newName;

    result = `<h1>${getOrganization().name}</h1>`;
    expect(result).not.to.equal('<h1>Acme Gooseberries</h1>');
    expect(result).to.equal('<h1>Kent Beck</h1>');
  });

  it('using getter and setter', () => {
    const getOrganization = getOrganization3;

    let result = `<h1>${getOrganization().name}/${getOrganization().country}</h1>`;
    expect(result).to.equal('<h1>Acme Gooseberries/GB</h1>');

    const newName = 'Kent Beck';
    getOrganization().name = newName;
    getOrganization().country = "US";

    result = `<h1>${getOrganization().name}/${getOrganization().country}</h1>`;
    expect(result).not.to.equal('<h1>Acme Gooseberries/GB</h1>');
    expect(result).to.equal('<h1>Kent Beck/US</h1>');
  });
});

describe('customer', () => {
  it('compareUsage', () => {
    expect(compareUsage(1920, 2016, 1)).to.eql({laterAmount: 50, change: -20});
  });

  it('compareUsage after encapsulation variable', () => {
    expect(compareUsage(1920, 2016, 1)).to.eql(compareUsage2(1920, 2016, 1));
  });

  it('compareUsage after extraction to class', () => {
    expect(compareUsage(1920, 2016, 1)).to.eql(compareUsage3(1920, 2016, 1));
  });

  it('compareUsage using rawdata', () => {
    expect(compareUsage(1920, 2016, 1)).to.eql(compareUsage4(1920, 2016, 1));
  });

});


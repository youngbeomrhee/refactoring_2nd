const { expect, assert } = require('chai');
const {defaultOwner} = require('../../src/ch006_basic_refactoring/ex006_encapsulate_variable/owner001');
const {defaultOwner: defaultOwner2, getDefaultOwner} = require('../../src/ch006_basic_refactoring/ex006_encapsulate_variable/owner002');
const {getDefaultOwner: getDefaultOwner2} = require('../../src/ch006_basic_refactoring/ex006_encapsulate_variable/owner003');
const {Person} = require('../../src/ch006_basic_refactoring/ex006_encapsulate_variable/owner004');

describe('owner', () => {
  it('getter : before refactoring', () => {
    expect(defaultOwner).to.deep.include({firstName: "Martin"});
    expect(defaultOwner).to.deep.include({lastName: "Fowler"});
  });

  it('setter : before refactoring', () => {
    defaultOwner.firstName = 'Kent';
    defaultOwner.lastName = 'Beck';

    expect(defaultOwner).not.to.deep.include({firstName: "Martin"});
    expect(defaultOwner).not.to.deep.include({lastName: "Fowler"});

    expect(defaultOwner).to.deep.include({firstName: "Kent"});
    expect(defaultOwner).to.deep.include({lastName: "Beck"});
  });

  it('getter : after encapsulation but can change default value', () => {
    expect(defaultOwner2).to.be.undefined;

    const owner1 = getDefaultOwner();
    const owner2 = getDefaultOwner();

    expect(owner1).to.deep.include({firstName: "Martin"});
    expect(owner1).to.deep.include({lastName: "Fowler"});

    owner2.firstName = 'Kent';
    owner2.lastName = 'Beck';

    expect(owner1).to.deep.include({firstName: "Kent"});
    expect(owner1).to.deep.include({lastName: "Beck"});
  });

  it('getter : record encapsulation', () => {
    const owner1 = new Person();
    const owner2 = new Person({firstName: "Robert", lastName: "Martin"});

    expect(owner1).to.deep.include({firstName: "Martin"});
    expect(owner1).to.deep.include({lastName: "Fowler"});

    expect(owner2).to.deep.include({firstName: "Robert"});
    expect(owner2).to.deep.include({lastName: "Martin"});

    owner2.firstName = 'Kent';
    owner2.lastName = 'Beck';

    expect(owner2).to.deep.include({firstName: "Kent"});
    expect(owner2).to.deep.include({lastName: "Beck"});

    expect(owner1).not.to.deep.include({firstName: "Kent"});
    expect(owner1).not.to.deep.include({lastName: "Beck"});
  });

/*

  it('setter : after getter encapsulation and no setter encapsulation', () => {

  });

  it('setter : after encapsulation', () => {
    const owner1 = getDefaultOwner();
    const owner2 = getDefaultOwner();

    owner2.firstName = 'Kent';
    owner2.lastName = 'Beck';

    expect(owner1).to.deep.include({firstName: "Kent"});
    expect(owner1).to.deep.include({lastName: "Beck"});
  });
*/

});
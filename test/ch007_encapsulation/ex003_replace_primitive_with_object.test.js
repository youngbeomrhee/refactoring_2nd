const { expect, assert } = require('chai');
const {highPriorityCount} = require('../../src/ch007_encapsulation/ex003_replace_primitive_with_object/order001');
const {highPriorityCount: highPriorityCount2} = require('../../src/ch007_encapsulation/ex003_replace_primitive_with_object/order002');
const {highPriorityCount: highPriorityCount3} = require('../../src/ch007_encapsulation/ex003_replace_primitive_with_object/order003');
const {highPriorityCount: highPriorityCount4} = require('../../src/ch007_encapsulation/ex003_replace_primitive_with_object/order004');
const {highPriorityCount: highPriorityCount5} = require('../../src/ch007_encapsulation/ex003_replace_primitive_with_object/order005');

describe('highPriorityCount', () => {
  it('has 2 orders', () => {
    expect(highPriorityCount).to.equal(2);
  });
  it('has 2 orders', () => {
    expect(highPriorityCount2).to.equal(2);
  });
  it('has 2 orders', () => {
    expect(highPriorityCount3).to.equal(2);
  });
  it('has 2 orders', () => {
    expect(highPriorityCount4).to.equal(2);
  });
  it('has 2 orders', () => {
    // expect(highPriorityCount5).to.equal(2);
  });
});
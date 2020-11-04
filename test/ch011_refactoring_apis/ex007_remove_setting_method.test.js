const { expect, assert } = require('chai');
const { Person } = require('../../src/ch011_refactoring_apis/ex007_remove_setting_method/person001');

describe('person', () => {
  it('person001', () => {
    const martin = new Person();
    martin.name = "martin";
    martin.id = "1234"; 
  });
  it('person002', () => {
    const martin = new Person("1234");
    martin.name = "martin";
    // martin.id = "1234";
  });
});
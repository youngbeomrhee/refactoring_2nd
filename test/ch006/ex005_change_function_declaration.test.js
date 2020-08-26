const { expect, assert } = require('chai');
const {circum} = require('../../src/ch006/ex005_change_function_declaration/circum001');
const {circumference} = require('../../src/ch006/ex005_change_function_declaration/circum002');
const {circum: circum2, circumference: circumference2} = require('../../src/ch006/ex005_change_function_declaration/circum003');

describe('circum', () => {
  it('should calculate circumference given a radius', () => {
    expect(circum(100)).to.equal(628.3185307179587);
  });
});

describe('circum을 circumference로 변경', () => {
  it('should calculate circumference given a radius', () => {
    expect(circumference(100)).to.equal(628.3185307179587);
  });
});

describe('circum을 circumference로 마이그레이션', () => {
  it('should calculate circum and circumference return the same value', () => {
    expect(circum2(100)).to.equal(circumference2(100));
  });
});


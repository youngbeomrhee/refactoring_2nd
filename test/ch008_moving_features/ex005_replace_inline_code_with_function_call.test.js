const { expect, assert } = require('chai');
const {includeMA} = require('../../src/ch008_moving_features/ex005_replace_inline_code_with_function_call/states001');

describe('includeMA', () => {
  it('include MA', () => {
    const states = ["AK", "FL", "NY", "WA", "MA"];
    let appliesToMass = includeMA(states);
    expect(appliesToMass).equal(true);
  });

  it('replace inline code with function call', () => {
    const states = ["AK", "FL", "NY", "WA", "MA"];
    let appliesToMass = states.includes("MA");
    expect(appliesToMass).equal(true);
  });
});

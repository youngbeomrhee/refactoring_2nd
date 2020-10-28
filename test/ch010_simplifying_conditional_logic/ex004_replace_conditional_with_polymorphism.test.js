const { expect, assert } = require('chai');
const {plumages} = require('../../src/ch010_simplifying_conditional_logic/ex004_replace_conditional_with_polymorphism/birds001');
const {plumages: plumages2} = require('../../src/ch010_simplifying_conditional_logic/ex004_replace_conditional_with_polymorphism/birds002');
const {plumages: plumages3} = require('../../src/ch010_simplifying_conditional_logic/ex004_replace_conditional_with_polymorphism/birds003');
const {plumages: plumages4} = require('../../src/ch010_simplifying_conditional_logic/ex004_replace_conditional_with_polymorphism/birds004');
const {plumages: plumages5} = require('../../src/ch010_simplifying_conditional_logic/ex004_replace_conditional_with_polymorphism/birds005');
const {rating} = require('../../src/ch010_simplifying_conditional_logic/ex004_replace_conditional_with_polymorphism/rating001');
const {rating: rating2} = require('../../src/ch010_simplifying_conditional_logic/ex004_replace_conditional_with_polymorphism/rating002');
const {rating: rating3} = require('../../src/ch010_simplifying_conditional_logic/ex004_replace_conditional_with_polymorphism/rating003');
const {rating: rating4} = require('../../src/ch010_simplifying_conditional_logic/ex004_replace_conditional_with_polymorphism/rating004');
const {rating: rating5} = require('../../src/ch010_simplifying_conditional_logic/ex004_replace_conditional_with_polymorphism/rating005');
const {rating: rating6} = require('../../src/ch010_simplifying_conditional_logic/ex004_replace_conditional_with_polymorphism/rating006');

describe('plumages', () => {
  it('birds001 : calculates plumages for all supported birds, gives unknown for unsupported ', () => {
    const birds = [
      {name: "EuropeanSwallow", type: "EuropeanSwallow", numberOfCoconuts: 1, voltage: 100},
      {name: "AfricanSwallow", type: "AfricanSwallow", numberOfCoconuts: 2, voltage: 200},
      {name: "NorwegianBlueParrot", type: "NorwegianBlueParrot", numberOfCoconuts: 3, voltage: 300},
      {name: "Foo", type: "Foo"}
    ];

    expect(plumages(birds)).to.deep.equal(new Map([
      ['EuropeanSwallow', 'average'],
      ['AfricanSwallow', 'average'],
      ['NorwegianBlueParrot', 'scorched'],
      ['Foo', 'unknown']
    ]));
  });

  it('birds002 : calculates plumages for all supported birds, gives unknown for unsupported ', () => {
    const plumages = plumages2;
    const birds = [
      {name: "EuropeanSwallow", type: "EuropeanSwallow", numberOfCoconuts: 1, voltage: 100},
      {name: "AfricanSwallow", type: "AfricanSwallow", numberOfCoconuts: 2, voltage: 200},
      {name: "NorwegianBlueParrot", type: "NorwegianBlueParrot", numberOfCoconuts: 3, voltage: 300},
      {name: "Foo", type: "Foo"}
    ];

    expect(plumages(birds)).to.deep.equal(new Map([
      ['EuropeanSwallow', 'average'],
      ['AfricanSwallow', 'average'],
      ['NorwegianBlueParrot', 'scorched'],
      ['Foo', 'unknown']
    ]));
  });

  it('birds003 : calculates plumages for all supported birds, gives unknown for unsupported ', () => {
    const plumages = plumages3;
    const birds = [
      {name: "EuropeanSwallow", type: "EuropeanSwallow", numberOfCoconuts: 1, voltage: 100},
      {name: "AfricanSwallow", type: "AfricanSwallow", numberOfCoconuts: 2, voltage: 200},
      {name: "NorwegianBlueParrot", type: "NorwegianBlueParrot", numberOfCoconuts: 3, voltage: 300},
      {name: "Foo", type: "Foo"}
    ];

    expect(plumages(birds)).to.deep.equal(new Map([
      ['EuropeanSwallow', 'average'],
      ['AfricanSwallow', 'average'],
      ['NorwegianBlueParrot', 'scorched'],
      ['Foo', 'unknown']
    ]));
  });

  it('birds004 : calculates plumages for all supported birds, gives unknown for unsupported ', () => {
    const plumages = plumages4;
    const birds = [
      {name: "EuropeanSwallow", type: "EuropeanSwallow", numberOfCoconuts: 1, voltage: 100},
      {name: "AfricanSwallow", type: "AfricanSwallow", numberOfCoconuts: 2, voltage: 200},
      {name: "NorwegianBlueParrot", type: "NorwegianBlueParrot", numberOfCoconuts: 3, voltage: 300},
      {name: "Foo", type: "Foo"}
    ];

    expect(plumages(birds)).to.deep.equal(new Map([
      ['EuropeanSwallow', 'average'],
      ['AfricanSwallow', 'average'],
      ['NorwegianBlueParrot', 'scorched'],
      ['Foo', 'unknown']
    ]));
  });

  it('birds005 : calculates plumages for all supported birds, gives unknown for unsupported ', () => {
    const plumages = plumages5;
    const birds = [
      {name: "EuropeanSwallow", type: "EuropeanSwallow", numberOfCoconuts: 1, voltage: 100},
      {name: "AfricanSwallow", type: "AfricanSwallow", numberOfCoconuts: 2, voltage: 200},
      {name: "NorwegianBlueParrot", type: "NorwegianBlueParrot", numberOfCoconuts: 3, voltage: 300},
      {name: "Foo", type: "Foo"}
    ];

    expect(plumages(birds)).to.deep.equal(new Map([
      ['EuropeanSwallow', 'average'],
      ['AfricanSwallow', 'average'],
      ['NorwegianBlueParrot', 'scorched'],
      ['Foo', 'unknown']
    ]));
  });
});


describe('rating ', () => {
  it('rating001 : give a B', () => {
    const voyage = {zone: "west-indies", length: 10};
    const history = [
      {zone: "east-indies", profit:  5},
      {zone: "west-indies", profit: 15},
      {zone: "china",       profit: -2},
      {zone: "west-africa", profit:  7},
    ];
    expect(rating(voyage, history)).to.equal("B");
  });

  it('rating002 : give a B', () => {
    const rating = rating2;
    const voyage = {zone: "west-indies", length: 10};
    const history = [
      {zone: "east-indies", profit:  5},
      {zone: "west-indies", profit: 15},
      {zone: "china",       profit: -2},
      {zone: "west-africa", profit:  7},
    ];
    expect(rating(voyage, history)).to.equal("B");
  });

  it('rating003 : give a B', () => {
    const rating = rating3;
    const voyage = {zone: "west-indies", length: 10};
    const history = [
      {zone: "east-indies", profit:  5},
      {zone: "west-indies", profit: 15},
      {zone: "china",       profit: -2},
      {zone: "west-africa", profit:  7},
    ];
    expect(rating(voyage, history)).to.equal("B");
  });

  it('rating004 : give a B', () => {
    const rating = rating4;
    const voyage = {zone: "west-indies", length: 10};
    const history = [
      {zone: "east-indies", profit:  5},
      {zone: "west-indies", profit: 15},
      {zone: "china",       profit: -2},
      {zone: "west-africa", profit:  7},
    ];
    expect(rating(voyage, history)).to.equal("B");
  });

  it('rating005 : give a B', () => {
    const rating = rating5;
    const voyage = {zone: "west-indies", length: 10};
    const history = [
      {zone: "east-indies", profit:  5},
      {zone: "west-indies", profit: 15},
      {zone: "china",       profit: -2},
      {zone: "west-africa", profit:  7},
    ];
    expect(rating(voyage, history)).to.equal("B");
  });

  it('rating006 : give a B', () => {
    const rating = rating6;
    const voyage = {zone: "west-indies", length: 10};
    const history = [
      {zone: "east-indies", profit:  5},
      {zone: "west-indies", profit: 15},
      {zone: "china",       profit: -2},
      {zone: "west-africa", profit:  7},
    ];
    expect(rating(voyage, history)).to.equal("B");
  });
});
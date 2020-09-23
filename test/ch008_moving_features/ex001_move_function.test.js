const { expect, assert } = require('chai');
const {trackSummary} = require('../../src/ch008_moving_features/ex001_move_function/track001');
const {trackSummary: trackSummary2} = require('../../src/ch008_moving_features/ex001_move_function/track002');
const {trackSummary: trackSummary3} = require('../../src/ch008_moving_features/ex001_move_function/track003');
const {Account} = require('../../src/ch008_moving_features/ex001_move_function/account001');

describe('trackSummary', () => {
  it('calculate distance, pace and time between two points', () => {
    const newYork = {
      lat: 40.73061,
      lon: -73.935242
    };

    const tokyo = {
      lat: 35.652832,
      lon: 139.839478
    };

    expect(trackSummary([newYork, tokyo])).to.eql({
      distance: 6740.914927144901,
      pace: 0.02472463581991205,
      time: 10000
    });
  });
  it('002 calculate distance, pace and time between two points', () => {
    const trackSummary = trackSummary2;

    const newYork = {
      lat: 40.73061,
      lon: -73.935242
    };

    const tokyo = {
      lat: 35.652832,
      lon: 139.839478
    };

    expect(trackSummary([newYork, tokyo])).to.eql({
      distance: 6740.914927144901,
      pace: 0.02472463581991205,
      time: 10000
    });
  });


  it('003 calculate distance, pace and time between two points', () => {
    const trackSummary = trackSummary3;

    const newYork = {
      lat: 40.73061,
      lon: -73.935242
    };

    const tokyo = {
      lat: 35.652832,
      lon: 139.839478
    };

    expect(trackSummary([newYork, tokyo])).to.eql({
      distance: 6740.914927144901,
      pace: 0.02472463581991205,
      time: 10000
    });
  });
});

describe('account', () => {
  it('has bankCharge of 4.5 when daysOverdrawn is 0', () => {
    expect(new Account('Premium', 0).bankCharge).to.equal(4.5);
    expect(new Account('Non-premium', 0).bankCharge).to.equal(4.5);
  });

  it('has bankCharge more than 4.5 when daysOverdrawn is more than 0', () => {
    expect(new Account('Premium', 1).bankCharge).to.equal(14.5);
    expect(new Account('Non-premium', 1).bankCharge).to.equal(6.25);
  });

  it('has no overdraftCharge when no overdrawn for non premium', () => {
    expect(new Account('Non-premium', 0).overdraftCharge()).to.equal(0);
  });

  it('has a basis overdraftCharge even when no overdrawn for non premium', () => {
    expect(new Account('Premium', 0).overdraftCharge()).to.equal(10);
  });
});

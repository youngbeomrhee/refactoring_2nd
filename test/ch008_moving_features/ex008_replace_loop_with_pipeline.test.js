const { expect, assert } = require('chai');
const {acquireData} = require('../../src/ch008_moving_features/ex008_replace_loop_with_pipeline/acquireData001');
const {acquireData: acquireData2} = require('../../src/ch008_moving_features/ex008_replace_loop_with_pipeline/acquireData002');
const {acquireData: acquireData3} = require('../../src/ch008_moving_features/ex008_replace_loop_with_pipeline/acquireData003');
const {acquireData: acquireData4} = require('../../src/ch008_moving_features/ex008_replace_loop_with_pipeline/acquireData004');
const {acquireData: acquireData5} = require('../../src/ch008_moving_features/ex008_replace_loop_with_pipeline/acquireData005');
const {acquireData: acquireData6} = require('../../src/ch008_moving_features/ex008_replace_loop_with_pipeline/acquireData006');

const csvInput = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;

describe('acquireData001', () => {
  it('pick India cities only', () => {
    expect(acquireData(csvInput)).to.eql([
      {
        "city": "Bangalore",
        "phone": "+91 80 4064 9570"
      },
      {
        "city": "Chennai",
        "phone": "+91 44 660 44766"
      }
    ]);
  });
});

describe('acquireData002', () => {
  const acquireData = acquireData2;
  it('pick India cities only', () => {
    expect(acquireData(csvInput)).to.eql([
      {
        "city": "Bangalore",
        "phone": "+91 80 4064 9570"
      },
      {
        "city": "Chennai",
        "phone": "+91 44 660 44766"
      }
    ]);
  });
});

describe('acquireData003', () => {
  const acquireData = acquireData3;
  it('pick India cities only', () => {
    expect(acquireData(csvInput)).to.eql([
      {
        "city": "Bangalore",
        "phone": "+91 80 4064 9570"
      },
      {
        "city": "Chennai",
        "phone": "+91 44 660 44766"
      }
    ]);
  });
});

describe('acquireData004', () => {
  const acquireData = acquireData4;
  it('pick India cities only', () => {
    expect(acquireData(csvInput)).to.eql([
      {
        "city": "Bangalore",
        "phone": "+91 80 4064 9570"
      },
      {
        "city": "Chennai",
        "phone": "+91 44 660 44766"
      }
    ]);
  });
});

describe('acquireData005', () => {
  const acquireData = acquireData5;
  it('pick India cities only', () => {
    expect(acquireData(csvInput)).to.eql([
      {
        "city": "Bangalore",
        "phone": "+91 80 4064 9570"
      },
      {
        "city": "Chennai",
        "phone": "+91 44 660 44766"
      }
    ]);
  });
});

describe('acquireData006', () => {
  const acquireData = acquireData6;
  it('pick India cities only', () => {
    expect(acquireData(csvInput)).to.eql([
      {
        "city": "Bangalore",
        "phone": "+91 80 4064 9570"
      },
      {
        "city": "Chennai",
        "phone": "+91 44 660 44766"
      }
    ]);
  });
});


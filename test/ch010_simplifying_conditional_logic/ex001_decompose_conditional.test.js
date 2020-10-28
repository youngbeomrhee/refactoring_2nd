const { expect, assert } = require('chai');
const { DateUtil } = require('../../src/ch010_simplifying_conditional_logic/ex001_decompose_conditional/dateutil');
const { chargeAmount } = require('../../src/ch010_simplifying_conditional_logic/ex001_decompose_conditional/charge001');
const { chargeAmount: chargeAmount2 } = require('../../src/ch010_simplifying_conditional_logic/ex001_decompose_conditional/charge002');
const { chargeAmount: chargeAmount3 } = require('../../src/ch010_simplifying_conditional_logic/ex001_decompose_conditional/charge003');

describe('charge', () => {
  let plan, beforeSummerDate, inSummerDate, afterSummerDate;

  beforeEach(() => {
    plan = {};
    plan.summerStart = new Date('2020-07-01');
    plan.summerEnd = new Date('2020-08-31');
    plan.summerRate = 10000;
    plan.regularRate = 20000;
    plan.regularServiceCharge = 2000;

    beforeSummerDate = new DateUtil('2020-05-01');
    inSummerDate = new DateUtil('2020-08-01');
    afterSummerDate = new DateUtil('2020-11-01');
  });

  it('charge001', () => {
    expect(chargeAmount(beforeSummerDate, plan, 100)).equals(2002000);
    expect(chargeAmount(inSummerDate, plan, 100)).equals(1000000);
    expect(chargeAmount(afterSummerDate, plan, 100)).equals(2002000);
  });
  it('charge002', () => {
    const chargeAmount = chargeAmount2;
    expect(chargeAmount(beforeSummerDate, plan, 100)).equals(2002000);
    expect(chargeAmount(inSummerDate, plan, 100)).equals(1000000);
    expect(chargeAmount(afterSummerDate, plan, 100)).equals(2002000);
  });
  it('charge003', () => {
    const chargeAmount = chargeAmount3;
    expect(chargeAmount(beforeSummerDate, plan, 100)).equals(2002000);
    expect(chargeAmount(inSummerDate, plan, 100)).equals(1000000);
    expect(chargeAmount(afterSummerDate, plan, 100)).equals(2002000);
  });
});

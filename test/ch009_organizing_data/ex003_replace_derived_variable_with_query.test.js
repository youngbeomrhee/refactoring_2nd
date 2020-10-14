const { expect, assert } = require('chai');
const {ProductionPlan: ProductionPlan1} = require('../../src/ch009_organizing_data/ex003_replace_derived_variable_with_query/productionPlan1_001');
const {ProductionPlan: ProductionPlan1_2} = require('../../src/ch009_organizing_data/ex003_replace_derived_variable_with_query/productionPlan1_002');
const {ProductionPlan: ProductionPlan1_3} = require('../../src/ch009_organizing_data/ex003_replace_derived_variable_with_query/productionPlan1_003');
const {ProductionPlan: ProductionPlan2_2} = require('../../src/ch009_organizing_data/ex003_replace_derived_variable_with_query/productionPlan2_002');


describe('ProductionPlan1', () => {
  it('ProductionPlan1_001', () => {
    const ProductionPlan = ProductionPlan1;
    const productionPlan = new ProductionPlan();
    expect(productionPlan.production).equal(0);
    productionPlan.applyAdjustment({amount: 10});
    productionPlan.applyAdjustment({amount: 20});
    expect(productionPlan.production).equal(30);
  });
  it('ProductionPlan1_002', () => {
    const ProductionPlan = ProductionPlan1_2;
    const productionPlan = new ProductionPlan();
    productionPlan.applyAdjustment({amount: 10});
    productionPlan.applyAdjustment({amount: 20});
    expect(productionPlan.production).equal(30);
  });
  it('ProductionPlan1_003', () => {
    const ProductionPlan = ProductionPlan1_3;
    const productionPlan = new ProductionPlan();
    productionPlan.applyAdjustment({amount: 10});
    productionPlan.applyAdjustment({amount: 20});
    expect(productionPlan.production).equal(30);
  });
});

describe('ProductionPlan2', () => {
  it('ProductionPlan2_001', () => {
    const ProductionPlan = ProductionPlan2_2;
    const productionPlan = new ProductionPlan(100);
    expect(productionPlan.production).equal(100);
    productionPlan.applyAdjustment({amount: 10});
    productionPlan.applyAdjustment({amount: 20});
    expect(productionPlan.production).equal(130);
  });
});

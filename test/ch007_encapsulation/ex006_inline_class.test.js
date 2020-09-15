const { expect, assert } = require('chai');
const {Shipment} = require('../../src/ch007_encapsulation/ex006_inline_class/shipment001');
const {Shipment: Shipment2} = require('../../src/ch007_encapsulation/ex006_inline_class/shipment002');

describe('Shipment', () => {
  it('001', () => {
    const aShipment = new Shipment({shippingCompany: 'Coupang', trackingNumber: 1234});
    expect(aShipment.trackingInfo).equal('Coupang: 1234');
    aShipment.trackingInformation.shippingCompany = 'Amazon';
    expect(aShipment.trackingInfo).equal('Amazon: 1234');
  });
  it('002', () => {
    const Shipment = Shipment2;
    const aShipment = new Shipment('Coupang', 1234);
    expect(aShipment.trackingInfo).equal('Coupang: 1234');
    // aShipment.trackingInformation.shippingCompany = 'Amazon';
    aShipment.shippingCompany = 'Amazon';
    expect(aShipment.trackingInfo).equal('Amazon: 1234');
  });
});

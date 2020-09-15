// Shipment 외부에서 직접 호출되는 TrackingInformantion 메서드들을 모조리 Shipment로 옮긴다
// 모두 옮겼다면 TrackingInformation 클래스를 삭제한다
class Shipment {
  constructor(shippingCompany, trackingNumber) {
    this._shippingCompany = shippingCompany;
    this._trackingNumber = trackingNumber;
  }
  get trackingInfo() {
    // return this._trackingInformation.display;
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
  get shippingCompany() {return this._shippingCompany;}
  set shippingCompany(arg) {this._shippingCompany = arg;}
  get trackingNumber() {return this._trackingNumber;}
  set trackingNumber(arg) {this._trackingNumber = arg;}
}

module.exports = {Shipment}